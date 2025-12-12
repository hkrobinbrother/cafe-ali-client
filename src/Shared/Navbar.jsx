import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import "sweetalert2/src/sweetalert2.scss";
import { MdShoppingCart } from "react-icons/md";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin()
  const [cart] = useCart()
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Log Out success",
          icon: "error",
          confirmButtonText: "Cancel",
        });
      })
      .catch((error) => console.log(error));
  };
  const nav = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      {
        user && isAdmin && <Link to="/dashboard/adminHome">Contact Us</Link>
      }
      {
        user && !isAdmin && <Link to="/dashboard/userHome">Contact Us</Link>
      }
      <li>
        <Link to="/dashboard/cart">
          <button className="btn bg-black/30 border-none ">
            <MdShoppingCart className="mr-2 text-white" />
           <div className="badge  badge-secondary">+{cart.length}</div>
          </button>
          
        </Link>
      </li>
      {user ? (
        <>
          <div className="flex items-center gap-4 ml-8">
            <span className="flex items-center uppercase text-green-500 font-bold">
              {user?.displayName}
            </span>
            <button onClick={handleLogOut} className="btn ">
              LogOut
            </button>
            <img
              className="w-12 h-12 rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </div>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 top-0 opacity-80    bg-black text-white max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm text-white font-bold dropdown-content bg-black/30 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {nav}
          </ul>
        </div>
        <a className=" flex flex-col items-center font-bold text-xl text-amber-300">
          
          CAFE-ALI
          <span className="italic">RESTAURANT</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 flex items-center text-amber-300 font-bold">{nav}</ul>
      </div>
    </div>
  );
};

export default Navbar;
