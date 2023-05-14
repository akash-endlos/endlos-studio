import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "@/components/scroll/ScrollToTop";


export default function App({ Component, pageProps }) {
  return (
      <>
      <Component {...pageProps} />
      <ScrollToTop/>
      </>
  );
}
