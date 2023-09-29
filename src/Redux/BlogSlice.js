import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  axiosInstance  from "./Helper";
import Router, { useRouter } from "next/router";

export const blogCreate = createAsyncThunk("/product/create",
async (formData) => {
  try{
    const res = await axiosInstance.post("/product/create", formData);
    const resData = res?.data;
    console.log(resData)
    return resData;
  }catch(error){
    console.error("API Error:", error);
    throw error;
  }
  }
);

export const blogList = createAsyncThunk("/product/list",
async (formData) => {
  try{
  const res = await axiosInstance.post("/product/list",formData);
  const resData = res?.data;
  return resData;
  }catch(error){
    console.error("API Error:", error);
    throw error;
  }
}
);

export const editblog = createAsyncThunk("/product/detail/:id",async (id) => {
    let res = await axiosInstance.get(`/product/detail/${id}`,id);
    let resData = res?.data;
    return resData;
  }
);
export const updateblog = createAsyncThunk("/product/update",async (formData) => {
  let res = await axiosInstance.post(`/product/update`,formData);
  let resData = res?.data;
  return resData;
}
);
export const removeblog = createAsyncThunk("/product/remove",async (formData) => {
  let res = await axiosInstance.post(`/product/remove`,formData);
  let resData = res?.data;
  return resData;
}
);
export const BlogSlice = createSlice({
  name: "Blog",
  initialState: {
    isLoading: false,
    data:[],
    isError: false,
    totalRecords:"",
    totalPage:""
  },
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(blogCreate.pending, (state, { payload }) => {
        state.isLoading = true;
       
      })
      .addCase(blogCreate.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if(payload.status===200){
          localStorage.setItem("title", payload?.data?.title);
          
          toast.success((payload?.message).replace("Product","Blog"));
          Router.push("/blog-list")
        }else{
          toast.error((payload?.message).replace("Product","Blog"));
        }
       
      })
      .addCase(blogCreate.rejected, (state, { payload }) => {
        state.isError = true;
        toast.error(payload)
        console.log("Error=>",payload);
      })
      .addCase(blogList.pending, (state, { payload }) => {
        state.isLoading = true;
       
      })
      .addCase(blogList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.totalRecords=payload?.totalRecords
        if(payload.status===200){
          state.totalPage=payload?.totalPages;
        state.data=payload
        toast.success((payload?.message).replace("Product","Blog"));
        }else{
          toast.error((payload?.message).replace("Product","Blog"));
        }
      })
      .addCase(blogList.rejected, (state, { payload }) => {
        state.isError = true;
        toast.error(payload)
        console.log("Error=>",payload);
      })
      .addCase(editblog.pending, (state, { payload }) => {
        state.isLoading = true;
       
      })
      .addCase(editblog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if(payload.status===200){
        state.data=payload.data;
        toast.success((payload?.message).replace("Product","Blog"))
        }else{
          toast.error((payload?.message).replace("Product","Blog"))
        }
      })
      .addCase(editblog.rejected, (state, { payload }) => {
        state.isError = true;
        toast.error(payload)
        console.log("Error=>",payload);
      })
      .addCase(updateblog.pending, (state, { payload }) => {
        state.isLoading = true;
       
      })
      .addCase(updateblog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
       
        if(payload.status===200){
          state.data=payload.data;
        toast.success((payload?.message).replace("Product","Blog"))
        }else{
          toast.error((payload?.message).replace("Product","Blog"))
        }
      })
      .addCase(updateblog.rejected, (state, { payload }) => {
        state.isError = true;
        toast.error(payload)
        console.log("Error=>",payload);
      })
      .addCase(removeblog.pending, (state, { payload }) => {
        state.isLoading = true;
       
      })
      .addCase(removeblog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if(payload.status===200){
         
        toast.success((payload?.message).replace("Product","Blog"))
        }else{
          toast.error((payload?.message).replace("Product","Blog"))
        }
      })

      .addCase(removeblog.rejected, (state, { payload }) => {
        state.isError = true;
        toast.error(payload)
        console.log("Error=>",payload);
      })
  },
});

export const {}=BlogSlice.actions