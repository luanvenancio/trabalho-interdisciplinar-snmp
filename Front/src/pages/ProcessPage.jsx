import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Toaster } from "react-hot-toast";
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
import { optionsInterval } from "../config/data";

Chart.register(...registerables);

const labelIPInX = [];
const dataIPInY = [];

const ProcessPage = () => {
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
                label: "nº de processos",
                data: dataIPInY,
                backgroundColor: "#769de6",
                borderColor: "#347CFF",
            },
        ],
    });

    const dados = {
        // No dados terá os dados de pesquisa na API
        ipAddress: ipAddressValue,
        community: comunityValue,
        oid: "1.3.6.1.2.1.25.1.6.0",
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
                                    label: "nº de processos",
                                    data: dataIPInY,
                                    backgroundColor: "rgb(138, 171, 233)",
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
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <SCardHeader>
                <SCardTitle>Monitor de Processos</SCardTitle>
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
                        options={optionsInterval}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                                ...theme.colors,
                                neutral0: `${({ theme }) => theme.bg3}`,
                                text: `${({ theme }) => theme.text}`,
                            },
                        })}
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
                                    text: "Número de processos",
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

export default ProcessPage;
