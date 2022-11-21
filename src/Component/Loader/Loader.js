import React, { Component } from "react";
import { AppBar, Grid, Toolbar, Typography, Box, Button, CardContent, Paper, Card } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner'


const Loader = () => {


    return (

        <>
            <div align="center" style={{ position: "absolute", left: "45%", top: "50%" }}>

                <ThreeDots
                    height="120"
                    width="120"
                    radius="9"
                    color="lightblue"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />

            </div>




        </>


    )

}
export default Loader;
