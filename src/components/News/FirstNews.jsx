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

const FirstNews = ({ }) => {
  return (
    <div className="w-full">
      <Navbar Navclass="bg-[#111111] text-white" />
      <BlogParallaxComponent title={'News'} />
      <div className="bg-[#111111] text-white">
        <div className="py-24 flex items-center justify-center">
          <h1 className="text-5xl max-w-7xl mx-auto px-5 font-bold">Unreal Engine 5.2 Burned Dead Forest Demo Looks Hauntingly Realistic With Its Impressive Lighting.</h1>
        </div>
        <div className="max-w-screen-2xl mx-auto px-5">
          <div className="max-w-7xl mx-auto py-10">
            <img src="/assets/blog_inside_vr_1.jpg" className="mx-auto max-w-full h-auto" alt="example image" />
            <p className="pt-16">The latest Unreal Engine 5.2 demo, featuring a burned-dead forest environment, has left viewers in awe with its stunningly realistic visuals and remarkable lighting effects. The demo showcases the power and capabilities of Unreal Engine 5, pushing the boundaries of real-time rendering and immersing viewers in an eerie and atmospheric world.</p>
            <p className="py-5">The attention to detail in the burned trees, charred vegetation, and realistic debris creates a hauntingly beautiful environment. The lighting effects, including the dynamic interplay of sunlight and shadows, add depth and realism, evoking a sense of melancholy and desolation.</p>
            <p className="py-5">Unreal Engine 5's advanced lighting system, Lumen, is showcased in this demo, delivering impressive global illumination and accurate light-bouncing effects. The result is a visually striking scene that feels almost tangible, blurring the line between virtual and reality.</p>
            <p className="py-5">The demo serves as a testament to the power of Unreal Engine 5 and its potential to revolutionize the gaming and entertainment industries. With its enhanced capabilities, developers can create immersive and visually stunning experiences that transport audiences to new worlds and evoke powerful emotions.</p>
            <p className="py-5">As Unreal Engine continues to evolve, we can anticipate even more breathtaking visuals and realistic environments that push the boundaries of what is possible in real-time rendering. The burned-dead forest demo is a testament to the incredible technological advancements and the exciting possibilities for game developers, filmmakers, and visual artists alike.</p>
            <p className="py-5">Stay tuned as Unreal Engine 5 continues to redefine the standard for visual fidelity and immersive experiences, promising a future where virtual worlds feel indistinguishable from reality.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FirstNews;
