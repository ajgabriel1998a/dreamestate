import React, { Component } from "react";
import { AppBar, Grid, Toolbar, Typography, Box, Button } from '@mui/material';
import logo from '../../Images/logo.png'
import { Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const NavbarMobile = () => {


    return (

        <>
            <AppBar position="static" sx={{ background: "white" }} elevation={0}>
                <Toolbar>
                    <Grid container sx={{ placeItems: "center", padding: 2, color: "black", fontWeight: "bold" }}>

                    <Grid item xs={4} sx={{textAlign: "left" }}>
                            <Typography>
                                <Box>
                                    <MenuIcon />

                                </Box>
                            </Typography>
                        </Grid>

                        <Grid item xs={4} sx={{ textAlign: "center" }}>
                            <Typography>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 40,
                                    }}
                                    alt="Your logo."
                                    src={logo}
                                /><br />
                                <label className="logotitle">Dream Estate</label>
                            </Typography>
                        </Grid>
                        
                        
                    </Grid>
                </Toolbar>
            </AppBar>
        </>

    )

}
export default NavbarMobile;
