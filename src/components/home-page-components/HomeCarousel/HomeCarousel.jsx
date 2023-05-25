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
            <video
              src={item.src}
              className={styles.videocontainer}
              autoPlay
              loop
              muted
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeCarousel;