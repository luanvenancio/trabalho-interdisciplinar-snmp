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
const dataV = [];

const MonitorPage = () => {
    const [ipAddressValue, setIpAddressValue] = useState("192.168.100.2");
    const [iniciar, setIniciar] = useState(false);

    const [data, setData] = useState({
        labels: ["Delivered", "Errors", "Send"],
        datasets: [
            {
                backgroundColor: ["#347CFF", "#ff3434", "#39f387"],
                borderColor: ["#316ddf", "#e02e2e", "#24c467"],
            },
        ],
    });

    const udpDelivered = {
        // No dados terá os dados de pesquisa na API
        ipAddress: ipAddressValue,
        community: "gerencia",
        oid: "1.3.6.1.2.1.7.1.0",
    };

    const udpErrors = {
        // No dados terá os dados de pesquisa na API
        ipAddress: ipAddressValue,
        community: "gerencia",
        oid: "1.3.6.1.2.1.7.3.0",
    };

    const udpSend = {
        // No dados terá os dados de pesquisa na API
        ipAddress: ipAddressValue,
        community: "gerencia",
        oid: "1.3.6.1.2.1.7.4.0",
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (iniciar) {
                // endpoint, objeto
                Api.get("snmp", udpDelivered)
                    .then((response) => {
                        dataT.push(response.data[0].split("Data: ")[1]);
                        //console.log(response.data[0].split("Data: ")[1]);
                        if (dataT.length > 1) dataT.shift();
                    })
                    .catch((error) => {
                        console.log(error.response?.data);
                    });

                Api.get("snmp", udpErrors)
                    .then((response) => {
                        dataL.push(response.data[0].split("Data: ")[1]);
                        //console.log(response.data[0].split("Data: ")[1]);
                        if (dataL.length > 1) dataL.shift();
                    })
                    .catch((error) => {
                        console.log(error.response?.data);
                    });

                Api.get("snmp", udpSend)
                    .then((response) => {
                        dataV.push(response.data[0].split("Data: ")[1]);
                        //console.log(response.data[0].split("Data: ")[1]);
                        if (dataV.length > 1) dataV.shift();
                    })
                    .catch((error) => {
                        console.log(error.response?.data);
                    });

                //let aux = ((dataL * 100)/dataT);
                console.log("Errors " + dataL);
                console.log("Deliv " + dataT);
                console.log("Send " + dataV);
                //console.log(dataL);
                setData({
                    labels: ["Delivered", "Errors", "Send"],
                    datasets: [
                        {
                            data: [dataT, dataL, dataV],
                            backgroundColor: ["#347CFF", "#ff3434", "#39f387"],
                            borderColor: ["#316ddf", "#e02e2e", "#24c467"],
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
                <SCardTitle>Monitor UDP</SCardTitle>
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
