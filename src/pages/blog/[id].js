import { blogDetail } from "@/allcontent/blogDetail";
import ParallaxImageContainer from "@/components/about-page-components/ParallaxImageContainer/ParallaxImageContainer";
import BlogParallaxComponent from "@/components/blog-page-components/BlogParallaxComponent/BlogParallaxComponent";
import LatestBlogCarousel from "@/components/blog-page-components/LatestBlogCarousel/LatestBlogCarousel";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";
import React from "react";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineWhatsApp
} from "react-icons/ai";

const Blog = () => {
  const slug = useRouter()
  const filteredBlog = blogDetail.filter((item) => item.id === Number(slug.query.id))
  return (
    <div className="w-full">
      <Navbar Navclass="bg-[#111111] text-white" />
      <BlogParallaxComponent title={'Blog'} />
      {filteredBlog && filteredBlog.map((item, index) => (
        <div className="bg-[#111111] text-white">
          <div className="py-24 flex items-center justify-center">
            <h1 className="text-7xl max-w-7xl mx-auto px-5">{item.title}</h1>
          </div>
          <div className="max-w-screen-2xl mx-auto px-5">
            <div className="pb-10">
              <small>{item.date}</small>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center py-5 gap-5">
                <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/assets/home-7-img-1.jpg" alt="Bordered avatar" />
                <div className="flex flex-col">
                  <small>{item.author}</small>
                  <small>{item.authorDesignation}</small>
                </div>
              </div>
              <div className=" justify-between items-center hidden xl:flex">
                <small className="pr-5 font-semibold">Share On :- </small>
                <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
                  <AiOutlineWhatsApp size={20} color="white" />
                </span>
                <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
                  <AiFillInstagram size={20} color="white" />
                </span>
                <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
                  <AiOutlineTwitter size={20} color="white" />
                </span>
                <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
                  <AiFillFacebook size={20} color="white" />
                </span>
              </div>
            </div>
            <div className="max-w-7xl mx-auto py-10">
              <img src="/assets/home_blog_1.jpg" class="mx-auto max-w-full h-auto" alt="example image" />

              <p className="text-justify py-10 leading-loose">

                {item.description_first}
              </p>
              <div class="relative aspect-video overflow-hidden rounded-3xl">
                <video class="w-full opacity-100" src='../assets/write_us_video.mp4' autoPlay muted loop></video>
              </div>
              <p className="text-justify py-10 leading-loose">

                {item.description_second}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* <img data-aos="fade-left" data-aos-delay="500"   src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" /> */}
                <div class="relative aspect-video overflow-hidden rounded-3xl">
                  <video class="w-full opacity-100" src='../assets/write_us_video.mp4' autoPlay muted loop></video>
                </div>
                <p className="text-justify leading-loose ">

                  {item.description_third}
                </p>
              </div>
              <p className="text-justify leading-loose py-10">

                {item.description_fourth}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">

                {/* <img data-aos="fade-left" data-aos-delay="500"   src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" /> */}

                <p className="text-justify leading-loose">

                  {item.description_fifth}
                </p>
                <div class="relative aspect-video overflow-hidden rounded-3xl">
                  <img src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" />
                </div>
              </div>
              <LatestBlogCarousel />
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Blog;
