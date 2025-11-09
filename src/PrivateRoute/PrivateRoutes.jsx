import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

function PrivateRoutes({ children }) {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <p>loading...</p>;
  }
  if (user && user?.email) {
    return children;
  }
 return <Navigate state={location.pathname} to="/auth"></Navigate>;
}

export default PrivateRoutes;
