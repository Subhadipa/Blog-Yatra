import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const RecentPosts = () => {
  const blogArr = [
    {
      blog: "Your Ultimate Travel Companion.",
      date: "Jan 01, 2023",
    },
    {
      blog: "Here Journeys Become Lifelong Memories.",
      date: "Mar 26, 2022",
    },
    {
      blog: "BlogYatra: Connect with Travel Enthusiasts.",
      date: "Jun 01, 2021",
    },
  ];
  return (
    <>
      <Box style={{ marginLeft: "1160px", marginTop: "60px" }}>
        <h2 style={{ letterSpacing: "5px" }}>RECENT POST</h2>

        {blogArr?.map((blogEach) => (
          <>
            <Card sx={{ width: "300px", marginBottom: "20px" }}>
              <CardContent>
                <Typography gutterBottom variant="subtitle1" style={{fontWeight:"bold"}}>
                  {blogEach.blog}
                </Typography>
                <Typography gutterBottom variant="body2"  style={{color:"#F08000"}}>
                  {blogEach.date}
                </Typography>
              </CardContent>
            </Card>
          </>
        ))}
      </Box>
    </>
  );
};

export default RecentPosts;
