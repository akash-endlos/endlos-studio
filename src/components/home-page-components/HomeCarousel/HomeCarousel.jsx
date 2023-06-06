import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from  '../../../styles/HomeCarousel.module.css'
const HomeCarousel = () => {
   const CarouselSection = [
    {
      title:
        "Endlos Innovation helps you to automate production to be more flexible and adapted to the requirements of your organization.",
      src: "/assets/1.mp4",
      link: "",
    },
    {
      title:
        "Endlos Innovation helps you to automate production to be more flexible and adapted to the requirements of your organization.",
      src: "/assets/2.mp4",
      link: "",
    },
  ];
  return (
    <>
      <Swiper
        autoplay={{
          delay: 14000,
          disableOnInteraction: false,
        }}
        pagination={false}
        loop={true}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {CarouselSection.map((item,index) => (
         <SwiperSlide key={index}>
       <div className="relative">
  <video src={item.src} autoPlay loop muted className={`${styles.videocontainer}  `} />
  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start gap-4 justify-center px-5 bg-opacity-60 bg-black ">
    <p className="text-white xl:text-5xl md:text-xl max-w-screen-md px-5 font-extrabold">Shaping Digital Realities for</p>
    <span className="text-white xl:text-5xl md:text-xl max-w-screen-md px-5 font-extrabold">Endless Possibilities</span>
    <p className="text-white xl:text-2xl md:text-xl max-w-screen-md px-5 font-extrabold leading-10">Welcome to Endlos Studio, a leading creative powerhouse specializing in harnessing the full potential of Unreal Engine.</p>
    <div className="px-5"><button className="px-5 py-3 rounded-lg font-semibold border border-transparent bg-[#111111] text-white hover:bg-white hover:text-black">Contact Us</button></div>
  </div>
</div>

       </SwiperSlide>
       
        ))}
      </Swiper>
    </>
  );
};

export default HomeCarousel;