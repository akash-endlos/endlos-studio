import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
// import { BsArrowRightCircle } from "react-icons/bs";
import styles from  '../../../styles/HomeCarousel.module.css'
const HomeCarousel = () => {
  const pagination = {
    clickable: true,
  };
   const IndustriesCarouselSection = [
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
    {
      title:
        "Endlos Innovation helps you to automate production to be more flexible and adapted to the requirements of your organization.",
      src: "/assets/3.mp4",
      link: "",
    },
    // {
    //   title:
    //     "Endlos Innovation helps you to automate production to be more flexible and adapted to the requirements of your organization.",
    //   src: "/assets/1.mp4",
    //   link: "",
    // },
  ];
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {IndustriesCarouselSection.map((item,index) => (
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