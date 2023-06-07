import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function HomeVideoCarousel() {
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
      src: "/assets/Color Matte_1.mp4",
      link: "",
    },
    {
      title:
        "Endlos Innovation helps you to automate production to be more flexible and adapted to the requirements of your organization.",
      src: "/assets/Color Matte_2.mp4",
      link: "",
    },
    {
      title:
        "Endlos Innovation helps you to automate production to be more flexible and adapted to the requirements of your organization.",
      src: "/assets/Color Matte_3.mp4",
      link: "",
    },
    {
      title:
        "Endlos Innovation helps you to automate production to be more flexible and adapted to the requirements of your organization.",
      src: "/assets/Color Matte_4.mp4",
      link: "",
    },
    {
      title:
        "Endlos Innovation helps you to automate production to be more flexible and adapted to the requirements of your organization.",
      src: "/assets/Color Matte_5.mp4",
      link: "",
    },
  ];
  return (
    <div className="bg-[#111111]">
      <div className="bg-[#111111] flex justify-center items-center py-16 p-5 border-t-2 border-gray-900">
            <div className="inset-0 flex justify-center items-center">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white">
                Our works
                </h2>
              </div>
            </div>
          </div>
      <Swiper
        loop={true}
        effect={"coverflow"}
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
             className="w-full h-[450px]"
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
