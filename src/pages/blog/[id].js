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
import FirstBlog from "@/components/Blogs/FirstBlog";
import SecondBlog from "@/components/Blogs/SecondBlog";
import ThirdBlog from "@/components/Blogs/ThirdBlog";
const Blog = ({ }) => {
  const router = useRouter();
  const BlogById = (id) => {
    switch (id) {
      case "Artificial Intelligence in Gaming":
        return (
          <FirstBlog />
        )
      case "The Impact of Virtual Reality":
        return (
          <SecondBlog />
        )
      case "The Unreal Engine 5.2 is available":
        return (
          <ThirdBlog />
        )
      default:
        break;
    }
  }
  return (
    <>
      {BlogById(router.query.id)}
    </>
  );
};

export default Blog;
