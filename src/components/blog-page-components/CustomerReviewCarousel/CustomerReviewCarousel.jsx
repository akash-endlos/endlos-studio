import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { AiFillStar } from "react-icons/ai";

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
            <p className="text-xl font-serif max-w-lg py-2">
              Endlos Studio's work exceeded our expectations. Their attention to
              detail and commitment to quality made our project shine.
            </p>
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
            <p className="text-xl font-serif max-w-lg py-2">
              Working with Endlos Studio was a delight. They were responsive,
              professional, and delivered exceptional results.
            </p>
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
            <p className="text-xl font-serif max-w-lg py-2">
              The team at Endlos Studio is highly skilled and creative. They
              brought our vision to life with their innovative solutions.
            </p>
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
            <p className="text-xl font-serif max-w-lg py-2">
              Choosing Endlos Studio was one of the best decisions we made.
              Their professionalism and dedication made the entire process
              smooth and enjoyable.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
