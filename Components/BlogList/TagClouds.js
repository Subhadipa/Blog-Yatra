import { Box, Button } from '@mui/material';
import React from 'react'

const TagClouds = () => {
    const tagArr = ["Travel", "Adventure", "Exploration", "Community", "Culinary", "Culture", "Destination"];
  return (
    <>
    <Box style={{ marginLeft: "1160px", marginTop: "60px" }}>
    <h2 style={{ letterSpacing: "5px" }}>TAG CLOUD</h2>
    <Box style={{display:"flex",flexWrap:"wrap"}}>
      {
        tagArr?.map((tag)=>(
            <Button variant="contained" style={{backgroundColor:"white",color:"black",marginRight:"10px",marginBottom:"10px",textTransform:"none"}}>#{tag}</Button>
        ))
      }
    </Box>
</Box>
    </>
  )
}

export default TagClouds