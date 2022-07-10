import React, { useEffect, useState } from "react";
import Select from "react-select";
import {
    SCard,
    SCardContainer,
    SCardChartContainer,
    SCardHeader,
    SCardTitle,
    SCardInputContainer,
    SCardLabelContainer,
} from "../components/Card/styles";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { SButton } from "../components/Button/styles";
import { BsPlayFill, BsStopFill } from "react-icons/bs";
import EditInput from "../components/EditInput/EditInput";
import Api from "../services/ApiService";

Chart.register(...registerables);

const labelIPInX = [];
const dataIPInY = [];
const options = [
    { value: 1000, label: "1 Seg" },
    { value: 2000, label: "2 Seg" },
    { value: 3000, label: "3 Seg" },
    { value: 5000, label: "5 Seg" },
];

const TCPPage = () => {
    const [ipAddressValue, setIpAddressValue] = useState("192.168.100.2");
    const [comunityValue, setComunityValue] = useState("gerencia");
    const [iniciar, setIniciar] = useState(false);
    const [timeIntervalOption, setTimeIntervalOption] = useState({
        value: 1000,
        label: "1 seg",
    });

    const [data, setData] = useState({
        labels: labelIPInX,
        datasets: [
            {
                label: "nº de Conexões TCP Estabelecidas",
                data: dataIPInY,
                backgroundColor: "#347CFF",
                borderColor: "#347CFF",
            },
        ],
    });

    const dados = {
        // No dados terá os dados de pesquisa na API
        ipAddress: ipAddressValue,
        community: comunityValue,
        oid: "1.3.6.1.2.1.6.9.0",
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (iniciar) {
                const d = new Date();
                // endpoint, objeto
                Api.get("snmp", dados)
                    .then((response) => {
                        dataIPInY.push(response.data[0].split("Data: ")[1]);
                        labelIPInX.push(
                            d.getHours() +
                                ":" +
                                d.getMinutes() +
                                ":" +
                                d.getSeconds()
                        );
                        setData({
                            labels: labelIPInX,
                            datasets: [
                                {
                                    label: "nº de Conexões TCP Estabelecidas",
                                    data: dataIPInY,
                                    backgroundColor: "#347CFF",
                                    borderColor: "#347CFF",
                                },
                            ],
                        });
                    })
                    .catch((error) => {
                        console.log(error.response?.data);
                    });
            } else {
                clearInterval(interval);
            }
        }, timeIntervalOption.value);

        return () => clearInterval(interval);
    }, [iniciar]);

    return (
        <SCard>
            <SCardHeader>
                <SCardTitle>Monitor de Conexões TCP</SCardTitle>
                <SCardLabelContainer>
                    <SCardInputContainer>
                        <EditInput
                            value={ipAddressValue}
                            setValue={setIpAddressValue}
                        ></EditInput>
                        <EditInput
                            value={comunityValue}
                            setValue={setComunityValue}
                        ></EditInput>
                    </SCardInputContainer>
                    <Select
                        defaultValue={timeIntervalOption}
                        onChange={setTimeIntervalOption}
                        options={options}
                    />
                </SCardLabelContainer>
            </SCardHeader>
            <SCardChartContainer>
                <Line
                    data={data}
                    options={{
                        scales: {
                            x: {
                                display: true,
                                title: {
                                    display: true,
                                    text: "Tempo",
                                },
                            },
                            y: {
                                display: true,
                                title: {
                                    display: true,
                                    text: "Número de Conexões TCP Estabelecidas",
                                },
                            },
                        },
                        responsive: true,
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

export default TCPPage;
