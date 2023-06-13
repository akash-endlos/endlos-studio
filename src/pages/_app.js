import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "@/components/scroll/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import store from "@/redux/store";
import { ToastContainer } from "react-toastify";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Component {...pageProps} />
      </Provider>
      <ScrollToTop />
    </>
  );
}
