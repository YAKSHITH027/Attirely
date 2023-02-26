import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRouteUser = ({ children }) => {
  const userData = useSelector((store) => {
    return store.userAuthReducer.user;
  });

  const isAuth = userData?.uid;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRouteUser;
