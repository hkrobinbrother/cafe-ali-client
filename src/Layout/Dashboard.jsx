import { MdBorderColor, MdOutlineRateReview, MdShoppingCart } from "react-icons/md";
import { FaClipboardList, FaHome, FaList } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

import { NavLink, Outlet } from "react-router";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu ">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <SlCalender />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <MdShoppingCart /> My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <MdOutlineRateReview />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaClipboardList />
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
           <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
           <li>
            <NavLink to="/menu">
              <FaList />
              Menu
            </NavLink>
          </li>
           <li>
            <NavLink to="/contact">
              <MdBorderColor />
              contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
