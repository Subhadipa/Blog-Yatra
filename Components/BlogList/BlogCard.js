import { image } from "@/Redux/Helper";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { blogList, removeblog } from "@/Redux/BlogSlice";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../../styles/BlogCard.module.css"
import DateFormatter from "./DateFormatter";
import MonthFormatter from "./MonthFormatter";
import SweetAlertComponent from "../SweetAlert/SweetAlert";



const BlogCard = ({ blogData }) => {
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [id, setId] = useState();
  const dispatch = useDispatch();

  const deleteBlog = () => {
    setId(blogData?._id);
    setDeleteClicked(true);
  };

  const sendId = () => {
    const formData = new FormData();
    formData.append("id", id);
    if (id !== undefined && id !== null) {
      dispatch(removeblog(formData)).then(() => {
        dispatch(blogList());
      });
    }
    setDeleteClicked(false);
    setId("");
  };
  return (
    <>
      <Box style={{ marginTop: "30px", marginLeft: "60px" }}>
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
                objectFit: "fill",
                alignItems: "center",
              }}
              component="img"
              alt="..."
              src={image(blogData?.image)}
            />
             <div class={styles.blogDate}>
              <h6 style={{fontWeight:"bold",fontSize:"20px",marginTop:"10px"}}>
                <DateFormatter date={blogData?.createdAt} />
              </h6>
              <p style={{color:"black",textTransform:"uppercase",marginTop:"-45px"}}>
                <MonthFormatter date={blogData?.createdAt} />
              </p>
            </div>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {blogData?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {blogData?.description}
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            onClick={() => setEditClicked(true)}
            style={{
              height: "40px",
              width: "40px",
              marginLeft: "20px",
              marginTop: "30px",
              backgroundColor: "#7AB730",
            }}
          >
            <Link
              href={`/edit/${blogData?._id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <EditIcon fontSize="small" />
            </Link>
          </Button>

          <Button
            variant="contained"
            onClick={deleteBlog}
            style={{
              height: "40px",
              width: "40px",
              marginLeft: "120px",
              marginTop: "30px",
              backgroundColor: "red",
            }}
          >
            <DeleteIcon fontSize="small" />
          </Button>
          {deleteClicked && (
              <SweetAlertComponent
                confirm={sendId}
                cancle={() => setDeleteClicked(false)}
                title={"Are you sure?"}
                subtitle={"You will not be able to recover!"}
              />
            )}
        </Card>
      </Box>
    </>
  );
};

export default BlogCard;
