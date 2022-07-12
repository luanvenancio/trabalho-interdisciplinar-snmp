import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TCPPage from "./pages/TCPPage";
import VersionPage from "./pages/VersionPage";
import UDPPage from "./pages/UDPPage";
import ProcessPage from "./pages/ProcessPage";

const Routesx = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tcp" element={<TCPPage />} />
            <Route path="/udp" element={<UDPPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/version" element={<VersionPage />} />
        </Routes>
    );
};

export default Routesx;