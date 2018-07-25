import React from "react";
import Loadable from 'react-loadable';
import * as mainRouteConstants from "./route-names";

const Loading = () => <div>Loading...</div>;

const Login = Loadable({
  loader: () => import('views/Login'),
  loading: Loading,
});

const Register = Loadable({
  loader: () => import('views/Register'),
  loading: Loading,
});

const OTP = Loadable({
  loader: () => import('views/Otp'),
  loading: Loading,
});

const Landing = Loadable({
  loader: () => import('views/Landing'),
  loading: Loading,
});

const mainRoutes = [
  {
    path: mainRouteConstants.LANDING,
    component: Landing,
    isExact:true
  },
  {
    path: mainRouteConstants.LOGIN,
    component: Login,
    // isExact:true
  },
  {
    path: mainRouteConstants.REGISTER,
    component: Register,
    // isExact:true
  },
  {
    path: mainRouteConstants.OTP,
    component: OTP,
    // isExact:true
  }
];

export default mainRoutes;
