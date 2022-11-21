import React, { Component } from "react";
import { AppBar, Grid, Toolbar, Typography, Box, Button, CardContent, Paper, Card, CardMedia, CardActions } from '@mui/material';
import homebg from '../../Images/home-bg.jpg';
import clientsbg from '../../Images/clients-bg4.jpg';
import { Parallax } from 'react-parallax';

const Clients = () => {

    const insideStyles = {
        background: "transparent",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        textAlign: "center",
        transform: "translate(-50%,-50%)"
    };
    return (

        <>
            <Parallax bgImage={clientsbg} blur={1} bgImageAlt="the cat" strength={200}>
                <div style={{ height: 630 }}>
                    <div style={{ textAlign: "center", padding: "20px" }}>
                        <br/><br/>
                        <h1 style={{ marginBottom: '50px', color:'white' }}>WHAT OUR CLIENTS THINK</h1>
                        <center>
                            <Grid container spacing={{
                                xs: 0,
                                sm: 0,
                                md: 0
                            }} >
                                <Grid xs={12} md={4}>

                                    <div style={{ textAlign: "center", margin: '10px' }}>
                                        <label style={{ color: "white", fontSize: "20px",fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                            "This is how real estate agents should sell properties"
                                        </label><br /><br />
                                        <label style={{ color: "white", fontSize: "25px", fontWeight: "bold", color:"lightblue" }}>
                                            MIGS AMPER
                                        </label>
                                    </div>

                                </Grid>
                                <Grid xs={12} md={4} >

                                    <div style={{ textAlign: "center", margin: '10px' }}>
                                        <label style={{ color: "white", fontSize: "20px" ,fontFamily: 'OpenSansHebrewCondensed-Regular'}}>
                                            "One of the best real estate service group in the Philippines, they have so many houses for sale.
                                            I didn't even know there were that many. Good work"
                                        </label><br /><br />
                                        <label style={{ color: "white", fontSize: "25px", fontWeight: "bold", color:"lightblue" }}>
                                            ESSENCE BERONDO
                                        </label>
                                    </div>

                                </Grid>
                                <Grid xs={12} md={4} >

                                    <div style={{ textAlign: "center", margin: '10px' }}>
                                        <label style={{ color: "white", fontSize: "20px",fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                            "Superb service from accomodating and friendly staff"
                                        </label><br /><br />
                                        <label style={{ color: "white", fontSize: "25px", fontWeight: "bold", color:"lightblue" }}>
                                            JENNYLYN
                                        </label>
                                    </div>

                                </Grid>
                            </Grid>
                        </center>
                    </div>


                </div>
            </Parallax>

        </>


    )

}
export default Clients;
