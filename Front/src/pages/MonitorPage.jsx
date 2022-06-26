import React, {useState} from "react";
import { stringify } from "qs";
import { SCard, SCardContainer, SCardChartContainer, SCardHeader, SCardLabel, SCardTitle } from "../components/Card/styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { SButton } from "../components/Button/styles";
import { BsPlayFill, BsStopFill } from "react-icons/bs";
import EditInput from "../components/EditInput/EditInput";
import api from "../config/api";
import Api from '../services/ApiService';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["Use", "Free"],
    datasets: [
        {
            label: "# of Usage",
            data: [40, 60],
            backgroundColor: [
                "#347CFF",
                "#B8D0FE",
            ],
            borderColor: ["#347CFF", "#B8D0FE"],
            borderWidth: 1,
        },
    ],
};

const MonitorPage = () => {

    const [value, setValue] = useState("127.0.0.1");

    const handleClick = async () => {
        const dados = { // No dados terá os dados de pesquisa na API
            ipAddress: '192.168.1.6',
            community: 'gerencia',
            oid: '1.3.6.1.2.1.1.5.010',
        };
        
        // endpoint, objeto
        Api.get('snmp', dados)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response?.data);
            });
    }

    return (
        <div>
            <SCard>
                <SCardHeader>
                    <SCardTitle>Memory Usage</SCardTitle>
                    <EditInput value={value} setValue={setValue}></EditInput>
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
                    <SButton type="Button" onClick={handleClick} primary><BsPlayFill />INICIAR</SButton>
                    <SButton type="Button"><BsStopFill/>PARAR</SButton>
                </SCardContainer>
            </SCard>
        </div>
    );
};

export default MonitorPage;
