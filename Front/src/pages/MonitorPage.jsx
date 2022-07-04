import React, { useState } from "react";
import {
    SCard,
    SCardContainer,
    SCardChartContainer,
    SCardHeader,
    SCardTitle,
} from "../components/Card/styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { SButton } from "../components/Button/styles";
import { BsPlayFill, BsStopFill } from "react-icons/bs";
import EditInput from "../components/EditInput/EditInput";
import Api from "../services/ApiService";

ChartJS.register(ArcElement, Tooltip, Legend);

let numberOfProcess = 0;
export const data = {
    labels: ["Use", "Free"],
    datasets: [
        {
            label: "# of Usage",
            data: numberOfProcess,
            backgroundColor: "#347CFF",
            borderColor: "#347CFF",
        },
    ],
};

const MonitorPage = () => {
    const [value, setValue] = useState("192.168.100.2");

    const handleClick = async () => {
        const dados = {
            // No dados terá os dados de pesquisa na API
            ipAddress: value,
            community: "gerencia",
            oid: ".1.3.6.1.2.1.25.2.3.1.6.1",
        };
        console.log(dados.ipAddress);
        // endpoint, objeto
        Api.get("snmp", dados)
            .then((response) => {
                console.log(response.data);
                numberOfProcess = response;
            })
            .catch((error) => {
                console.log(error.response?.data);
            });
    };

    return (
        <SCard>
            <SCardHeader>
                <SCardTitle>Uso da Memória</SCardTitle>
                <EditInput value={value} setValue={setValue}></EditInput>
            </SCardHeader>
            <SCardChartContainer>
                <Line
                    data={data}
                    options={{
                        responsive: false,
                    }}
                />
            </SCardChartContainer>
            <SCardContainer>
                <SButton type="Button" onClick={handleClick} primary>
                    <BsPlayFill />
                    INICIAR
                </SButton>
                <SButton type="Button">
                    <BsStopFill />
                    PARAR
                </SButton>
            </SCardContainer>
        </SCard>
    );
};

export default MonitorPage;
