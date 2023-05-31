import { Inter } from "next/font/google";
import HomeCarousel from "@/components/home-page-components/HomeCarousel/HomeCarousel";
import HomeImageContainer from "@/components/home-page-components/HomeImageContainer/HomeImageContainer";
import HomeServices from "@/components/home-page-components/HomseServices/HomeServices";
import HomeVideoCarousel from "@/components/home-page-components/HomeVideoCarousel/HomeVideoCarousel";
import HomeBlogImages from "@/components/home-page-components/HomeBlogImages/HomeBlogImages";
import HomeWriteUsContainer from "@/components/home-page-components/HomeWriteUsContainer/HomeWriteUsContainer";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import HomeProductionHouse from "@/components/home-page-components/HomeProductionHouse/HomeProductionHouse";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
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
        <link rel="canonical" href="https://endlos.studio/" />
      </Head>
      <Navbar />
      <HomeCarousel />
      <HomeImageContainer />
      {/* <HomeProductionHouse /> */}
      <HomeServices />
      <HomeBlogImages />
      <HomeVideoCarousel />
      <HomeWriteUsContainer />
      <Footer />
    </>
  );
}
