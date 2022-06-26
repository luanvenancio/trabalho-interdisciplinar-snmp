import React from "react";
import { SCard, SCardContainer, SCardChartContainer, SCardHeader, SCardLabel, SCardTitle } from "../components/Card/styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { SButton } from "../components/Button/styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["Red", "Blue"],
    datasets: [
        {
            label: "# of Usage",
            data: [10, 90],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
        },
    ],
};

const MonitorPage = () => {
    return (
        <div>
            <SCard>
                <SCardHeader>
                    <SCardTitle>Memory Usage</SCardTitle>
                    <SCardLabel>127.0.0.1</SCardLabel>
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
                    <SButton type="Button" onClick={() => {alert("Click")}} primary>Iniciar</SButton>
                    <SButton>Parar</SButton>
                </SCardContainer>
            </SCard>
        </div>
    );
};

export default MonitorPage;
