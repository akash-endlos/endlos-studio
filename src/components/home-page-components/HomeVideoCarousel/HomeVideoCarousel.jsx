import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0); // state to track current slide index
  const [isPlaying, setIsPlaying] = useState(false); // state to track video play/pause
  const videoRefs = useRef([]); // array of references to the video elements

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex); // update the current slide index
  };

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play(); // play the video when the user hovers over the slide
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause(); // pause the video when the user leaves the slide
      setIsPlaying(false);
    }
  };

  return (
    <div className="bg-[#111111]">
      <div className="pt-20">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 250,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
            <video src="/assets/cr2.mp4" ref={(el) => (videoRefs.current[0] = el)} />
          </SwiperSlide>
          <SwiperSlide onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
            <video src="/assets/cr3.mp4" ref={(el) => (videoRefs.current[1] = el)} />
          </SwiperSlide>
          <SwiperSlide onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
            <video src="/assets/cr4.mp4" ref={(el) => (videoRefs.current[2] = el)} />
          </SwiperSlide>
          <SwiperSlide onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)}>
            <video src="/assets/cr5.mp4" ref={(el) => (videoRefs.current[3] = el)} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
