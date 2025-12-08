
import { Navigate, useLocation } from "react-router";
import UserAuth from "../../hooks/UserAuth";


const PrivateRoute = ({children}) => {
    const {user,loading} = UserAuth()
    const location = useLocation()
    if(loading){
        return <span className="loading loading-spinner loading-xl min-h-screen flex justify-center items-center"></span>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;