"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

import React, { useRef } from "react";

import { Navigation } from "swiper/modules";

import CardProduct from "./CardProduct";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function SliderOfferDetailes() {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="mainslider_categries">
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        loop={true}
        
        // navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="mySwiper h-[520px]"
      >
        <SwiperSlide>
          {" "}
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>

        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>

        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
      </Swiper>
      <div className="relative w-full -top-72">
        <button className="absolute -left-14 bg-[#D9D9D9] p-2 rounded-full" onClick={handlePrevClick}><FaAngleLeft />
        </button>
        <button className="absolute  -right-14 bg-[#D9D9D9] p-2 rounded-full" onClick={handleNextClick}><FaAngleRight />
        </button>
      </div>
    </div>
  );
}
