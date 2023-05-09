
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";



// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow, Pagination
} from 'swiper/core';
import { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


export default function HomeVideoCarousel() {



  return (
    <>
      <Swiper loop={true} effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={1.5} coverflowEffect={{
        "rotate": 0,
        "stretch": 0,
        "depth": 200,
        "modifier": 1,
        "scale": 2,
        "slideShadows": false
      }} pagination={true} navigation={true} className="mySwiper">
       <SwiperSlide >
            <video src="/assets/cr2.mp4" />
          </SwiperSlide>
          <SwiperSlide >
            <video src="/assets/cr3.mp4" />
          </SwiperSlide>
          <SwiperSlide >
            <video src="/assets/cr4.mp4" />
          </SwiperSlide>
          <SwiperSlide >
            <video src="/assets/cr5.mp4" />
          </SwiperSlide>
      </Swiper>
    </>
  )
}