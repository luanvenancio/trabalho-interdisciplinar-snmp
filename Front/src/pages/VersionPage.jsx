import React, { useEffect, useState } from "react";
import {
    SCard,
    SCardContainer,
    SCardHeader,
    SCardTitle,
    SCardInputContainer,
    SCardImage,
} from "../components/Card/styles";

import { SLogo } from "../components/Sidebar/styles";
import { SButton } from "../components/Button/styles";
import { BsPlayFill, BsWindows } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";
import EditInput from "../components/EditInput/EditInput";
import Api from "../services/ApiService";
import { windowsPNG, linuxPNG } from "../assets";

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
                setInfo(response.data);
            })
            .catch((error) => {
                console.log(error.response?.data);
            });
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
                        <SCardImage align="center">
                            <img src={windowsPNG} alt="windows" />
                        </SCardImage>
                        {info[0].split("Data: ")[1] ? info[0].split("Data: ")[1] : info[0]}
                    </>
                ) : (
                    <></>
                )}
                {info && info[0].includes("Linux") ? (
                    <>
                        <SCardImage>
                        <img src={linuxPNG} alt="linux" />
                        </SCardImage>
                        {info[0].split("Data: ")[1] ? info[0].split("Data: ")[1] : info[0]}
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
