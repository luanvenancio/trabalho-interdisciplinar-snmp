import React, { useEffect, useState } from "react";
import {
    SCard,
    SCardContainer,
    SCardChartContainer,
    SCardHeader,
    SCardLabel,
    SCardTitle,
} from "../components/Card/styles";
import { SButton } from "../components/Button/styles";
import { BsPlayFill } from "react-icons/bs";
import EditInput from "../components/EditInput/EditInput";
import Api from "../services/ApiService";

const VersionPage = () => {
    const [ipAddressValue, setIpAddressValue] = useState("192.168.100.2");
    const [info, setInfo] = useState('');

    const handleClick = async () => {
        const dados = {
            // No dados terá os dados de pesquisa na API
            ipAddress: ipAddressValue,
            community: "gerencia",
            oid: "1.3.6.1.2.1.1.1.0",
        };

        // endpoint, objeto
        Api.get("snmp", dados)
            .then((response) => {
                setInfo(response.data[0].split("-"));
            })
            .catch((error) => {
                console.log(error.response?.data);
        });
    };

    return (
        <SCard>
            <SCardHeader>
                <SCardTitle>Versão do Sistema</SCardTitle>
                <EditInput
                    value={ipAddressValue}
                    setValue={setIpAddressValue}
                ></EditInput>
            </SCardHeader>
            <SCardChartContainer>
                {info && info[1]}
                {info && info[0].split("Data: ")[1]}
            </SCardChartContainer>
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
