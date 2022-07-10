import React, { useEffect, useState } from "react";
import {
    SCard,
    SCardContainer,
    SCardChartContainer,
    SCardHeader,
    SCardTitle,
    SCardInputContainer,
} from "../components/Card/styles";
import { SButton } from "../components/Button/styles";
import { BsPlayFill, BsWindows } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";
import EditInput from "../components/EditInput/EditInput";
import Api from "../services/ApiService";

const VersionPage = () => {
    const [ipAddressValue, setIpAddressValue] = useState("192.168.100.2");
    const [comunityValue, setComunityValue] = useState("gerencia");
    const [info, setInfo] = useState("");

    const handleClick = async () => {
        const dados = {
            // No dados terá os dados de pesquisa na API
            ipAddress: ipAddressValue,
            community: comunityValue,
            oid: "1.3.6.1.2.1.1.1.0",
        };

        // endpoint, objeto
        Api.get("snmp", dados)
            .then((response) => {
                //setInfo(response.data[0].split("-"));
                setInfo(response.data);
            })
            .catch((error) => {
                console.log(error.response?.data);
            });

        console.log(info[0]);
    };

    return (
        <SCard>
            <SCardHeader>
                <SCardTitle>Versão do Sistema</SCardTitle>
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
            </SCardHeader>
            <SCardHeader>
                {info && info[0].includes("Windows") ? (
                    <>
                        <BsWindows />
                        {info[0].split("Data: ")[1]}
                    </>
                ) : (
                    <></>
                )}
                {info && info[0].includes("Linux") ? (
                    <>
                        <FaLinux />
                        {info[0].split("Data: ")[1]}
                    </>
                ) : (
                    <></>
                )}
            </SCardHeader>
            <SCardContainer>
                <SButton type="Button" onClick={handleClick} primary>
                    <BsPlayFill />
                    BUSCAR
                </SButton>
            </SCardContainer>
        </SCard>
    );
};

export default VersionPage;
