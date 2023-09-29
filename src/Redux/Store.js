import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./AuthSlice";
import { BlogSlice } from "./BlogSlice";



const Store = configureStore({
    reducer:{
        Auth:AuthSlice.reducer,
        Blog:BlogSlice.reducer
    },
   
})

export default Store
