import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import Router, { useRouter } from "next/router";

export const register=createAsyncThunk("/user/signup",
    async(formData)=>{
        let res=await axiosInstance.post("/user/signup",formData)
        let resData=res?.data
        return resData
    }

)

export const login=createAsyncThunk("/user/signin",async(formData)=>{
     let res=await axiosInstance.post("/user/signin",formData)
     let resData=res?.data
     return resData
})

export const AuthSlice=createSlice({
    name:"User",
    initialState:{
      isLoading:false,
      isError:false,
      data:[],
      isLoggedIn:false,
      userName:"Guest",
      userImage:""
    },
    reducers:{
        logout:(state,{payload})=>{
            
            localStorage.removeItem("user")
            localStorage.removeItem("Profile_pic");
            localStorage.removeItem("title");
            Cookies.remove("token");
            localStorage.clear()
            state.isLoggedIn=false

            if(localStorage.length===0 ){
            toast.success(`${state.userName} logged out successfully!`)
            }else{
                toast.error(`Sorry${state.userName} there is some issue while logging out!`)
            }
        },
        check_token:(state,{payload})=>{
            let token=Cookies.get("token")
            if(token!=="" && token!==null && token!==undefined){
            state.isLoggedIn=true
            }
        },
        check_name:(state,{payload})=>{
            let user=localStorage.getItem("user")
            if(user!=="" && user!==null && user!==undefined){
                state.userName=user
            }
        },
        check_image: (state, { payload }) => {
            let image = localStorage.getItem("Profile_pic");
            if (image !== null && image !== undefined) {
              state.userImage = image;
            }
          },
    },
    extraReducers:(builder)=>{
        (builder)
                .addCase(register.pending,(state,{payload})=>{
                    state.isLoading=true

                })
                .addCase(register.fulfilled,(state,{payload})=>{
                    state.isLoading=false
                    // let fullname="Guest"
                    // state.userName = fullname ;
                    if(payload.status===200){
                       const fullname =payload?.data?.first_name + " " + payload?.data?.last_name;
                        localStorage.setItem("user", fullname);
                        localStorage.setItem("Profile_pic", payload?.data?.profile_pic);
                        state.userName = fullname ;
                        state.userImage = payload?.data?.profile_pic;
                        toast.success(`${state.userName} ${payload?.message}`);
                        Router.push("/login");
                    }else{
                        toast.error(`${state.userName} ${payload?.message}`)
                    }
                    

                })
                .addCase(register.rejected,(state,{payload})=>{
                    state.isError=true
                    console.log("ERROR=>",payload)
                })
                .addCase(login.pending,(state,{payload})=>{
                    state.isLoading=true
                })
                .addCase(login.fulfilled,(state,{payload})=>{
                    state.isLoading=false
                    // let fullname="Guest"
                    // state.userName = fullname ;
                   if(payload?.status===200){
                       const fullname =payload?.data?.first_name + " " + payload?.data?.last_name;
                        Cookies.set("token", payload?.token)
                        localStorage.setItem("user", fullname);
                        localStorage.setItem("Profile_pic", payload?.data?.profile_pic);
                        state.isLoggedIn = true;
                        state.userName = fullname ;
                        state.userImage = payload?.data?.profile_pic;
                        toast.success(`${state.userName} ${payload?.message}`);
                    Router.push("/blog-list")
                    }else{
                        toast.error(`${state.userName} ${payload?.message}`)
                    }
                    
                })
                .addCase(login.rejected,(state,{payload})=>{
                    state.isError=true
                    console.log("ERROR=>",payload)
                })
    }
})

export const {check_token,check_name,logout,check_image}=AuthSlice.actions