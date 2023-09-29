import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import styles from "../../../styles/blogCreate.module.css";
import Image from "next/image";
import blogCreateImage from "../../../Images/image.svg"
import { useDispatch } from "react-redux";
import { blogCreate } from "@/Redux/BlogSlice";

const index = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    title: "",
    description: "",
  });
  const [image, setImage] = useState();
  const [error, setError] = useState({});
  let name, value;
  const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "title") {
      if (value.length === 0) {
        setError({ ...error, title: "@Title is required" });
        setUser({ ...user, title: "" });
      } else {
        setError({ ...error, title: "" });
        setUser({ ...user, title: value });
      }
    }
    if (name === "description") {
      if (value.length === 0) {
        setError({ ...error, description: "@Description is required" });
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
    validateImage(image);
    const formData = new FormData();
    formData.append("title", user.title);
    formData.append("description", user.description);
    formData.append("image", image);
    dispatch(blogCreate(formData));
  };
  return (
    <>
      <main className={styles.main}>
        <section className={styles.section}>
          <Container>
            <Grid container justifyContent="center">
              <Grid item md={8} lg={7} xl={6}>
                <Image src={blogCreateImage} alt="..." className={styles.image} />
              </Grid>
              <Grid item md={7} lg={5} xl={5}>
                <Paper
                  elevation={3}
                  className={styles.formPaper}
                  style={{ boxShadow: "none" }}
                >
                  <form>
                    <Typography variant="h4" className={styles.formTitle}>
                      CREATE BLOG HERE
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
                    {image !== "" && image !== undefined && image !== null ? (
                      <img
                        src={URL.createObjectURL(image)}
                        alt="..."
                        class="upload-img"
                        style={{
                          height: "180px",
                          marginTop: "10px",
                          marginLeft: "60px",
                        }}
                      />
                    ) : (
                      <>{image === "" && <p>Drag or drop content here</p>}</>
                    )}
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      className={styles.submitButton}
                      onClick={sendData}
                    >
                      CREATE
                    </Button>
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  );
};

export default index;
