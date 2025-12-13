
import { Navigate } from "react-router";
import UserAuth from "../../hooks/UserAuth";


const PrivateRoute = ({children}) => {
    const {user,loading} = UserAuth()
    
    if(loading){
        return <span className="loading loading-spinner loading-xl min-h-screen flex justify-center items-center"></span>
    }
    if(user){
        return children
    }
    return <Navigate to="/login"  replace></Navigate>
};

export default PrivateRoute;