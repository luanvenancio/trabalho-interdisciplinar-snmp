
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VersionPage from './pages/VersionPage';
import MonitorPage from './pages/MonitorPage';
import ProcessPage from './pages/ProcessPage';

const Routesx = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/memory" element={<MonitorPage />}/>
            <Route path="/process" element={ <ProcessPage />} />
            <Route path="/version" element={<VersionPage />} />
        </Routes>
    );
};

export default Routesx;