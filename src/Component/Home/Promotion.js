import React, { Component } from "react";
import { AppBar, Grid, Toolbar, Typography, Box, Button, CardContent, Paper, Card, CardMedia, CardActions, SvgIcon} from '@mui/material';
import homebg from '../../Images/home-bg.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TableRowsIcon from '@mui/icons-material/TableRows';
import FmdGoodIcon from '@mui/icons-material/FmdGood';


const Promotion = () => {

    return (

        <>
            <div style={{ padding: "50px", backgroundColor: "white" }}>

                <Grid container>
                    <Grid xs={12} md={3} sx={{ padding: "20px" }}>

                    </Grid>
                    <Grid xs={12} md={6} sx={{ padding: "20px" }}>
                        <Grid container>
                            <Grid xs={12} md={6}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"

                                >
                                    <Card sx={{ width: "500px", height: "430px", border: "none", boxShadow: "none", borderRadius: 0, 
                                    backgroundColor: "#f3f3f3",textAlign:'left', padding:'70px' }}>
                                        <CardContent>
                                            <div style={{ fontWeight: "bold" }}>
                                                <Typography gutterBottom variant="label" component="div" style={{ fontWeight: "bold", fontFamily: 'OpenSansHebrewCondensed-Bold', fontSize:'30px' }}>
                                                <TaskAltIcon sx={{ fontSize: 40 }}></TaskAltIcon> <br/> VOTED NO 1 <br/>REALTOR IN THE BAY
                                                </Typography>                                       
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{backgroundColor:'white'}}

                                >
                                    <Card sx={{ width: "500px", height: "430px", border: "none", boxShadow: "none", borderRadius: 0, 
                                    backgroundColor: "white",textAlign:'left', padding:'70px' }}>
                                        <CardContent>
                                            <div style={{ fontWeight: "bold" }}>
                                                <Typography gutterBottom variant="label" component="div" style={{ fontWeight: "bold", fontFamily: 'OpenSansHebrewCondensed-Bold', fontSize:'30px' }}>
                                                <TextSnippetIcon sx={{ fontSize: 40 }}></TextSnippetIcon> <br/> FREE REGISTRATION <br/> NO HIDDEN FEES
                                                </Typography>                                       
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{backgroundColor:'white'}}

                                >
                                    <Card sx={{ width: "500px", height: "430px", border: "none", boxShadow: "none", borderRadius: 0, 
                                    backgroundColor: "white",textAlign:'left', padding:'70px' }}>
                                        <CardContent>
                                            <div style={{ fontWeight: "bold" }}>
                                                <Typography gutterBottom variant="label" component="div" style={{ fontWeight: "bold", fontFamily: 'OpenSansHebrewCondensed-Bold', fontSize:'30px' }}>
                                                <TableRowsIcon sx={{ fontSize: 40 }}></TableRowsIcon> <br/> FREE PROPERTY <br/> VALUATION
                                                </Typography>                                       
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"

                                >
                                    <Card sx={{ width: "500px", height: "430px", border: "none", boxShadow: "none", borderRadius: 0, 
                                    backgroundColor: "#f3f3f3",textAlign:'left', padding:'70px' }}>
                                        <CardContent>
                                            <div style={{ fontWeight: "bold" }}>
                                                <Typography gutterBottom variant="label" component="div" style={{ fontWeight: "bold", fontFamily: 'OpenSansHebrewCondensed-Bold', fontSize:'30px' }}>
                                                <FmdGoodIcon sx={{ fontSize: 40 }}></FmdGoodIcon> <br/> OFFICES IN 4 <br/>LOCATIONS
                                                </Typography>                                       
                                            </div>
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
export default Promotion;
