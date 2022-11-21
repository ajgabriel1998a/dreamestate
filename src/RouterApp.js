import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";

import ContactUs from "./Component/ContactUs/ContactUs";
import Dashboard from "./Component/Dashboard";
import Signup from "./Component/Signup";
import Properties from "./Component/Properties/Properties";
import Home from "./Component/Home/Home";
import Browse from "./Component/Browse/Browse";
import AboutUs from "./Component/AboutUs/AboutUs";
import JoinOurTeam from "./Component/JoinOurTeam/JoinOurTeam";

const RouterApp = () =>{
 return(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/browse" element={<Browse/>}/>
            <Route path="/properties" element={<Properties/>}/>
            <Route path="/joinourteam" element={<JoinOurTeam/>}/>
        </Routes>
    </BrowserRouter>
 )
}

export default RouterApp;