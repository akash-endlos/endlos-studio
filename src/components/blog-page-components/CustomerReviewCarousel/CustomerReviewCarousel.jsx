import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { AiFillStar } from 'react-icons/ai'

export default function CustomerReviewCarousel() {
  return (
    <div className="text-white py-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={false}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="max-w-5xl mx-auto"
      >
          <SwiperSlide className="text-center max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h1 className="py-5 text-2xl font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className="text-xl font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique temporibus nam!</p>
      </div>
    </SwiperSlide>
    <SwiperSlide className="text-center max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h1 className="py-5 text-2xl font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className="text-xl font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique temporibus nam!</p>
      </div>
    </SwiperSlide>
    <SwiperSlide className="text-center max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h1 className="py-5 text-2xl font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className="text-xl font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique temporibus nam!</p>
      </div>
    </SwiperSlide>
    <SwiperSlide className="text-center max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h1 className="py-5 text-2xl font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className="text-xl font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique temporibus nam!</p>
      </div>
    </SwiperSlide>
      </Swiper>
    </div>
  );
}
