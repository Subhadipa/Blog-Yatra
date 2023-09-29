import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { login } from "../../Redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "../../../styles/login.module.css";
import Image from "next/image";
import loginImage from "../../../Images/login.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const { redirect_to_login } = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "@Email is Required!!" });
        setUser({ ...user, email: "" });
      } else {
        setError({ ...error, email: "" });
        setUser({ ...user, email: value });
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "@Password is Required!!" });
        setUser({ ...user, password: "" });
      } else {
        setError({ ...error, password: "" });
        setUser({ ...user, password: value });
      }
    }
  };

  const sendData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);

    dispatch(login(formData));
  };

  return (
    <>
      <main className={styles.main}>
        <section className={styles.section}>
          <Container>
            <Grid container justifyContent="center">
              <Grid item md={8} lg={7} xl={6}>
                <Image src={loginImage} alt="..." className={styles.image} />
              </Grid>
              <Grid item md={7} lg={5} xl={5}>
                <Paper
                  elevation={3}
                  className={styles.formPaper}
                  style={{ boxShadow: "none" }}
                >
                  <form style={{ marginTop: "200px" }}>
                    <Typography variant="h4" className={styles.formTitle}>
                      LOGIN HERE
                    </Typography>

                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter your Email Address"
                      name="email"
                      value={user.email}
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
                    <span style={{ color: "red", marginLeft: "150px" }}>
                      {error?.email}
                    </span>
                    <TextField
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter Your Password"
                      variant="outlined"
                      fullWidth
                      required
                      value={user?.password}
                      onChange={postUserData}
                      style={{ marginTop: "30px" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon style={{ color: "#F08000" }} />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <Visibility style={{ color: "#F08000" }} />
                              ) : (
                                <VisibilityOff style={{ color: "#F08000" }} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <span style={{ color: "red", marginLeft: "150px" }}>
                      {error?.password}
                    </span>

                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      className={styles.submitButton}
                      onClick={sendData}
                    >
                      LOGIN
                    </Button>
                    <Grid item xs={12}>
                      <Typography variant="h6" style={{ textAlign: "center" }}>
                        Don't have an account?
                        <Link
                          href="/registration"
                          style={{ textDecoration: "none", color: "#F08000" }}
                        >
                          Create Account
                        </Link>
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        style={{ textAlign: "center" }}
                      >
                        <Link
                          href="#"
                          style={{ textDecoration: "none", color: "#F08000" }}
                        >
                          Forgot Password?
                        </Link>
                      </Typography>
                    </Grid>
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

export default Login;
