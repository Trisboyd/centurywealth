import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component, ...props }) => {

    return (
        <Route>
            {props.loggedIn ? component : <Navigate to={'/home'} />}
        </Route>
    )
}

export default ProtectedRoute;