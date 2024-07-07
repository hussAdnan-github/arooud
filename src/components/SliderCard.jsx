'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import CardProduct from './CardProduct';

export default function SliderCard() {
    return (
        <>
          <Swiper
            loop={true}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            // grabCursor={true}    
            className="mySwiper"
          >
            <SwiperSlide><CardProduct /></SwiperSlide>
            <SwiperSlide><CardProduct /></SwiperSlide>
            <SwiperSlide><CardProduct /></SwiperSlide>
            <SwiperSlide><CardProduct /></SwiperSlide>
            <SwiperSlide><CardProduct /></SwiperSlide>
            <SwiperSlide><CardProduct /></SwiperSlide>
          </Swiper>
        </>
      );
}
