import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import HomeCarousel from "@/components/home-page-components/HomeCarousel/HomeCarousel";
import HomeImageContainer from "@/components/home-page-components/HomeImageContainer/HomeImageContainer";
import HomeServices from "@/components/home-page-components/HomseServices/HomeServices";
import HomeVideoCarousel from "@/components/home-page-components/HomeVideoCarousel/HomeVideoCarousel";
import HomeBlogImages from "@/components/home-page-components/HomeBlogImages/HomeBlogImages";
import HomeWriteUsContainer from "@/components/home-page-components/HomeWriteUsContainer/HomeWriteUsContainer";
import Footer from "@/components/footer/Footer";
import HomeProductionHouse from "@/components/home-page-components/HomeProductionHouse/HomeProductionHouse";
import { useRouter } from "next/router";
import { getMetatags } from "@/redux/action/metatags/creator";
import { useDispatch, useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const path = useRouter().pathname;
  const metaTags = useSelector(state => state.allMetatags.payload);
  const dispatch = useDispatch();

  useEffect(() => {
   if(window)
   {
    const host = window.location.host
    const hostWithPath = `${host}${path}`
    dispatch(getMetatags('SET_META_TAGS', hostWithPath));
   }
  }, [dispatch, path]);

  useEffect(() => {
    if (metaTags) {
      const headTagElement = document.createElement('div');
      headTagElement.innerHTML = metaTags;
      const headElement = document.querySelector('head');
      headElement.appendChild(headTagElement);
    }
  }, [metaTags]);

  return (
    <>
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
