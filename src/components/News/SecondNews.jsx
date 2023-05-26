import BlogParallaxComponent from "@/components/blog-page-components/BlogParallaxComponent/BlogParallaxComponent";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const SecondNews = ({ }) => {
  return (
    <div className="w-full">
      <Navbar Navclass="bg-[#111111] text-white" />
      <BlogParallaxComponent title={'News'} />
      <div className="bg-[#111111] text-white">
        <div className="py-24 flex items-center justify-center">
          <h1 className="text-5xl max-w-7xl mx-auto px-5 font-bold">Unreal Editor for Fortnite is now available in Public Beta!</h1>
        </div>
        <div className="max-w-screen-2xl mx-auto px-5">
          <div className="max-w-7xl mx-auto py-10">
            <img src="/assets/blog_inside_vr_1.jpg" className="mx-auto max-w-full h-auto" alt="example image" />
            <p className="pt-16">Exciting news for Fortnite enthusiasts and game creators! The Unreal Editor for Fortnite has entered the Public Beta phase, bringing new opportunities for players to unleash their creativity and design custom Fortnite experiences. With this release, users can dive into the world of game development and harness the power of the Unreal Engine to craft their unique Fortnite creations.</p>
            <p className="py-5">The Unreal Editor for Fortnite provides a user-friendly and robust set of tools and features, empowering creators to build their game modes, maps, and experiences within the Fortnite universe. From designing thrilling challenges and imaginative environments to scripting engaging gameplay mechanics, the possibilities are endless.</p>
            <p className="py-5">This Public Beta release opens up a new chapter for the Fortnite community, enabling aspiring game developers, modders, and enthusiasts to bring their creative visions to life. With access to the Unreal Editor, users can leverage the same industry-standard engine that powers Fortnite to build and share their creations with millions of players around the world.</p>
            <p className="py-5">The Public Beta phase of the Unreal Editor for Fortnite signifies Epic Games' commitment to fostering a vibrant and collaborative game development ecosystem. By empowering players to become creators, Epic Games is democratizing game development and encouraging the growth of a passionate and innovative community.</p>
            <p className="py-5">Whether you're an experienced game developer or a Fortnite fan with a flair for creativity, the Unreal Editor for Fortnite presents an exciting opportunity to shape the future of the game. Get ready to explore, experiment, and showcase your talents as you delve into the limitless possibilities of game development within the Fortnite universe.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SecondNews;
