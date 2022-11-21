import React, { Component } from "react";
import { AppBar, Grid, Toolbar, Typography, Box, Button, CardContent, Paper, Card, CardMedia, CardActions, TextField } from '@mui/material';
import homebg from '../../Images/home-bg.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {

    return (

        <>
            <div style={{ padding: "50px", backgroundColor: "#f3f3f3" }}>

                <div style={{ textAlign: "center", padding: "20px" }}>
                    <h1>CONTACT US</h1>
                </div>
                <Grid container>
                    <Grid xs={12} md={3} sx={{ padding: "20px" }}>

                    </Grid>
                    <Grid xs={12} md={6} sx={{ padding: "20px", backgroundColor: 'white', padding: '20px', height: '500px' }}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ borderRadius: '0', width: '98%', margin: '10px' }} /><br />
                        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ borderRadius: '0', width: '98%', margin: '10px' }} /><br />
                        <TextField id="outlined-basic" label="Subject" variant="outlined" sx={{ borderRadius: '0', width: '98%', margin: '10px' }} /><br />
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            sx={{ borderRadius: '0', width: '98%', margin: '10px' }}
                            multiline
                            rows={4}
                        /><br/>
                        <Button sx={{  fontSize:13,margin: '10px', borderRadius:0, backgroundColor:"grey" }}  variant="contained" size="large">Submit</Button>
                    </Grid>
                </Grid>


            </div>

        </>


    )

}
export default ContactUs;
