import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styles from "../styles/Header.module.css"
const ImageCaraouselForHome = () => {
    const images = ["/banner1.jpg","/banner2.jpg","/banner3.jpg"];

    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
 
    useEffect(() => {
      const interval = setInterval(goToNextSlide, 3000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <Box   style={{zIndex:"2",marginTop:"-10px"}}>
      {/* <Paper elevation={3}> */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          style={{ width: '105%', height: '750px',marginLeft:"-10px"}}
        />
        <Box style={{ position: 'absolute', top: '50%'  }}>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <KeyboardArrowLeft fontSize="large" onClick={goToPrevSlide} style={{ cursor: 'pointer', marginRight: '760px',color:"gray",marginTop:"10px" }} />
            <KeyboardArrowRight fontSize="large" onClick={goToNextSlide} style={{ cursor: 'pointer', marginLeft: '680px',color:"gray" }} />
          </Box>
        </Box>
      {/* </Paper> */}
    </Box>
    )
  
}

export default ImageCaraouselForHome