import React from "react";
import {
    SCardLabel,
    SCard,
    SCardTitle,
    SSmallCardTitle,
    SSmallCard,
    SFeatures,
    SIconBackground,
    SCardImage
} from "../components/Card/styles";
import {
    SLink,
    SLinkContainer,
    SLinkIcon,
} from "../components/Sidebar/styles";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { AiOutlineApartment } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { logoSVG } from "../assets";

const HomePage = () => {
    return (
        <>
            <SCard>
                <SCardTitle>
                    <SCardImage align="start">
                        <SIconBackground>
                        <img src={logoSVG} alt="logo" />
                        </SIconBackground>
                    </SCardImage>
                    Ferramenta SNMP
                </SCardTitle>
                <SCardLabel>Função Monitorar SNMP</SCardLabel>
            </SCard>
            <h1>Funcionalidades</h1>
            <SFeatures>
                {linksArray.map(({ icon, label, to, description }) => (
                    <SSmallCard key={label}>
                        <SIconBackground>
                            <SLinkIcon>{icon}</SLinkIcon>
                        </SIconBackground>
                        <SSmallCardTitle>{label}</SSmallCardTitle>
                        <SCardLabel>{description}</SCardLabel>
                        <SLink to={to}>
                            <FiExternalLink />
                        </SLink>
                    </SSmallCard>
                ))}
            </SFeatures>
        </>
    );
};

const linksArray = [
    {
        label: "Monitor de TCP",
        icon: <BsPeople />,
        to: "/tcp",
        description: "Monitor de TCP",
    },
    {
        label: "Uso da Memória",
        icon: <MdOutlineAnalytics />,
        to: "/memory",
        description: "Monitor de TCP",
    },
    {
        label: "Monitor de Processos",
        icon: <BsPeople />,
        to: "/process",
        description: "Monitor de TCP",
    },
    {
        label: "Versão do Sistema",
        icon: <AiOutlineApartment />,
        to: "/version",
        description: "Monitor de TCP",
    },
];

export default HomePage;
