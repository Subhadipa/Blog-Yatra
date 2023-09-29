import React from 'react'
// import styles from "../../styles/about.module.css"
import Button from '@mui/material/Button';
import { Box, CardContent, Container, Grid, Typography,  } from '@mui/material';
import Image from 'next/image';
 import about from "../../../Images/about.jpg"
import about1 from "../../../Images/about1.jpeg"
import about2 from "../../../Images/about2.jpg"
import about3 from "../../../Images/about3.jpg"
import BackgroundImage from '../../../Components/BackgroundImage/BackgroundImage';
// import BackgroundImage from '../../../Components/BackgroundImage/BackgroundImage';

const About = () => {
  return (
    <>
    <BackgroundImage/>
        <Box sx={{ flexGrow: 1,marginLeft:"260px",marginTop:"160px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                   
                  <Image src={about} alt="..." style={{objectFit: "cover",height:"700px",width:"500px"}} />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box style={{marginTop:"130px"}}>
                <Typography variant="h6" gutterBottom  style={{textAlign:"left",color:"#000080",letterSpacing:"5px"}}>
                  ABOUT US
                </Typography>
                <Typography variant="h4" gutterBottom>
                Explore Affordable Adventures with BlogYatra – Your Travel Companion.
                </Typography>
                <Typography variant="p" gutterBottom style={{color:"#000080"}}>
                BlogYatra is your passport to affordable travel, providing insider knowledge 
                on cost-effective destinations, budget-friendly accommodations, and money-saving 
                tips. We're dedicated to making your travel dreams a reality while keeping your 
                wallet happy. Join us in exploring the world without the financial burden.
                </Typography>
                <br/>
                <br/>
                <Image src={about2} alt="..." style={{height:"100px",width:"100px"}}/>
                <Image src={about1} alt="..." style={{height:"100px",width:"140px"}}/>
                <Image src={about3} alt="..." style={{height:"100px",width:"130px"}}/>
                <br/>
                <br/>
                <Button type="submit"variant="contained" style={{borderRadius:"10px",backgroundColor:"#F08000"}}>Book Now</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
     
     
    </>
  )
}

export default About