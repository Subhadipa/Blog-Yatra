import ImageCarousel from "../../../Components/ImageCarousel";
import {
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
import styles from "../../../styles/contact.module.css";
import Image from "next/image";
import contactImage from "../../../Images/contact.svg";
import { useState } from "react";
const Contact = () => {
  // const form = useRef();
  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    user_subject:"",
    user_message:""
  });
  const [error, setError] = useState({});
  let name, value;

  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "user_name") {
      if (value.length === 0) {
        setError({ ...error, user_name: "@Name is required" });
        setUser({ ...user, user_name: "" });
      } else {
        setError({ ...error, user_name: "" });
        setUser({ ...user, user_name: value });
      }
    }

    if (name === "user_email") {
      if (value.length === 0) {
        setError({ ...error, user_email: "@Email is required" });
        setUser({ ...user, user_email: "" });
      } else {
        setError({ ...error, user_email: "" });
        setUser({ ...user, user_email:value });
      }
    }
    if (name === "user_subject") {
      if (value.length === 0) {
        setError({ ...error, user_subject: "@Subject is required" });
        setUser({ ...user, user_subject: "" });
      } else {
        setError({ ...error,user_subject: "" });
        setUser({ ...user, user_subject: value });
      }
    }

    if (name === "user_message") {
      if (value.length === 0) {
        setError({ ...error,  user_message: "@Message is required" });
        setUser({ ...user,  user_message: "" });
      } else {
        setError({ ...error, user_message: "" });
        setUser({ ...user,  user_message: value });
      }
    }
 
  };
  return (
    <>
      <Container maxWidth="md" style={{ marginTop: "160px" }}>
        <CssBaseline />
        <ImageCarousel />
      </Container>
      <br />
      <br />
      <main className={styles.main}>
        <section className={styles.section}>
          <Container>
            <Grid container justifyContent="center">
              <Grid item md={8} lg={7} xl={6}>
                <Image src={contactImage} alt="..." className={styles.image} />
              </Grid>
              <Grid item md={7} lg={5} xl={5}>
                <Paper
                  elevation={3}
                  className={styles.formPaper}
                  style={{ boxShadow: "none" }}
                >
                  <form>
                    <Typography variant="h4" className={styles.formTitle}>
                      CONTACT HERE
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Name"
                      name="user_name"
                      value={user.user_name}
                      onChange={postUserData}
                      required
                      InputProps={{
                        startAdornment: (
                          <PersonIcon className={styles.formIcon} />
                        ),
                        style: {
                          paddingLeft: "40px",
                        },
                      }}
                    />
                    <span style={{ color: "red", marginLeft: "130px" }}>
                      {error?.user_name}
                    </span>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Email Address"
                      name="user_email"
                      value={user.user_email}
                      onChange={postUserData}
                      style={{ marginTop: "30px" }}
                      required
                      InputProps={{
                        startAdornment: (
                          <EmailIcon className={styles.formIcon} />
                        ),
                        style: {
                          paddingLeft: "40px",
                        },
                      }}
                    />
                    <span style={{ color: "red",marginLeft: "130px" }}>
                      {error?.user_email}
                    </span>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Subject"
                      name="user_subject"
                      value={user.user_subject}
                      onChange={postUserData}
                      style={{ marginTop: "30px" }}
                      required
                      InputProps={{
                        startAdornment: (
                          <SubjectIcon className={styles.formIcon} />
                        ),
                        style: {
                          paddingLeft: "40px",
                        },
                      }}
                    />
                    <span style={{ color: "red",marginLeft: "130px" }}>
                      {error?.user_subject}
                    </span>
                    <TextField
                      multiline
                      rows={5}
                      rowsMax={10}
                      fullWidth
                      placeholder="Message"
                      name="user_message"
                      value={user.user_message}
                      onChange={postUserData}
                      style={{ marginTop: "30px" }}
                      required
                      InputProps={{
                        startAdornment: (
                          <MessageIcon
                            className={styles.formIcon}
                            style={{ marginTop: "-45px" }}
                          />
                        ),
                        style: {
                          paddingLeft: "40px",
                        },
                      }}
                    />
                    <span style={{ color: "red", marginLeft: "130px" }}>
                      {error?.user_message}
                    </span>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      className={styles.submitButton}
                    >
                      Send Message
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

export default Contact;
