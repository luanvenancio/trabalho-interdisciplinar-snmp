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
    SLinkIcon,
} from "../components/Sidebar/styles";
import { linksArray } from "../config/data";
import { logoSVG } from "../assets";
import { FiExternalLink } from "react-icons/fi";

const HomePage = () => {
    return (
        <>
            <SCard>
                <SCardTitle>
                    <SCardImage align="start" width="2rem">
                        <SIconBackground>
                        <img src={logoSVG} alt="logo" />
                        </SIconBackground>
                    </SCardImage>
                    Ferramenta SNMP
                </SCardTitle>
                <SCardLabel>Aplicação Web para o gerenciamento de redes de computadores usando o protocolo SNMP</SCardLabel>
            </SCard>
            <h1>Funcionalidades</h1>
            <SFeatures>
                {linksArray.slice(1).map(({ icon, label, to, description }) => (
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

export default HomePage;
