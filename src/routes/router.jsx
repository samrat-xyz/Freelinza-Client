import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignIn from "../pages/Signin/SignIn";
import AllJobs from "../pages/AllJobs/AllJobs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/login',
        Component:Login
      },
      {
        path:'/signin',
        Component:SignIn
      },
      {
        path:'/all-jobs',
        Component:AllJobs
      }
    ]
  },
]);