import axios from "axios"
import Cookies from 'js-cookie';

const baseURL = "https://wtsacademy.dedicateddevelopers.us/api";

let axiosInstance=axios.create({
    baseURL:baseURL
})

export const image = (media) => {
    return (
      `https://wtsacademy.dedicateddevelopers.us` + `/uploads/product/${media}`
    );
  };
  
  export const profile_pic = (media) => {
    return (
      `https://wtsacademy.dedicateddevelopers.us` +`/uploads/user/profile_pic/${media}`
    );
  };

  axiosInstance.interceptors.request.use(
    async function (config) {
      const token =
      Cookies.get("token") || sessionStorage.getItem("token");
      // console.log(token,"token from helper")
      if (token !== null || token !== undefined) {
        config.headers["x-access-token"] = token;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );



export default axiosInstance