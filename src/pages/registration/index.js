import {Button,Card,CardContent,Container,Grid,IconButton,InputAdornment,Link,Paper,TextField, Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import styles from "../../../styles/registration.module.css";
import { register } from "../../Redux/AuthSlice";
import { useDispatch } from "react-redux";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import registrationImage from "../../../Images/registration.png"
import Image from "next/image";
import TwitterIcon from '@mui/icons-material/Twitter';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

const dispatch=useDispatch()
//  const navigate=useNavigate()
  const [user,setUser]=useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  })
 
 const [error,setError]=useState({})
  const [image, setImage] = useState();
  let name,value
  const MAX_IMAGE_SIZE =10 * 1024 * 1024; 

  const postUserData=(e)=>{
    name=e.target.name
    value=e.target.value
    
    if(name==="first_name"){
      if(value.length===0){
        setError({...error,first_name:"@First Name is Required!!"})
        setUser({...user,first_name:""})
      }else{
        setError({...error,first_name:""})
        setUser({...user,first_name:value})
      }
    }
    if(name==="last_name"){
      if(value.length===0){
        setError({...error,last_name:"@Last Name is Required!!"})
        setUser({...user,last_name:""})
      }else{
        setError({...error,last_name:""})
        setUser({...user,last_name:value})
      }
    }
      if(name==="email"){
        if(value.length===0){
          setError({...error,email:"@Email is Required!!"})
          setUser({...user,email:""})
        }else{
          setError({...error,email:""})
          setUser({...user,email:value})
        }
    }
    if(name==="password"){
      if(value.length===0){
        setError({...error,password:"@Password is Required!!"})
        setUser({...user,password:""})
      }else{
        setError({...error,password:""})
        setUser({...user,password:value})
      }
  }
  
  
}

const validateImage = (image) => {
  const imageType = image?.type?.split('/')[0]; 
  
  if (!image) {
    return setError({...error,image:'Please select a profile picture.'})
  }

  else if (image.size > MAX_IMAGE_SIZE) {
    return setError({...error,image:`Image size is ${(image?.size/(1024*1024)).toFixed(2)} that is too large.`})
  }

 
  else if (imageType !== 'image') {
    return setError({...error,image:'Invalid file type. Please select an image.'})
  }
  else{
     setError({...error,image:""})
  }
};


 const sendData=async(e)=>{
  e.preventDefault()
   validateImage(image);
  const formData=new FormData()
  formData.append("first_name",user.first_name)
  formData.append("last_name",user.last_name)
  formData.append("email",user.email)
  formData.append("password",user.password)
  formData.append("profile_pic",image)

  dispatch(register(formData))
 }
  return (
    <>
     
     <main className={styles.main}>
        <section className={styles.section}>
          <Container>
            <Grid container justifyContent="center">
              <Grid item md={8} lg={7} xl={6}>
                <Image src={registrationImage} alt="..." className={styles.image} />
              </Grid>
              <Grid item md={7} lg={5} xl={5}>
                <Paper
                  elevation={3}
                  className={styles.formPaper}
                  style={{ boxShadow: "none" }}
                >
                  <form>
                    <Typography variant="h4" className={styles.formTitle}>
                      REGISTER HERE
                    </Typography>
                    <Grid container spacing={2} justifyContent="center"> 
              <Grid item>
                <Link href="/google">
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#DB4437",
                    }}
                  >
                    <GoogleIcon fontSize="medium" style={{ color: "white" }} />
                  </Button>
                </Link>
               </Grid>
              <Grid item>
                <Link href="/facebook">
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#1877F2",
                    }}
                  >
                    <FacebookIcon
                      fontSize="medium"
                      style={{ color: "white" }}
                    />
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/twitter">
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      backgroundColor:"#00ACEE"
                    }}
                  >
                    <TwitterIcon
                      fontSize="medium"
                      style={{ color: "white" ,}}
                    />
                  </Button>
                </Link>
              </Grid>
            </Grid>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter your First Name"
                      name="first_name"
                      value={user.first_name}
                      onChange={postUserData}
                      required
                      style={{marginTop:"30px"}}
                      InputProps={{
                        startAdornment: (
                          <PersonIcon className={styles.formIcon} />
                        ),
                        style: {
                          paddingLeft: "40px",
                        },
                      }}
                    />
                    <span style={{ color: "red", marginLeft:"150px" }}>
                      {error?.first_name}
                    </span>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter your Last Name"
                      name="last_name"
                      value={user.last_name}
                      onChange={postUserData}
                      required
                      style={{marginTop:"30px"}}
                      InputProps={{
                        startAdornment: (
                          <PersonIcon className={styles.formIcon} />
                        ),
                        style: {
                          paddingLeft: "40px",
                        },
                      }}
                    />
                    <span style={{ color: "red", marginLeft:"150px" }}>
                      {error?.last_name}
                    </span>
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
                    <span style={{ color: "red",marginLeft:"150px"}}>
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
                              <Visibility style={{ color: '#F08000' }} />
                            ) : (
                              <VisibilityOff style={{ color: '#F08000' }} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                   <span style={{ color: "red",marginLeft:"150px" }}>
                  {error?.password}
                </span>
                <Typography style={{ color: "#F08000", marginLeft: "8px",marginTop:"30px" }}>
                    Profile Picture
                  </Typography>
                  <TextField
                    type="file"
                    name="profile_pic"
                    placeholder="Enter your Profile Picture"
                    variant="outlined"
                    fullWidth
                    required
                    
                    onChange={(e)=> {
                      const selectedImage = e.target.files[0];
                      setImage(selectedImage);
                      const error = validateImage(selectedImage);
                      setError(error || '');
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
                      REGISTER
                    </Button>
                    <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    
                    style={{ textAlign: "center" }}
                  >
                    Have an account?
                    <Link
                      href="/login"
                      style={{ textDecoration: "none", color: "#F08000" }}
                    >
                      Log In
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

export default Registration;
