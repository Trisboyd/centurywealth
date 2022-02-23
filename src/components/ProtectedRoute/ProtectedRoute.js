import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component, ...props }) => {

    return (
        props.loggedIn ? component : <Navigate to={'/home'} />
    )
}

export default ProtectedRoute;