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

  return (
    <div className="pt-20 bg-[#111111]">
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
        {[2, 3, 4, 5, 5, 5, 5].map((index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => handleSlideMouseEnter(index)}
            onMouseLeave={() => handleSlideMouseLeave(index)}
          >
            <video
              src={`/assets/cr${index}.mp4`}
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
