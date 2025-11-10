import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignIn from "../pages/Signin/SignIn";
import AllJobs from "../pages/AllJobs/AllJobs";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import AddJobs from "../pages/AddJobs/AddJobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import AcceptedTask from "../pages/AcceptedTask/AcceptedTask";
import MyAddedJob from "../pages/MyAddedJob/MyAddedJob";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    errorElement:<ErrorPage></ErrorPage>,
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
      },
      {
        path:'/add-jobs',
        element:<PrivateRoutes><AddJobs></AddJobs></PrivateRoutes>
      },
      {
        path:'/all-jobs/:id',
        loader : ({params}) => fetch(`http://localhost:3030/all-jobs/${params.id}`),
        Component:JobDetails
      },
      {
        path:'/my-accepted-tasks',
        element:<PrivateRoutes><AcceptedTask></AcceptedTask></PrivateRoutes>
      },
      {
        path:'/my-added-jobs',
        element:<PrivateRoutes><MyAddedJob></MyAddedJob></PrivateRoutes>
      }
    ]
  },
]);