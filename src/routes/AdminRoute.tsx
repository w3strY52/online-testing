import {Navigate} from "react-router-dom";
import React from "react";

function AdminRoute(props: { children: any }) {
    if (!(localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth')!).access)) {
        return <Navigate to="/login" replace/>;
    }

    return props.children;
}

export default AdminRoute;