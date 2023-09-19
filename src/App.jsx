import React from 'react';
import './App.css';
import Whitening from './pages/whitening/Whitening.jsx';
import Home from './pages/home/Home.jsx';
import Appointments from './pages/appointments/Appointments.jsx';
import Cavities from './pages/cavities/Cavities.jsx';
import Navigation from './components/navigation/./Navigation.jsx';
import {Routes, Route} from 'react-router-dom'

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/tanden-bleken" element={<Whitening/>}></Route>
                <Route path="/afspraken" element={<Appointments/>}></Route>
                <Route path="/gaatjes" element={<Cavities/>}></Route>
            </Routes>
        </>
    );
}

export default App;