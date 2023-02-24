import React from "react";
import { Navigate } from "react-router";

const PrivateRouteUser = ({ children }) => {
  let isAuth = true;
  if (!isAuth) {
    <Navigate to="/login" />;
    return;
  }
  return children;
};

export default PrivateRouteUser;
