import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';


const Properties = () => {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const jsx = `
    <Grid container spacing={${spacing}}>
    `;

    return (
        <>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
        {[0, 1, 2].map((value) => (
            <Grid key={value} item>
            <Paper
            sx={{
              height: 140,
              width: 100,
              backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
          />
          </Grid>
          ))}
          </Grid>
          </Grid>
          
          </Grid>
          </>
          )


      }

      export default Properties;
