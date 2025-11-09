import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading/Loading";
import { useLocation } from "react-router";
function PrivateRoutes({ children }) {
  const { user, loading } = use(AuthContext);
  const location = useLocation()
  if (loading) {
    return <Loading></Loading>
  }
  if (user && user?.email) {
    return children;
  }
 return <Navigate state={location.pathname} to="/auth"></Navigate>;
}

export default PrivateRoutes;
