import React from 'react';
import useAuth from '../hook/useAuth';
import Loading from '../Loading/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    const location =useLocation()
   
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state={location.pathname} ></Navigate>
    }
    return children;
};

export default PrivateRoute;