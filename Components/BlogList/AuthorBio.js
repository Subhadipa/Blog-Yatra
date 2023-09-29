import { profile_pic } from '@/Redux/Helper'
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const AuthorBio = () => {
    const {userImage,userName}=useSelector((s)=>s.Auth)
  return (
    <>
    <Box style={{ marginTop: "20px", marginLeft: "1160px" ,position:"static"}}>
        <Card sx={{ width: "300px", height: "350px" }}>
          <div
            style={{
              paddingTop: "56.25%",
              position: "relative",
              maxHeight: "300px",
              width: "300px",
            }}
          >
            <CardMedia
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "scale-down",
                alignItems: "center",
                padding:"5px"
              }}
              component="img"
              alt="..."
              src={profile_pic(userImage)}
            />
          </div>
          <CardContent>
          <Typography gutterBottom variant="h5" style={{textAlign:"center"}}>
              {userName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est  ipsum erat kasd amet elitr
            </Typography>
          </CardContent>
          <CardActions style={{marginLeft:"75px"}}>
       <FacebookIcon style={{color:"#F08000"}}/>
       <TwitterIcon style={{color:"#F08000"}}/>
       <LinkedInIcon style={{color:"#F08000"}}/>
       <InstagramIcon style={{color:"#F08000"}}/>
       <YouTubeIcon style={{color:"#F08000"}}/>
      </CardActions>
        </Card>
      </Box>
    </>
  )
}

export default AuthorBio