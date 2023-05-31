import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import bg from "../../../../public/assets/img1.jpg";

const index = () => {
  return (
    <>
      <Navbar Navclass="bg-[#111111] text-white"/>
      <div className="pt-24 bg-[#111111] text-white">
        {/* <div className="relative">
          <div className="h-screen bg-cover bg-fixed" style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "450px",
          }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center">
                <p className="text-5xl font-bold text-white">Portfolio</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black flex justify-center items-center py-10 p-5">
          <div className="inset-0 flex justify-center items-center">
            <div className="text-center">
            </div>
          </div>
        </div> */}
        <div className="relative" id="archviz">
          <div className="h-screen bg-cover bg-fixed" style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "300px",
          }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-white">Archviz</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#111111] text-white">
          <div className='max-w-screen-2xl mx-auto py-10 px-5'>
            <div className='py-5'>
              <h3 className='font-bold text-2xl py-4'>Attention to Detail</h3>
              <p>Our work strategy in architecture visualization emphasizes a meticulous approach to detail. We focus on accurately representing architectural designs, materials, lighting, and spatial relationships to create realistic and immersive visualizations.</p>
            </div>
            <div className='py-5'>
              <h3 className='font-bold text-2xl py-4'>Effective Communication</h3>
              <p>We prioritize effective communication in architecture visualization. We work closely with architects, designers, and stakeholders to understand their vision and ensure that the final visualization effectively communicates the design intent to clients, investors, and the general public.
              </p>
            </div>
            <div className='py-5'>
              <h3 className='font-bold text-2xl py-4'>Interactive Elements</h3>
              <p>Our work strategy incorporates interactive elements in architecture visualization, such as virtual tours and walkthroughs. By providing interactive experiences, we enable clients to engage with the design, explore spaces, and make informed decisions about the project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="archvizinteractive">
        <div className="relative">
          <div className="h-screen bg-cover bg-fixed" style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "450px",
          }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white">Interactive Archviz</h2>
                {/* <p className="mt-4 text-lg text-white font-serif">{subtitle}</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#111111] text-white">
          <div className='max-w-screen-xl mx-auto py-10 px-5'>
            {/* <h2 className="font-bold text-2xl">Key features:</h2> */}
            <div className='py-5'>
              <h2 className='font-bold text-2xl py-4'>User-Centric Design </h2>
              <p>Our work strategy in interactive experiences focuses on user-centric design. We prioritize understanding the target audience's needs to create engaging and intuitive user experiences across various platforms, such as virtual reality (VR), augmented reality (AR), and interactive installations.</p>
            </div>
            <div className='py-5'>
              <h2 className='font-bold text-2xl py-4'>Immersive Interactivity</h2>
              <p>We strive to create immersive interactive experiences that captivate and engage users. By leveraging advanced technologies, we develop interactive applications and installations that give users a sense of presence and immersion, allowing them to participate in the experience actively.ts.
              </p>
            </div>
            <div className='py-5'>
              <h2 className='font-bold text-2xl py-4'>Iterative Development</h2>
              <p>Our work strategy in interactive experiences embraces an iterative development process. We continuously gather user feedback, conduct testing, and make improvements to ensure the final product delivers a seamless and enjoyable interactive experience.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#111111]">
          <div class="flex justify-center items-center px-10">
            <div class="w-full md:w-2/3  xl:w-full">
              <div class="rounded-3xl overflow-hidden">
                <video src='../assets/write_us_video.mp4' class="w-full h-auto" controls></video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
