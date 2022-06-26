
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MonitorPage from './pages/MonitorPage';

const Routesx = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/statistics" element={<MonitorPage />}/>
            <Route path="/customers" element={
                <h1>Customers Page</h1>} />
            <Route path="/diagrams" element={
                <h1>Diagrams Page</h1>} />
        </Routes>
    );
};

export default Routesx;