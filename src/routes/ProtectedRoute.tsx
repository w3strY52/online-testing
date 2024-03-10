import React from 'react';
import {Navigate} from "react-router-dom";

function ProtectedRoute(props: { children: any }) {
    if (!localStorage.getItem('auth')) {
        return <Navigate to="/login" replace/>;
    }

    return props.children;
}

export default ProtectedRoute;