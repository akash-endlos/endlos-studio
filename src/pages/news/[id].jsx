import ParallaxImageContainer from "@/components/about-page-components/ParallaxImageContainer/ParallaxImageContainer";
import BlogParallaxComponent from "@/components/blog-page-components/BlogParallaxComponent/BlogParallaxComponent";
import LatestBlogCarousel from "@/components/blog-page-components/LatestBlogCarousel/LatestBlogCarousel";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { useRouter } from "next/router";
import FirstNews from "@/components/News/FirstNews";
import SecondNews from "@/components/News/SecondNews";
import ThirdNews from "@/components/News/ThirdNews";
const Blog = ({ }) => {
  const router = useRouter();
  const NewsById = (id) => {
    switch (id) {
      case "Unreal Engine 5.2 Burned Dead":
        return (
          <FirstNews />
        )
      case "Unreal Editor for Fortnite":
        return (
          <SecondNews />
        )
      case "Exploring Hillside":
        return (
          <ThirdNews />
        )
      default:
        break;
    }
  }
  return (
    <>
      {NewsById(router.query.id)}
    </>
  );
};

export default Blog;
