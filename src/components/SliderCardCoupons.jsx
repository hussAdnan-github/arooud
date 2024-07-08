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
import CardCoupons from './CardCoupons';
import Link from 'next/link';

export default function SliderCardCoupons() {
    return (
        <>
          <Swiper
            loop={true}
            // slidesPerView={1}
            centeredSlides={true}
            // spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            // grabCursor={true}    
            className="mySwiper"
          >
            <SwiperSlide><Link href={'/coupons'}><CardCoupons /></Link></SwiperSlide>
            <SwiperSlide><Link href={'/coupons'}><CardCoupons /></Link></SwiperSlide>
            <SwiperSlide><Link href={'/coupons'}><CardCoupons /></Link></SwiperSlide>
            <SwiperSlide><Link href={'/coupons'}><CardCoupons /></Link></SwiperSlide>


          </Swiper>
        </>
      );
}
