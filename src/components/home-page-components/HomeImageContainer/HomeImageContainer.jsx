import Image from "next/image";
import React from "react";
import bg from "../../../../public/assets/home-1-img.jpg";
const HomeImageContainer = () => {
  return (
    <div className="bg-[#111111] h-auto relative">
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "auto",
          opacity: 0.8
        }}
      >
        <div className="flex justify-end items-center py-10 " >
          <img className="opacity-100" src="/assets/home-2-img.jpg" data-aos="fade-left" data-aos-duration="2000" />
        </div>
        <p data-aos="fade-right" data-aos-duration="2000" className='flex justify-start max-w-4xl px-10 py-2 text-white font-semibold text-xl text-justify  h-auto'>Welcome to Endlos Studio, your destination for cutting-edge Unreal Engine experiences. As a passionate team of creators and innovators, we specialize in harnessing the power of Unreal Engine to bring your wildest imaginations to life.
        </p>
        <p data-aos="fade-right" data-aos-duration="2000" className='flex justify-start max-w-4xl px-10 py-2 text-white font-semibold text-xl text-justify  h-auto'>At Endlos Studio, we believe in the limitless possibilities that Unreal Engine offers. Whether you dream of immersive virtual reality environments, jaw-dropping visual effects, or captivating gameplay mechanics, our skilled artists and developers are here to make it happen.
        </p>
        <p data-aos="fade-right" data-aos-duration="2000" className='flex justify-start max-w-4xl px-10 py-2 text-white font-semibold text-xl text-justify  h-auto'>With years of experience in the industry, our talented team has honed their craft to deliver stunning visuals, seamless gameplay, and unparalleled attention to detail.
        </p>
      </div>
    </div>
  );
};

export default HomeImageContainer;
