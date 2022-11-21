import React, { Component } from "react";
import { AppBar, Grid, Toolbar, Typography, Box, Button, CardContent, Paper, Card, CardMedia } from '@mui/material';
import homebg from '../../Images/home-bg.jpg';
import { Parallax } from 'react-parallax';
import labelBanner from '../../Styles/Home/Home'
import aboutusbg from '../../Images/aboutus-bg.jpg';


const AboutUs = () => {

    const insideStyles = {
        background: "transparent",
        padding: 20,
        position: "absolute",
        top: "70%",
        left: "40%",
        textAlign: "left",
        transform: "translate(-50%,-50%)",
        letterSpacing: '0.05em'
    };


    return (

        <>

            <Parallax bgImage={aboutusbg} blur={1} bgImageAlt="the cat" strength={500}>
                <div style={{ height: 200 }}>
                    <div style={{ textAlign: "center", padding: "20px" }}>
                        <br /><br />
                        <h1 style={{ marginBottom: '50px', color: 'white' }}>ABOUT US</h1>

                    </div>


                </div>
            </Parallax>
            <div style={{ textAlign: "center", padding: "50px" }}>
                <center>
                    <Grid container spacing={{
                        xs: 0,
                        sm: 0,
                        md: 0
                    }} >
                        <Grid xs={12} md={2}>



                        </Grid>
                        <Grid xs={12} md={8} >

                            <div style={{ textAlign: "left", margin: '10px' }}>
                                <label style={{ color: "black", fontSize: "20px", fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                    Presello is one of the most highly ambitious and performance driven Real estate broker group in the Philippine market.
                                    Presello’s story is one that aims to bring growth to our clients, we believe with our combined work ethic we can help
                                    empower home owners by giving them the best service when it comes to real estate.
                                </label><br /><br />
                                <label style={{
                                    color: "black", fontSize: "25px", fontFamily: 'OpenSansHebrewCondensed-Regular', borderLeft: '5px solid green',
                                    paddingLeft: '20px'
                                }}>
                                    “With our combined work ethic, we can help empower home owners by giving them the best service when it comes to real estate.”
                                </label><br /><br />
                                <label style={{ color: "black", fontSize: "20px", fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                    Our goal is one of growth, we aim to bring a positive difference in the lives of homeowners whether it be by
                                    getting them the best offer for their home or looking for the best deal in the market. To bring professional and
                                    honest service to you and your family, we hope to give you a positive experience that would in some small way help us
                                    make our world a better place.
                                </label><br /><br />
                                <label style={{ color: "black", fontSize: "20px", fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                    A success oriented sales group with over 15 years of selling experience spanning over, corporate management, marketing, training, consultation,
                                    sales strategy and marketing of real estate products. We are here to help. We are the real estate brokers you can trust.
                                </label><br />
                            </div>

                        </Grid>
                        <Grid xs={12} md={2} >



                        </Grid>
                    </Grid>
                </center>
            </div>

           


        </>


    )

}
export default AboutUs;
