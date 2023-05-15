import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "@/components/scroll/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
      <>
      <Component {...pageProps} />
      <ScrollToTop/>
      </>
  );
}
