import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLogo,
    SSidebar,
    SSidebarButton,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
} from "./styles";
import {
    AiOutlineApartment,
    AiOutlineHome,
    AiOutlineLeft,
    AiOutlineSetting,
} from "react-icons/ai";

import { logoSVG } from "../../assets";

const Sidebar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { pathname } = useLocation();

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton
                    isOpen={sidebarOpen}
                    onClick={() => setSidebarOpen((p) => !p)}
                >
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img src={logoSVG} alt="logo" />
            </SLogo>
            {linksArray.map(({ icon, label, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink
                        to={to}
                        style={!sidebarOpen ? { width: `fit-content` } : {}}
                    >
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
    
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            <STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() =>
                        setTheme((p) => (p === 'light' ? 'dark' : 'light'))
                    }
                >
                    <SToggleThumb
                        style={theme === "dark" ? { right: "1px" } : {}}
                    />
                </SThemeToggler>
            </STheme>
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Home",
        icon: <AiOutlineHome />,
        to: "/",
    },
    {
        label: "Uso da Memória",
        icon: <MdOutlineAnalytics />,
        to: "/memory",
    },
    {
        label: "Monitor de Processos",
        icon: <BsPeople />,
        to: "/process",
    },
    {
        label: "Versão do Sistema",
        icon: <AiOutlineApartment />,
        to: "/version",
    },
];


export default Sidebar;
