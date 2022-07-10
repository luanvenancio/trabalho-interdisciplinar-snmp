import React from "react";
import { SCardHeader, SCardTitle, SSmallCard } from "../components/Card/styles";
import { SLink, SLinkContainer, SLinkIcon } from "../components/Sidebar/styles";
import { AiOutlineApartment } from "react-icons/ai";

const HomePage = () => {
    return (
        <>
            <h1>HomePage</h1>
            <SSmallCard>
                <SCardTitle>Monitor de Processo</SCardTitle>
                <SCardHeader>Monitora processos</SCardHeader>
            </SSmallCard>
            <SSmallCard>
                <SCardTitle>Versão do Sistema</SCardTitle>
                <SCardHeader>Verifica Versão do Sistema</SCardHeader>
                <SLinkContainer>
                    <SLink to={"/version"}>
                        <SLinkIcon>{<AiOutlineApartment />}</SLinkIcon>
                    </SLink>
                </SLinkContainer>
            </SSmallCard>
        </>
    );
};

export default HomePage;
