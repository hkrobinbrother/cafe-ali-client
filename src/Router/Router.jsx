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
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoutes from "../Pages/PrivateRoute/AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem";
import Payment from "../Pages/Dashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome";

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
    children: [
      {
        path: "userHome",
        element:<UserHome></UserHome>
      }
      ,{
      path:'cart',
      element:<Cart></Cart>
    },
    {
      path: 'payment',
      element:<Payment></Payment>
    },
    {
      path:"paymentHistory",
      element:<PaymentHistory></PaymentHistory>
    },
    // admin routes
    {
      path:"users",
      element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>

    },
    {
      path:"adminHome",
      element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
    },
    {
      path: "manageItems",
      element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>
    },
    {
      path:"updateItem/:id",
      element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
      loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
      
    },
    {
      path:"addItems",
      element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
    }
  
  ],
  },
]);
