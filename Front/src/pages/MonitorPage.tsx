import { AxiosError, AxiosResponse } from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { stringify } from "qs";
import { Doughnut } from "react-chartjs-2";
import { SButton } from "../components/Button/styles";
import { SCard, SCardChartContainer, SCardContainer, SCardHeader, SCardLabel, SCardTitle } from "../components/Card/styles";
import api from "../config/api";
import Api from '../services/ApiService';

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
    const handleClick = async () => {
        const dados = { // No dados terá os dados de pesquisa na API
            ipAddress: '192.168.1.6',
            community: 'gerencia',
            oid: '1.3.6.1.2.1.1.5.010',
        };
        
        // endpoint, objeto
        Api.get('snmp', dados)
            .then((response: AxiosResponse) => {
                console.log(response.data);
            })
            .catch((error: AxiosError) => {
                console.log(error.response?.data);
            });
    }
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
                    <SButton type="Button" onClick={handleClick} primary>Iniciar</SButton>
                    <SButton>Parar</SButton>
                </SCardContainer>
            </SCard>
        </div>
    );
};

export default MonitorPage;
