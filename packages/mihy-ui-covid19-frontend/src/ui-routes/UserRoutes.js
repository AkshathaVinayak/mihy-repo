import React from "react";
import { Route } from "react-router";
// import FirstTimeUser from "../ui-pages/UserHome/components/Content/FirstTimeUser";
import Dashboard from "../ui-pages/UserHome/components/Content/Dashboard";
// import AboutUs from "../ui-pages/UserHome/components/Content/AboutUs";
import Statistics from '../ui-pages/UserHome/components/Content/Statistics'
import DistrictList from '../ui-pages/UserHome/components/Content/DistrictList';
import FAQ from "../ui-pages/UserHome/components/Content/FAQ";


const UserRoutes=()=>{
  return(
    <div>
      <Route exact path="/user-home" component={Dashboard} />
      <Route path="/user-home/statistics" component={Statistics} />
      <Route path="/user-home/districts-list" component={DistrictList} />
      <Route path="/user-home/about-faq" component={FAQ} />

    {/*  <Route path="/user-home/first-time" component={FirstTimeUser} />*/}
    {/*<Route path = "/user-home/about" component = {AboutUs} />*/}
    </div>
  )
}

export default UserRoutes;
