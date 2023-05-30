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
           <video src={item.src} autoPlay loop muted  className={styles.videocontainer} />
           <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-5 py-16">
             <p className="text-white xl:text-5xl md:text-xl shadow-2xl rounded-lg  font-bold">Endlos Possibilities</p>
           </div>
         </div>
       </SwiperSlide>
       
        ))}
      </Swiper>
    </>
  );
};

export default HomeCarousel;