import React, { useEffect, useState } from "react";
import {
    SCard,
    SCardContainer,
    SCardChartContainer,
    SCardHeader,
    SCardTitle,
} from "../components/Card/styles";
import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { SButton } from "../components/Button/styles";
import { BsPlayFill, BsStopFill } from "react-icons/bs";
import EditInput from "../components/EditInput/EditInput";
import Api from "../services/ApiService";

ChartJS.register(...registerables);

const dataT = [];
const dataL = [];

const MonitorPage = () => {
    const [ipAddressValue, setIpAddressValue] = useState("192.168.100.2");
    const [iniciar, setIniciar] = useState(false);

    const [data, setData] = useState({
        labels: ["Usado", "Livre"],
        datasets: [
            {
                label: "nº de processos",
                backgroundColor: "#347CFF",
                borderColor: "#347CFF",
            },
        ],
    });

    const dadosMemoriaTotal = {
        // No dados terá os dados de pesquisa na API
        ipAddress: ipAddressValue,
        community: "gerencia",
        oid: "1.3.6.1.2.1.4.9.0",
    };

    const dadosMemoriaLivre = {
        // No dados terá os dados de pesquisa na API
        ipAddress: ipAddressValue,
        community: "gerencia",
        oid: "1.3.6.1.2.1.4.3.0",
    };

    let aux, aux2,temp = 0;
    useEffect(() => {
        const interval = setInterval(() => {
            if (iniciar) {
                // endpoint, objeto
                Api.get("snmp", dadosMemoriaTotal)
                    .then((response) => {
                        aux2 = response.data[0].split("Data: ")[1] - aux2;
                        dataT.push(aux2);
                        //console.log(response.data[0].split("Data: ")[1]);
                        if(dataT.length > 1){
                            dataT.shift();
                        }
                    })
                    .catch((error) => {
                        console.log(error.response?.data);
                    });
                    Api.get("snmp", dadosMemoriaLivre)
                    .then((response) => {
                        temp = (response.data[0].split("Data: ")[1]);
                        aux = temp - aux;
                        console.log(aux);
                        dataL.push(temp);
                        //console.log(response.data[0].split("Data: ")[1]);
                        if(dataL.length > 1)
                            dataL.shift();
                    })
                    .catch((error) => {
                        console.log(error.response?.data);
                    });

                    //let aux = ((dataL * 100)/dataT);
                    console.log(dataL);
                    //console.log(dataL);
                    setData({
                        labels: ["Entregues", "Recebidos"],
                        datasets: [
                            {
                                label: "nº de processos",
                                data: [dataT, dataL],
                                backgroundColor: ["#347CFF", "#ff3434"],
                                borderColor: ["#316ddf", "#e02e2e"],
                            },
                        ],
                    });

            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [iniciar]);

    return (
        <SCard>
            <SCardHeader>
                <SCardTitle>Uso da Memória</SCardTitle>
                <EditInput
                    value={ipAddressValue}
                    setValue={setIpAddressValue}
                ></EditInput>
            </SCardHeader>
            <SCardChartContainer>
                <Doughnut
                    data={data}
                    options={{
                        responsive: false,
                    }}
                />
            </SCardChartContainer>
            <SCardContainer>
                {!iniciar ? (
                    <SButton
                        type="Button"
                        onClick={() => setIniciar(true)}
                        primary
                    >
                        <BsPlayFill />
                        INICIAR
                    </SButton>
                ) : (
                    <SButton type="Button" onClick={() => setIniciar(false)}>
                        <BsStopFill />
                        PARAR
                    </SButton>
                )}
            </SCardContainer>
        </SCard>
    );
};

export default MonitorPage;
