import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Contact from "../Pages/ContactUS/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [{
      path:'cart',
      element:<Cart></Cart>
    },
    // admin routes
    {
      path:"users",
      element:<AllUsers></AllUsers>

    }
  
  ],
  },
]);
