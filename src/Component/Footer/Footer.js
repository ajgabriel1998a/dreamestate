import React, { Component } from "react";
import { AppBar, Grid, Toolbar, Typography, Box, Button, CardContent, Paper, Card, CardMedia, CardActions } from '@mui/material';
import logo from '../../Images/logo.png'
const Footer = () => {

    return (

        <>
            <div style={{ backgroundColor: "#323644", padding: "30px", color: "lightgrey", width:'100%'}}>
                <Grid container spacing={{
                    xs: 0,
                    sm: 0,
                    md: 0
                }} >
                    <Grid xs={12} md={12} >

                        <Grid container spacing={{
                            xs: 0,
                            sm: 0,
                            md: 0
                        }} >
                            
                            <Grid xs={12} md={6}>
                                <div style={{padding:"10px",marginTop:'auto'}}>
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 40,
                                        
                                        }}
                                        alt="Your logo."
                                        src={logo}
                                    />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <label className="logotitle">Dream Estate</label>
                                </div>

                            </Grid>
                            <Grid xs={12} md={6}>
                                <div style={{padding:"10px", textAlign:'right'}}>
                                
                                    <label>All rights reserved © 2022 by Dream Estate </label>
                                </div>

                            </Grid>



                        </Grid>

                    </Grid>



                </Grid>
            </div>

        </>


    )

}
export default Footer;
