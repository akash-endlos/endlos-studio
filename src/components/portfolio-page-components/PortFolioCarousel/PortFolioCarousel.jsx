import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper/core";
import { Autoplay } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Navigation,Autoplay]);

export default function PortFolioCarousel() {
  const [currentSlide, setCurrentSlide] = useState(null);
  const videoRefs = useRef([]);

  const handleSlideMouseEnter = (index) => {
    setCurrentSlide(index);
    videoRefs.current[index].play();
  };

  const handleSlideMouseLeave = (index) => {
    setCurrentSlide(null);
    videoRefs.current[index].pause();
    videoRefs.current[index].currentTime = 0;
  };

  const CarouselSection = [
    {
      title:
        "Endlos Innovation helps you to automate production to be more flexible and adapted to the requirements of your organization.",
      src: "/assets/archviz_intractive_1.mp4",
      link: "",
    },
    {
      title:
        "Endlos Innovation helps you to automate production to be more flexible and adapted to the requirements of your organization.",
      src: "/assets/archviz_intractive_2.mp4",
      link: "",
    },
    {
      title:
        "Endlos Innovation helps you to automate production to be more flexible and adapted to the requirements of your organization.",
      src: "/assets/archviz_intractive_3.mp4",
      link: "",
    },
    {
      title:
        "Endlos Innovation helps you to automate production to be more flexible and adapted to the requirements of your organization.",
      src: "/assets/archviz_intractive_4.mp4",
      link: "",
    },
    {
      title:
        "Endlos Innovation helps you to automate production to be more flexible and adapted to the requirements of your organization.",
      src: "/assets/archviz_intractive_5.mp4",
      link: "",
    },
  ];

  return (
    <div className=" bg-[#111111]">
      <Swiper
        loop={true}
        effect={"coverflow"}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          scale: 2,
          slideShadows: false,
        }}
        pagination={false}
        navigation={true}
        className="mySwiper"
      >
        {CarouselSection.map((item,index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => handleSlideMouseEnter(index)}
            onMouseLeave={() => handleSlideMouseLeave(index)}
          >
            <video
              src={item.src}
              ref={(ref) => (videoRefs.current[index] = ref)}
              autoPlay={index === currentSlide}
              muted
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
