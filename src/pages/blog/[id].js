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
} from "react-icons/ai";

const Blog = ({ }) => {
  return (
    <div className="w-full">
      <Navbar Navclass="bg-[#111111] text-white" />
      <BlogParallaxComponent title={'Blog'} />
      <div className="bg-[#111111] text-white">
        <div className="py-24 flex items-center justify-center">
          <h1 className="text-7xl max-w-7xl mx-auto px-5">Meet sustainability innovators combating climate change in India</h1>
        </div>
        <div className="max-w-screen-2xl mx-auto px-5">
          <div className="pb-10">
            <small>5 May 2023</small>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-center py-5 gap-5">
              <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/assets/home-7-img-1.jpg" alt="Bordered avatar" />
              <div className="flex flex-col">
                <small>Yash patel</small>
                <small>Founder Of The Company</small>
              </div>
            </div>
            <div className=" justify-between items-center hidden xl:flex">
              <small className="pr-5 font-semibold">Share On :- </small>
              <span className="font-semibold tracking-widest text-md pr-5 cursor-pointer">
                <AiFillYoutube size={20} color="white" />
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

              Virtual reality (VR) has become increasingly popular in recent years, and for good reason. It offers an immersive experience that allows users to feel like they are a part of another world. For those who are new to VR, it can be overwhelming and confusing. However, there are many blogs that offer an introduction to the world of virtual reality. These blogs cover everything from the basics of VR technology to the different types of headsets and controllers available.

              They also provide information on the best VR games and experiences to try out as well as tips on how to make the most out of your virtual reality experience. These blogs have a wealth of information on all things VR and have become go-to sources for those looking to learn more about this exciting technology. As virtual reality continues to grow in popularity, these blogs will undoubtedly continue to provide valuable insights into this ever-changing field.Following VR blogs is essential for enthusiasts, developers, and businesses alike.

              Enthusiasts can stay up-to-date with the latest VR trends, news, and product releases. They can also learn about the best VR games and experiences available on the market. For developers, keeping up with VR blogs is crucial to stay in touch with new technologies and industry changes that may impact their work. They can learn about new software updates, hardware advancements, and tips for developing immersive experiences.

              Businesses can also benefit greatly from following VR blogs as they can gain valuable insights into consumer trends and preferences in this rapidly evolving field. They can stay informed about new business opportunities related to virtual reality like training simulations or interactive marketing campaigns. Additionally, following top VR blogs provides a platform for networking within the industry. It allows enthusiasts, developers, and businesses to connect with each other and share their ideas or collaborate on projects.

              Overall, staying connected through top VR blogs is an essential part of being involved in this exciting industry. There are a plethora of VR blogs out there, but not all of them offer the same quality of content. For those who want to stay up-to-date on the latest VR technology and trends, it’s important to find blogs that offer in-depth reviews, news, and insights.
            </p>
            <div class="relative aspect-video overflow-hidden rounded-3xl">
              <video class="w-full opacity-100" src='../assets/write_us_video.mp4' autoPlay muted loop></video>
            </div>
            <p className="text-justify py-10 leading-loose">

              Virtual reality (VR) has become increasingly popular in recent years, and for good reason. It offers an immersive experience that allows users to feel like they are a part of another world. For those who are new to VR, it can be overwhelming and confusing. However, there are many blogs that offer an introduction to the world of virtual reality. These blogs cover everything from the basics of VR technology to the different types of headsets and controllers available.

              They also provide information on the best VR games and experiences to try out as well as tips on how to make the most out of your virtual reality experience. These blogs have a wealth of information on all things VR and have become go-to sources for those looking to learn more about this exciting technology. As virtual reality continues to grow in popularity, these blogs will undoubtedly continue to provide valuable insights into this ever-changing field.Following VR blogs is essential for enthusiasts, developers, and businesses alike.

              Enthusiasts can stay up-to-date with the latest VR trends, news, and product releases. They can also learn about the best VR games and experiences available on the market. For developers, keeping up with VR blogs is crucial to stay in touch with new technologies and industry changes that may impact their work. They can learn about new software updates, hardware advancements, and tips for developing immersive experiences.

              Businesses can also benefit greatly from following VR blogs as they can gain valuable insights into consumer trends and preferences in this rapidly evolving field. They can stay informed about new business opportunities related to virtual reality like training simulations or interactive marketing campaigns. Additionally, following top VR blogs provides a platform for networking within the industry. It allows enthusiasts, developers, and businesses to connect with each other and share their ideas or collaborate on projects.

              Overall, staying connected through top VR blogs is an essential part of being involved in this exciting industry. There are a plethora of VR blogs out there, but not all of them offer the same quality of content. For those who want to stay up-to-date on the latest VR technology and trends, it’s important to find blogs that offer in-depth reviews, news, and insights.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* <img data-aos="fade-left" data-aos-delay="500"   src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" /> */}
              <div class="relative aspect-video overflow-hidden rounded-3xl">
                <video class="w-full opacity-100" src='../assets/write_us_video.mp4' autoPlay muted loop></video>
              </div>
              <p className="text-justify leading-loose ">

                Virtual reality (VR) has become increasingly popular in recent years, and for good reason. It offers an immersive experience that allows users to feel like they are a part of another world. For those who are new to VR, it can be overwhelming and confusing. However, there are many blogs that offer an introduction to the world of virtual reality. These blogs cover everything from the basics of VR technology to the different types of headsets and controllers available.

                They also provide information on the best VR games and experiences to try out as well as tips on how to make the most out of your virtual reality experience. These blogs have a wealth of information on all things VR and have become go-to sources for those looking to learn more about this exciting technology. As virtual reality continues to grow in popularity, these blogs will undoubtedly continue to provide valuable insights into this ever-changing field.Following VR blogs is essential for enthusiasts, developers, and businesses alike.
              </p>
            </div>
            <p className="text-justify leading-loose py-10">

              Virtual reality (VR) has become increasingly popular in recent years, and for good reason. It offers an immersive experience that allows users to feel like they are a part of another world. For those who are new to VR, it can be overwhelming and confusing. However, there are many blogs that offer an introduction to the world of virtual reality. These blogs cover everything from the basics of VR technology to the different types of headsets and controllers available.

              They also provide information on the best VR games and experiences to try out as well as tips on how to make the most out of your virtual reality experience. These blogs have a wealth of information on all things VR and have become go-to sources for those looking to learn more about this exciting technology. As virtual reality continues to grow in popularity, these blogs will undoubtedly continue to provide valuable insights into this ever-changing field.Following VR blogs is essential for enthusiasts, developers, and businesses alike.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">

              {/* <img data-aos="fade-left" data-aos-delay="500"   src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" /> */}

              <p className="text-justify leading-loose">

                Virtual reality (VR) has become increasingly popular in recent years, and for good reason. It offers an immersive experience that allows users to feel like they are a part of another world. For those who are new to VR, it can be overwhelming and confusing. However, there are many blogs that offer an introduction to the world of virtual reality. These blogs cover everything from the basics of VR technology to the different types of headsets and controllers available.

                They also provide information on the best VR games and experiences to try out as well as tips on how to make the most out of your virtual reality experience. These blogs have a wealth of information on all things VR and have become go-to sources for those looking to learn more about this exciting technology. As virtual reality continues to grow in popularity, these blogs will undoubtedly continue to provide valuable insights into this ever-changing field.Following VR blogs is essential for enthusiasts, developers, and businesses alike.
              </p>
              <div class="relative aspect-video overflow-hidden rounded-3xl">
                <img data-aos="fade-left" data-aos-delay="500" src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" />
              </div>
            </div>
            <LatestBlogCarousel/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
