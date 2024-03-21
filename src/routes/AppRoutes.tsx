import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import TestingPage from "../pages/TestingPage";

import TestResultPage from "../pages/TestResultPage";
import ProtectedRoute from "./ProtectedRoute";
import ToBeContinuedPage from "../pages/ToBeContinuedPage";

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<ProtectedRoute><MainPage/></ProtectedRoute>}/>
                <Route path={'/test/:id'} element={<ProtectedRoute><TestingPage/></ProtectedRoute>}/>
                <Route path={'/results/:id'} element={<ProtectedRoute><TestResultPage/></ProtectedRoute>}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/exam" element={<ToBeContinuedPage />}/>
            </Routes>
        </div>

    );
}

export default AppRoutes;