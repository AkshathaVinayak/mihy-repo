import React from "react";
import { Route, Redirect } from "react-router";
// import Login from "../ui-pages/Login";
import UserHome from "../ui-pages/UserHome";
import Statistics from '../ui-pages/UserHome/components/Content/Statistics'
import AboutUs from "../ui-pages/UserHome/components/Content/about-us";
// import Landing from "../ui-pages/Landing";

const MainRoutes = () => {
  return (
    <div>
      {/*<Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />*/}
      <Route path="/user-home" component={UserHome} />
      <Route path="/user-home/about-us" component={AboutUs} />
      <Route path="/user-home/statistics" component={Statistics} />
      <Redirect to="/user-home" />
    </div>
  )
}

export default MainRoutes;
