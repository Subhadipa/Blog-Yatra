import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
//  import award from "../Images/award.png"
//  import speech from "../Images/speech.png"
const ImageCarousel = () => {
  const images = ["/award.png","/speech.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-advance the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="relative" style={{marginTop:"60px"}}>
   
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{ width: '100%', height: 'auto' }}
      />
      <Box style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <KeyboardArrowLeft fontSize="large" onClick={goToPrevSlide} style={{ cursor: 'pointer', marginRight: '760px' }} />
          <KeyboardArrowRight fontSize="large" onClick={goToNextSlide} style={{ cursor: 'pointer', marginLeft: '20px' }} />
        </Box>
      </Box>
    
  </Box>
  );
};

export default ImageCarousel;
