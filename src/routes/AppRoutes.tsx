import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import TestingPage from "../pages/TestingPage";

import TestResultPage from "../pages/TestResultPage";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<ProtectedRoute><MainPage/></ProtectedRoute>}/>
                <Route path={'/test/:id'} element={<ProtectedRoute><TestingPage/></ProtectedRoute>}/>
                <Route path={'/results'} element={<ProtectedRoute><TestResultPage></TestResultPage></ProtectedRoute>}/>
                <Route path="/login" element={<LoginPage />}/>
            </Routes>
        </div>

    );
}

export default AppRoutes;