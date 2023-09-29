// import "../styles/globals.css";
import Wrapper from "../../Layout/Wrapper/Wrapper";
import { Provider, useDispatch } from "react-redux";
import Store from "../Redux/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { check_image, check_name, check_token } from "../Redux/AuthSlice";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // const dispatch = useDispatch();

  // useEffect(() => {
   
  //   dispatch(check_token());
  //   dispatch(check_name());
  //   dispatch(check_image());
  // }, []);

  return (
    <Provider store={Store}>
    <Wrapper>
      <Component {...pageProps} />
      <ToastContainer />
    </Wrapper>
  </Provider>
  );
}
