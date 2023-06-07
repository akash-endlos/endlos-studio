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
  const path = useRouter().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (window) {
      const host = window.location.host;
      const hostWithPath = `${host}${path}`;
      dispatch(getMetatags("SET_META_TAGS", hostWithPath));
    }
  }, [dispatch, path]);
  // const path = useRouter().pathname;
  // const metaTags = useSelector(state => state.allMetatags.payload);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (window) {
  //     const host = window.location.host
  //     const hostWithPath = `${host}${path}`
  //     dispatch(getMetatags('SET_META_TAGS', hostWithPath));
  //   }
  // }, [dispatch, path]);
  return (
    <>
      {/* <Head>
        {metaTags && (
          <meta dangerouslySetInnerHTML={{ __html: metaTags }} />
        )}
      </Head> */}
      <HeadTag/>
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
