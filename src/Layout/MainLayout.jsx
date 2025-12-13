import { Outlet, useLocation } from "react-router";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


const MainLayout = () => {
    const location = useLocation()
    // console.log(location)
    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup")
    return (
        <div>
            { noHeaderFooter||<Navbar/>}
            <div className="pt-21">

            <Outlet/>
            </div>
            {noHeaderFooter||<Footer/>}
        </div>
    );
};

export default MainLayout;