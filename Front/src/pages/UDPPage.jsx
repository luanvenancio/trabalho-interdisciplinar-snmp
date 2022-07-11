import React, { useEffect, useState } from "react";
import Select from "react-select";
import {
    SCard,
    SCardContainer,
    SCardChartContainer,
    SCardHeader,
    SCardTitle,
    SCardLabelContainer,
    SCardInputContainer,
} from "../components/Card/styles";
import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { SButton } from "../components/Button/styles";
import { BsPlayFill, BsStopFill } from "react-icons/bs";
import { optionsInterval } from "../config/data";
import EditInput from "../components/EditInput/EditInput";
import Api from "../services/ApiService";

ChartJS.register(...registerables);

const dataUdpDelivered = [];
const dataUdpErrors = [];
const dataUdpSend = [];

const UDPPage = () => {
    const [ipAddressValue, setIpAddressValue] = useState("192.168.100.2");
    const [comunityValue, setComunityValue] = useState("gerencia");
    const [iniciar, setIniciar] = useState(false);
    const [timeIntervalOption, setTimeIntervalOption] = useState({
        value: 1000,
        label: "1 seg",
    });

    const [data, setData] = useState({
        labels: ["Recebido(%)", "Erros(%)", "Enviado(%)"],
        datasets: [
            {
                backgroundColor: ["#1A56DB", "#16BDCA", "#6976F5"],
                borderColor: ["#1A56DB", "#16BDCA", "#6976F5"],
            },
        ],
    });

    const udpDelivered = {
        ipAddress: ipAddressValue,
        community: comunityValue,
        oid: "1.3.6.1.2.1.7.1.0",
    };

    const udpErrors = {
        ipAddress: ipAddressValue,
        community: comunityValue,
        oid: "1.3.6.1.2.1.7.3.0",
    };

    const udpSend = {
        ipAddress: ipAddressValue,
        community: comunityValue,
        oid: "1.3.6.1.2.1.7.4.0",
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (iniciar) {
                // endpoint, objeto
                Api.get("snmp", udpDelivered)
                    .then((response) => {
                        dataUdpDelivered.push(
                            response.data[0].split("Data: ")[1]
                        );
                        if (dataUdpDelivered.length > 1)
                            dataUdpDelivered.shift();
                    })
                    .catch((error) => {
                        console.log(error.response?.data);
                    });

                Api.get("snmp", udpErrors)
                    .then((response) => {
                        dataUdpErrors.push(response.data[0].split("Data: ")[1]);
                        if (dataUdpErrors.length > 1) dataUdpErrors.shift();
                    })
                    .catch((error) => {
                        console.log(error.response?.data);
                    });

                Api.get("snmp", udpSend)
                    .then((response) => {
                        dataUdpSend.push(response.data[0].split("Data: ")[1]);
                        if (dataUdpSend.length > 1) dataUdpSend.shift();
                    })
                    .catch((error) => {
                        console.log(error.response?.data);
                    });

                let aux = 0;
                aux =
                    parseInt(dataUdpErrors) +
                    parseInt(dataUdpDelivered) +
                    parseInt(dataUdpSend);

                setData({
                    labels: ["Recebido(%)", "Erros(%)", "Enviado(%)"],
                    datasets: [
                        {
                            data: [
                                (parseInt(dataUdpDelivered) * 100) /
                                    parseInt(aux),
                                (parseInt(dataUdpErrors) * 100) / parseInt(aux),
                                (parseInt(dataUdpSend) * 100) / parseInt(aux),
                            ],
                            backgroundColor: ["#1A56DB", "#16BDCA", "#6976F5"],
                            borderColor: ["#1A56DB", "#16BDCA", "#6976F5"],
                        },
                    ],
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
                <SCardTitle>Monitor UDP</SCardTitle>
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
                                neutral0: `${({ theme }) => theme.bg2}`,
                            },
                        })}
                    />
                </SCardLabelContainer>
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

export default UDPPage;
