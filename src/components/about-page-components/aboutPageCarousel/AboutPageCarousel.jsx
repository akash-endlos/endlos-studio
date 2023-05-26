import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import { Autoplay, Navigation } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

export default function AboutPageCarousel() {
    return (
        <div className="bg-[#111111]">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
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
                navigation={false}
                className="mySwiper"
            >
                <SwiperSlide>
                    <video src="/assets/cr2.mp4" />
                </SwiperSlide>
                <SwiperSlide>
                    <video src="/assets/cr3.mp4" />
                </SwiperSlide>
                <SwiperSlide>
                    <video src="/assets/cr4.mp4" />
                </SwiperSlide>
                <SwiperSlide>
                    <video src="/assets/cr5.mp4" />
                </SwiperSlide>
                <SwiperSlide>
                    <video src="/assets/cr5.mp4" />
                </SwiperSlide>
                <SwiperSlide>
                    <video src="/assets/cr5.mp4" />
                </SwiperSlide>
                <SwiperSlide>
                    <video src="/assets/cr5.mp4" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
