import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomeCarousel from "@/components/home-page-components/HomeCarousel/HomeCarousel";
import HomeImageContainer from "@/components/home-page-components/HomeImageContainer/HomeImageContainer";
import HomeServices from "@/components/home-page-components/HomseServices/HomeServices";
import HomeNewReleases from "@/components/home-page-components/HomNewReleases/HomeNewReleases";
import HomeOurTeam from "@/components/home-page-components/HomeOurTeam/HomeOurTeam";
import HomeVideoCarousel from "@/components/home-page-components/HomeVideoCarousel/HomeVideoCarousel";
import HomeProductionHouse from "@/components/home-page-components/HomeProductionHouse/HomeProductionHouse";
import HomeBlogImages from "@/components/home-page-components/HomeBlogImages/HomeBlogImages";
import HomeWriteUsContainer from "@/components/home-page-components/HomeWriteUsContainer/HomeWriteUsContainer";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <HomeImageContainer />
      <HomeServices />
      {/* <HomeNewReleases /> */}
      <HomeBlogImages />
      {/* <HomeOurTeam /> */}
      <HomeVideoCarousel /> 
      <HomeWriteUsContainer />
      {/* <HomeProductionHouse /> */}
      <Footer />
    </>
  );
}
