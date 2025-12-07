import {
  MdBorderColor,
  MdOutlineRateReview,
  MdShoppingCart,
} from "react-icons/md";
import { FaAd, FaBook, FaClipboardList, FaHome, FaList, FaUsers, FaUtensilSpoon } from "react-icons/fa";

import { SlCalender } from "react-icons/sl";

import { NavLink, Outlet } from "react-router";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu ">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensilSpoon />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaClipboardList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
          <div className="divider"></div>
          {/*  */}
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
