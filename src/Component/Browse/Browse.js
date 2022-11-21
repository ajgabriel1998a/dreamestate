import React, { Component } from "react";
import { AppBar, Grid, Toolbar, Typography, Box, Button, CardContent, Paper, Card, CardMedia, CardActions, TextField } from '@mui/material';
import homebg from '../../Images/home-bg.jpg';
import Carousel from 'react-bootstrap/Carousel';
import property1_1 from '../../Images/property1-1.jpg';
import property1_2 from '../../Images/property1-2.jpg';
import property1_3 from '../../Images/property1-3.jpg';
import property2_1 from '../../Images/property2-1.jpg';
import property2_2 from '../../Images/property2-2.jpg';
import property3_1 from '../../Images/property3-1.jpg';
import property3_2 from '../../Images/property3-2.jpg';
import property3_3 from '../../Images/property3-3.jpg';
import property4_1 from '../../Images/property4-1.jpg';
import property4_2 from '../../Images/property4-2.jpg';
import property4_3 from '../../Images/property4-3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Browse = () => {

    return (

        <>
            <div style={{ padding: "50px", backgroundColor: "#f3f3f3" }}>

                <div style={{ textAlign: "center", padding: "20px" }}>
                    <h1>BROWSE PROPERTIES</h1>
                </div>
                <div style={{ textAlign: "center", padding: "10px" }}>
                    <TextField id="outlined-basic" label="Search" variant="outlined" sx={{borderRadius:0,width:'400px'}}/>
                </div>
                <Grid container>
                    <Grid xs={12} md={3} sx={{ padding: "20px" }}>

                    </Grid>
                    <Grid xs={12} md={6} sx={{ padding: "20px" }}>
                        <Grid container>
                            <Grid xs={12} md={6} sx={{ padding: "20px" }}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"

                                >
                                    <Card sx={{ width: "500px", height: "430px", border: "none", boxShadow: "none", borderRadius: 0, backgroundColor: "#f3f3f3" }}>

                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={property2_1}
                                                    alt="First slide"
                                                    style={{ width: "500px", height: "200px" }}
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={property2_2}
                                                    alt="Second slide"
                                                    style={{ width: "500px", height: "200px" }}
                                                />


                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={property2_1}
                                                    alt="Third slide"
                                                    style={{ width: "500px", height: "200px" }}
                                                />


                                            </Carousel.Item>
                                        </Carousel>
                                        <CardContent>
                                            <div style={{ fontWeight: "bold" }}>
                                                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold", fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                                    5 Bedrooms
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold", fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                                    Inside Of A Sensational Modern House and Lot For Sale In Valle Verde
                                                </Typography>
                                            </div>
                                            <Typography variant="body2" color="text.secondary">
                                                ₱195,000,000
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6} sx={{ padding: "20px" }}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"

                                >
                                    <Card sx={{ width: "500px", height: "430px", border: "none", boxShadow: "none", borderRadius: 0, backgroundColor: "#f3f3f3" }}>

                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={property1_1}
                                                    alt="First slide"
                                                    style={{ width: "500px", height: "200px" }}
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={property1_2}
                                                    alt="Second slide"
                                                    style={{ width: "500px", height: "200px" }}
                                                />


                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={property1_3}
                                                    alt="Third slide"
                                                    style={{ width: "500px", height: "200px" }}
                                                />


                                            </Carousel.Item>
                                        </Carousel>
                                        <CardContent>
                                            <div style={{ fontWeight: "bold" }}>
                                                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold", fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                                    7 Bedrooms
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold", fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                                    Freshly Built Modern Home in Hillsborough Alabang
                                                </Typography>
                                            </div>
                                            <Typography variant="body2" color="text.secondary">
                                                ₱85,000,000
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6} sx={{ padding: "20px" }}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"

                                >
                                    <Card sx={{ width: "500px", height: "430px", border: "none", boxShadow: "none", borderRadius: 0, backgroundColor: "#f3f3f3" }}>

                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={property3_1}
                                                    alt="First slide"
                                                    style={{ width: "500px", height: "200px" }}
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={property3_2}
                                                    alt="Second slide"
                                                    style={{ width: "500px", height: "200px" }}
                                                />


                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={property3_3}
                                                    alt="Third slide"
                                                    style={{ width: "500px", height: "200px" }}
                                                />


                                            </Carousel.Item>
                                        </Carousel>
                                        <CardContent>
                                            <div style={{ fontWeight: "bold" }}>
                                                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold", fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                                    5 Bedrooms
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold", fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                                    Inside of a Lovely Splendid House and Lot for Sale In Ayala Alabang
                                                </Typography>
                                            </div>
                                            <Typography variant="body2" color="text.secondary">
                                                ₱250,000,000
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6} sx={{ padding: "20px" }}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"

                                >
                                    <Card sx={{ width: "500px", height: "430px", border: "none", boxShadow: "none", borderRadius: 0, backgroundColor: "#f3f3f3" }}>

                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={property4_1}
                                                    alt="First slide"
                                                    style={{ width: "500px", height: "200px" }}
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={property4_2}
                                                    alt="Second slide"
                                                    style={{ width: "500px", height: "200px" }}
                                                />


                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={property4_3}
                                                    alt="Third slide"
                                                    style={{ width: "500px", height: "200px" }}
                                                />


                                            </Carousel.Item>
                                        </Carousel>
                                        <CardContent>
                                            <div style={{ fontWeight: "bold" }}>
                                                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold", fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                                    5 Bedrooms
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold", fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                                    Astounding Cozy House and Lot For Sale In Loyola Grand Villas
                                                </Typography>
                                            </div>
                                            <Typography variant="body2" color="text.secondary">
                                                ₱112,000,000
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Box>
                            </Grid>


                        </Grid>

                    </Grid>
                </Grid>



            </div>

        </>


    )

}
export default Browse;
