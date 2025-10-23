import React, { use } from 'react';
import { AuthContext } from '../../main';
import { Navigate, useLocation, } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user} = use(AuthContext);
    const location = useLocation();

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
    // return <Navigate state={location?.pathname} to="/login"  />;
};

export default PrivateRoute;