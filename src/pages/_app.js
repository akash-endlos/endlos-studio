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
        {/* <Head>
          <title>Endlos Studio | Unreal Engine Possibilities</title>
          <meta name="description" content="Endlos Studio offers virtual production, architectural visualization & game development expertise. Experience the power of Unreal Engine 5.2 with us." />
          <meta name="keywords" content="unreal engine, Virtual Production, Architectural Visualization, Game Development, unreal engine 5.2, Endlos Studio" />
          <meta property="og:title" content="Unreal Engine 5.2 is now available! | Endlos Studio" />
          <meta property="og:description" content="Endlos Studio offers virtual production, architectural visualization & game development expertise. Experience the power of Unreal Engine 5.2 with us." />
          <meta property="og:site_name" content="Endlos Studio " />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://endlos.studio/assets/logo.png" />
          <meta property="og:url" content="https://endlos.studio/ " />
          <meta name="twitter:title" content="Unreal Engine 5.2 is now available! | Endlos Studio" />
          <meta name="twitter:description" content="Endlos Studio offers virtual production, architectural visualization & game development expertise. Experience the power of Unreal Engine 5.2 with us." />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://endlos.studio/" />
          <meta name="twitter:image" content="http://localhost:3000/assets/logo.png" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://endlos.studio/  " />
        </Head> */}
        <Component {...pageProps} />
      </Provider>
      <ScrollToTop />
    </>
  );
}
