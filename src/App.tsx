import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import NavbarLegacy from "./components/Navbar/NavbarLegacy";
import AppRoutes from "./routes/AppRoutes";

function App() {

    return (
        <BrowserRouter>
            <div className={'layer'}>
                {localStorage.getItem('auth') ?
                    <NavbarLegacy/> : <></>}
                <AppRoutes/>
            </div>
        </BrowserRouter>
    );
}

export default App;
