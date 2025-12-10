import React from 'react';
import useAdmin from '../../hooks/useAdmin';
import UserAuth from '../../hooks/UserAuth';
import { Navigate, useLocation } from 'react-router';

const AdminRoutes = ({children}) => {
    const {user,loading} = UserAuth() 
    const [isAdmin,isAdminLoading] = useAdmin()
     const location = useLocation()
    if(loading || isAdminLoading){
        return <span className="loading loading-spinner loading-xl min-h-screen flex justify-center items-center"></span>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to="/" state={{from:location}} replace></Navigate>

};

export default AdminRoutes;