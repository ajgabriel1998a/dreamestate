import React, { Component, useState, useEffect } from "react";
import { AppBar, Grid, Toolbar, Typography, Box, Button, CardContent, Paper, Card } from '@mui/material';
import homebg from '../../Images/home-bg.jpg';
import { Parallax } from 'react-parallax';
import labelBanner from '../../Styles/Home/Home'
import Properties from "./Properties";
import Banner from "./Banner";
import Promotion from "./Promotion";
import Clients from "./Clients";
import Loader from "../Loader/Loader";


const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    })

    return (

        <>

            <Banner/>
            
            <Properties/>

            <Promotion/>

            <Clients/>


            
            
        </>


    )

}
export default Home;
