import React, { Component } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AppBar, Grid, Toolbar, Typography, Box, Button } from '@mui/material';
import logo from '../../Images/logo.png';
import { Link, NavLink } from "react-router-dom";
import styles from '../../Styles/appbar/Appbar.module.css'
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
    const custom = {
        fontFamily: ['MyFont'],
        urls: ['/fonts/MyFont.woff']
    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (

        <>
        {matches ? <NavbarMobile matches={matches}/> : <NavbarDesktop matches={matches}/>}
        </>


    )

}
export default Navbar;
