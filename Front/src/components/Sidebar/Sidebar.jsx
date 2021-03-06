import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";
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

import { SIconBackground } from "../Card/styles";
import { AiOutlineLeft } from "react-icons/ai";

import { logoSVG } from "../../assets";
import { linksArray } from "../../config/data";

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
                <SIconBackground>
                    <img src={logoSVG} alt="logo" />
                </SIconBackground>
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
                        setTheme((p) => (p === "light" ? "dark" : "light"))
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

export default Sidebar;
