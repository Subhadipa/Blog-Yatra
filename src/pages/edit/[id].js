
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import Router, { useRouter } from "next/router";
import { blogList, editblog, updateblog } from '@/Redux/BlogSlice';
import blogEditImage from "../../../Images/image.svg"
import { Button, Container, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import FileUploadIcon from "@mui/icons-material/FileUpload";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import styles from "../../../styles/blogCreate.module.css";
import Image from 'next/image';
const BlogEdit = () => {
    const { data } = useSelector((s) => s.Blog);
   
    const router = useRouter();
  const { id } = router.query;

    const dispatch = useDispatch();
    const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
    const [user, setUser] = useState({
      title: "",
      description: "",
    });
    const [image, setImage] = useState();
    
    const [error, setError] = useState({});
    let name, value;
   
    useEffect(() => {
      if (id) {
        dispatch(editblog(id)); // Only make the API call if id is available
      }
    }, [id]);
    useEffect(() => {
      if (data !== null) {
        setUser({
          title: data?.title,
          description: data?.description,
        });
      }
    },[data]);
    const postUserData = (e) => {
      name = e.target.name;
      value = e.target.value;
      
      if (name === "title") {
        if (value.length === 0) {
          setError({ ...error, title: "@Title is Required" });
          setUser({ ...user, title: "" });
        } else {
          setError({ ...error, title: "" });
          setUser({ ...user, title: value });
        }
      }
      if (name === "description") {
        if (value.length === 0) {
          setError({ ...error, description: "@Descriptionis Required" });
          setUser({ ...user, description: "" });
        } else {
          setError({ ...error, description: "" });
          setUser({ ...user, description: value });
        }
      }
    };
    const validateImage = (image) => {
        const imageType = image?.type?.split("/")[0];
    
        if (!image) {
          return setError({ ...error, image: "Please select a profile picture." });
        } else if (image.size > MAX_IMAGE_SIZE) {
          return setError({
            ...error,
            image: `Image size is ${(image?.size / (1024 * 1024)).toFixed(
              2
            )} that is too large.`,
          });
        } else if (imageType !== "image") {
          return setError({
            ...error,
            image: "Invalid file type. Please select an image.",
          });
        } else {
          setError({ ...error, image: "" });
        }
      };

    const sendData = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("id", id);
      formData.append("title", user.title);
      formData.append("description", user.description);
      image? formData.append("image", image): formData.append("image", data?.image);
  
  
      dispatch(updateblog(formData)).then(() => {
        dispatch(blogList());
      });
      Router.push("/blog-list");
    };
  return (
    <>
         <main className={styles.main}>
        <section className={styles.section}>
          <Container>
            <Grid container justifyContent="center">
              <Grid item md={8} lg={7} xl={6}>
                <Image src={blogEditImage} alt="..." className={styles.image} />
              </Grid>
              <Grid item md={7} lg={5} xl={5}>
                <Paper
                  elevation={3}
                  className={styles.formPaper}
                  style={{ boxShadow: "none" }}
                >
                  <form>
                    <Typography variant="h4" className={styles.formTitle}>
                      EDIT BLOG HERE
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter Suitable Title for your blog"
                      name="title"
                      value={user.title}
                      onChange={postUserData}
                      required
                      style={{ marginTop: "30px" }}
                      InputProps={{
                        startAdornment: (
                          <TitleIcon className={styles.formIcon} />
                        ),
                        style: {
                          paddingLeft: "40px",
                        },
                      }}
                    />
                    <span style={{ color: "red", marginLeft: "150px" }}>
                      {error?.title}
                    </span>
                    <TextField
                      multiline
                      rows={5}
                      rowsMax={10}
                      fullWidth
                      name="description"
                      placeholder="Write your thoughts"
                      variant="outlined"
                      required
                      value={user.description}
                      onChange={postUserData}
                      style={{ marginTop: "30px" }}
                      InputProps={{
                        startAdornment: (
                          <DescriptionIcon className={styles.formIcon}  style={{ marginTop: "-45px" }}/>
                        ),
                        style: {
                          paddingLeft: "40px",

                        },
                      }}
                    />
                    <span style={{ color: "red", marginLeft: "150px" }}>
                      {error?.description}
                    </span>

                    <Typography
                      style={{
                        color: "#F08000",
                        marginLeft: "8px",
                        marginTop: "30px",
                      }}
                    >
                      IMAGE
                    </Typography>
                    <TextField
                      type="file"
                      name="image"
                      placeholder="Enter image related to blog"
                      variant="outlined"
                      fullWidth
                      // required
                      onChange={(e) => {
                        const selectedImage = e.target.files[0];
                        setImage(selectedImage);
                        const error = validateImage(selectedImage);
                        setError(error || "");
                      }}
                      sx={{ "& fieldset": { border: "none" } }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FileUploadIcon style={{ color: "#F08000" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {error?.image &&(
                   <span style={{ color: "red", marginLeft: "24px" }}>
                  {error?.image}
                </span>
                  )}
                    {image !== "" &&
                    image !== undefined &&
                    image !== null ? (
                    <img
                      height="180px"
                      src={URL.createObjectURL(image)}
                      alt=""
                      className="upload-image"
                      style={{marginLeft:"70px"}}
                    />

                  ) : (
                    <>
                      {data?.image === "" ? (
                        <img
                          height="70px"
                          src={image}
                          alt=""
                          className="upload-image"
                          style={{marginLeft:"70px"}}
                        />
                      ) : (
                        <img
                          height="180px"
                          src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${data?.image}`}
                          alt=""
                          className="upload-image"
                          style={{marginLeft:"70px"}}
                        />
                      )}
                    </>
                  )}
                  {image === "" && (
                    <p>Drag or drop content here</p>
                  )}
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      className={styles.submitButton}
                      onClick={sendData}
                    >
                      EDIT
                    </Button>
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default BlogEdit