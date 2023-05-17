import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import { Autoplay, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

export default function LatestBlogCarousel() {
    return (
        <>
            <div className="text-4xl text-white py-10 font-bold">
                Latest Blogs
            </div>
            <Swiper
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
                slidesPerView={3}
                spaceBetween={30}
                modules={[Pagination, Navigation]}
                navigation={true}
                pagination={false}
                className="mySwiper"
            >

                <SwiperSlide>  <div className="relative">
                    <div className="card cursor-pointer">
                        <img src="/assets/home_blog_1.jpg" className="w-full h-52" alt="example image" />
                       
                            <span className="text-xl bg-opacity-50 font-bold absolute bottom-2 left-2">Make Our World Beautiful With Virtual Reality</span>
                        </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className="relative">
                    <div className="card cursor-pointer">
                        <img src="/assets/home_blog_1.jpg" className="w-full h-52" alt="example image" />
                       
                            <span className="text-xl bg-opacity-50 font-bold absolute bottom-2 left-2">Make Our World Beautiful With Virtual Reality</span>
                        </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className="relative">
                    <div className="card cursor-pointer">
                        <img src="/assets/home_blog_1.jpg" className="w-full h-52" alt="example image" />
                       
                            <span className="text-xl bg-opacity-50 font-bold absolute bottom-2 left-2">Make Our World Beautiful With Virtual Reality</span>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className="relative">
                    <div className="card cursor-pointer">
                        <img src="/assets/home_blog_1.jpg" className="w-full h-52" alt="example image" />
                       
                            <span className="text-xl bg-opacity-50 font-bold absolute bottom-2 left-2">Make Our World Beautiful With Virtual Reality</span>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="relative">
                    <div className="card cursor-pointer">
                        <img src="/assets/home_blog_1.jpg" className="w-full h-52" alt="example image" />
                       
                            <span className="text-xl bg-opacity-50 font-bold absolute bottom-2 left-2">Make Our World Beautiful With Virtual Reality</span>
                       
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </>
    );
}
