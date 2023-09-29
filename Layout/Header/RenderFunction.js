import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogDropdown from "../../Components/Blog Dropdown/BlogDropdown";
import { Button } from "@mui/material";
import Link from "next/link";
import { check_image, check_name, check_token } from "@/Redux/AuthSlice";
import { profile_pic } from "@/Redux/Helper";


const RenderFunction = () => {
  const { isLoggedIn,userImage, userName } = useSelector((s) => s.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
   
    dispatch(check_token());
    dispatch(check_name());
    dispatch(check_image());
  }, []);
  return isLoggedIn  ? (
    <>
     <div style={{ marginLeft: "610px",marginTop:"15px",}}>
      <Link href="/">
        <Button
          variant="outlined"
          style={{
            color: "#F08000",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "18px",
            border: "none",
          }}
        >
          Home
        </Button>
      </Link>
      <Link href="/about">
        <Button
          variant="outlined"
          style={{
            color: "#F08000",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "18px",
            border: "none",
          }}
        >
          About
        </Button>
      </Link>
      <Link href="/contact">
        <Button
          variant="outlined"
          style={{
            color: "#F08000",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "18px",
            border: "none",
          }}
        >
          Contact
        </Button>
      </Link>
      {/* <Link href="#"> */}
        <BlogDropdown />
      {/* </Link> */}
      
      </div>
      <div style={{display:"flex",marginTop:'-10px'}}>
      <img src={profile_pic(userImage)} alt="..." style={{width: "40px",height: "40px",borderRadius:"50%",marginLeft:"10px"}}/>
            <b style={{marginLeft:"10px",color:"#F08000",fontSize:"18px",marginTop:"13px"}}>Hi,{userName}</b>
      </div>
    </>
  ) : (
    <>
      <div style={{ marginLeft: "700px" }}>
        <Link href="/">
          <Button
            variant="outlined"
            style={{
              color: "#F08000",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "18px",
              border: "none",
            }}
          >
            Home
          </Button>
        </Link>
        <Link href="/about">
          <Button
            variant="outlined"
            style={{
              color: "#F08000",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "18px",
              border: "none",
            }}
          >
            About
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            variant="outlined"
            style={{
              color: "#F08000",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "18px",
              border: "none",
            }}
          >
            Contact
          </Button>
        </Link>
        <Link href="/registration">
          <Button
            variant="outlined"
            style={{
              color: "#F08000",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "18px",
              border: "none",
            }}
          >
            Registration
          </Button>
        </Link>
        <Link href="/login">
          <Button
            variant="outlined"
            style={{
              color: "#F08000",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "18px",
              border: "none",
            }}
          >
            Login
          </Button>
        </Link>
      </div>
    </>
  );
};

export default RenderFunction;
