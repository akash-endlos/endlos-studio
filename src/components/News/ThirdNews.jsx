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

const ThirdNews = ({ }) => {
  return (
    <div className="w-full">
      <Navbar Navclass="bg-[#111111] text-white" />
      <BlogParallaxComponent title={'News'} />
      <div className="bg-[#111111] text-white">
        <div className="py-24 flex items-center justify-center">
          <h1 className="text-5xl max-w-7xl mx-auto px-5 font-bold">Exploring Hillside: A Virtual Habitat 67</h1>
        </div>
        <div className="max-w-screen-2xl mx-auto px-5">
          <div className="max-w-7xl mx-auto py-10">
            <img src="/assets/blog_inside_vr_1.jpg" className="mx-auto max-w-full h-auto" alt="example image" />
            <p className="pt-16">Step into the immersive world of "Exploring Hillside," a virtual experience that pays homage to the iconic Habitat 67 architectural masterpiece. Through cutting-edge technology and meticulous attention to detail, this interactive journey invites you to explore a virtual replica of Habitat 67, seamlessly blending the past and the present.</p>
            <p className="py-5">Embark on a virtual tour through the interconnected concrete modules of Habitat 67, where you can navigate the vibrant community nestled alongside the St. Lawrence River. Immerse yourself in the architectural marvel, interact with the environment, and witness the innovative design elements that have made Habitat 67 an enduring symbol of modernist architecture.</p>
            <p className="py-5">With its lifelike visuals, realistic soundscape, and intuitive controls, "Exploring Hillside" transports you into a meticulously crafted virtual habitat. Discover the communal spaces, private terraces, and intricate passageways that make up this architectural gem. Learn about the history and inspiration behind Habitat 67 through engaging narration and informative hotspots throughout the experience.</p>
            <p className="py-5">As you traverse the virtual landscape, you'll gain a deeper appreciation for the vision and ingenuity that went into creating this visionary housing complex. Experience the interplay of light and shadow, the harmonious blend of nature and architecture, and the sense of community that Habitat 67 embodies.</p>
            <p className="py-5">"Exploring Hillside" not only offers a unique opportunity to virtually visit and engage with Habitat 67 but also serves as a testament to the power of interactive technology in architectural visualization. It showcases the potential of virtual environments to captivate, educate, and inspire while preserving and celebrating architectural heritage.</p>
            <p className="py-5">Prepare to embark on a captivating virtual journey through "Exploring Hillside," where you can unlock the secrets of Habitat 67, immerse yourself in its architectural beauty, and appreciate the visionary concepts that continue to shape the future of urban living.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThirdNews;
