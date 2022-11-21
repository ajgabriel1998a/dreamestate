import React, { Component } from "react";
import { AppBar, Grid, Toolbar, Typography, Box, Button } from '@mui/material';
import logo from '../../Images/logo.png'
import { Link, NavLink } from "react-router-dom";

const NavbarDesktop = () => {


    return (

        <AppBar position="static" sx={{ background: "white" }} elevation={0}>
            <Toolbar>
                <Grid container sx={{ placeItems: "center", padding: 3, color: "black", fontWeight: "bold" }}>

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
                    <Grid item xs={5} sx={{ display: 'block' }}>
                        <Typography>
                            <Box>
                                <Button sx={{ fontWeight: 'bold', fontSize: 18, marginRight: 3, color: "black",fontFamily: 'OpenSansHebrewCondensed-Regular' }} to='/home' component={Link}>Home</Button>
                                <Button sx={{ fontWeight: 'bold', fontSize: 18, marginRight: 3, color: "black",fontFamily: 'OpenSansHebrewCondensed-Regular' }} to='/browse' component={Link}>Browse</Button>
                                <Button sx={{ fontWeight: 'bold', fontSize: 18, marginRight: 3, color: "black",fontFamily: 'OpenSansHebrewCondensed-Regular' }} to='/contactus' component={Link}>Contact Us</Button>
                                <Button sx={{ fontWeight: 'bold', fontSize: 18, marginRight: 3, color: "black",fontFamily: 'OpenSansHebrewCondensed-Regular' }} to='/aboutus' component={Link}>About Us</Button>
                                <Button sx={{ fontWeight: 'bold', fontSize: 18, marginRight: 3, color: "black",fontFamily: 'OpenSansHebrewCondensed-Regular' }} to='/joinourteam' component={Link}>Join Our Team</Button>
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'block' }}>
                        
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

    )

}
export default NavbarDesktop;
