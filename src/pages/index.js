import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import HomeCarousel from "@/components/home-page-components/HomeCarousel/HomeCarousel";
import HomeImageContainer from "@/components/home-page-components/HomeImageContainer/HomeImageContainer";
import HomeServices from "@/components/home-page-components/HomseServices/HomeServices";
import HomeVideoCarousel from "@/components/home-page-components/HomeVideoCarousel/HomeVideoCarousel";
import HomeBlogImages from "@/components/home-page-components/HomeBlogImages/HomeBlogImages";
import HomeWriteUsContainer from "@/components/home-page-components/HomeWriteUsContainer/HomeWriteUsContainer";
import Footer from "@/components/footer/Footer";
import { useRouter } from "next/router";
import { getMetatags } from "@/redux/action/metatags/creator";
import { useDispatch, useSelector } from "react-redux";
import { HeadTag } from "@/components/HeaadTag/HeadTag";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const metaTags = useSelector((state) => state.allMetatags.payload);
  const path = useRouter().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (window) {
      const host = window.location.host;
      const hostWithPath = `${host}${path}`;
      dispatch(getMetatags("SET_META_TAGS", hostWithPath));
    }
  }, [dispatch, path]);



  return (
    <>
      {metaTags ? (<HeadTag metaTags={metaTags} />) : (<Head>
        <title> Unreal Engine Possibilities | Endlos Studio</title>
        <meta name="description" content="Endlos Studio offers virtual production, architectural visualization & game development expertise. Experience the power of Unreal Engine with us." />
        <meta name="keywords" content="unreal engine, Architectural Visualization, Virtual Production, Game Development, Endlos studio " />
        <meta property="og:title" content=" Unreal Engine Possibilities | Endlos Studio " />
        <meta property="og:description" content="Endlos Studio offers virtual production, architectural visualization & game development expertise. Experience the power of Unreal Engine with us. " />
        <meta property="og:site_name" content="Endlos Studio " />
        <meta property="og:type" content="article" />
        <meta property="og:image" content=" https://endlos.studio/assets/logo.png " />
        <meta property="og:url" content="https://endlos.studio/ " />
        <meta name="twitter:title" content=" Unreal Engine Possibilities | Endlos Studio " />
        <meta name="twitter:description" content="Endlos Studio offers virtual production, architectural visualization & game development expertise. Experience the power of Unreal Engine with us" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://endlos.studio/" />
        <meta name="twitter:image" content=" https://endlos.studio/assets/logo.png " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://endlos.studio/ " />
        <meta property="al:ios:app_name" content="Endlos Studio Pvt Ltd"></meta>
      </Head>)}


      <Navbar />
      <HomeCarousel />
      <HomeImageContainer />
      <HomeServices />
      <HomeBlogImages />
      <HomeVideoCarousel />
      <HomeWriteUsContainer />
      <Footer />
    </>
  );
}
