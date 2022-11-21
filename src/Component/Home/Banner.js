import React, { Component } from "react";
import { AppBar, Grid, Toolbar, Typography, Box, Button, CardContent, Paper, Card } from '@mui/material';
import homebg from '../../Images/home-bg.jpg';
import  {Parallax}  from 'react-parallax';
import labelBanner from '../../Styles/Home/Home'


const Banner = () => {

    const insideStyles = {
        background: "transparent",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "40%",
        textAlign: "left",
        transform: "translate(-50%,-50%)",
        letterSpacing: '0.05em'
    };


    return (

        <>

            <Parallax bgImage={homebg} blur={1} bgImageAlt="the cat" strength={300}>
                <div style={{ height: 820 }}>
                    <div style={insideStyles}>
                        <label style={{ color: "white", fontSize: "40px", textShadow: "2px 2px black", marginBottom: "20px" }}>
                            LUXURY VILLA<br />
                            MINUTES<br />
                            FROM THE BAY<br />
                        </label><br />
                        <label style={{ color: "#59C1BD", fontSize: "20px", fontWeight: "bold", textShadow: "2px 2px black",fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                            ₱35,500,000
                        </label><br />
                        <p style={{ color: "#ffff", fontSize: "20px" ,fontFamily: 'OpenSansHebrewCondensed-Regular'}}>
                            Welcome to 8549 Norwich Ave, this is an absolutely STUNNING home in exclusive North Hills West. 
                            Highly UPGRADED home, the Double doors greet you as you walk in, Lots of natural light, the ELEGANT interior features 3,357
                        </p><br />
                        <Button sx={{  fontSize:13,margin: '1px', borderRadius:0, backgroundColor:"grey" }}  variant="contained" size="large">READ MORE</Button>
                    </div>
                </div>
            </Parallax>

        
            
        </>


    )

}
export default Banner;
