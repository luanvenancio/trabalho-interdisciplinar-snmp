import React, {useState} from "react";
import { stringify } from "qs";
import { SCard, SCardContainer, SCardChartContainer, SCardHeader, SCardLabel, SCardTitle } from "../components/Card/styles";
import { Line } from "react-chartjs-2";
import { SButton } from "../components/Button/styles";
import { BsPlayFill, BsStopFill } from "react-icons/bs";
import EditInput from "../components/EditInput/EditInput";
import api from "../config/api";
import Api from '../services/ApiService';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Chart } from 'react-chartjs-2'
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const MonitorPage = () => {

    const [ipAddressInput, setIpAddressInput] = useState("127.0.0.1");
    const [info, setInfo] =  useState([]);

    const data = {
        labels: ["Use", "Free"],
        datasets: [
            {
                label: "# of Usage",
                data: info.data,
                fill: true,
                backgroundColor: "#347CFF",
                borderColor: "#347CFF",
            },
        ],
    };

    const handleClick = async () => {
        const dados = { // No dados terá os dados de pesquisa na API
            ipAddress: ipAddressInput,
            community: 'public',
            oid: '1.3.6.1.2.1.1.7.0',
        };
        
        // endpoint, objeto
        Api.get('snmp', dados)
            .then((response) => {
                console.log(response.data);
                const info = response.data;
                setInfo(info);
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
                    <EditInput value={ipAddressInput} setValue={setIpAddressInput}></EditInput>
                </SCardHeader>
                <SCardChartContainer>
                <Line
                    data={data}
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
