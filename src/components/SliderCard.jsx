"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import CardProduct from "./CardProduct";
import Link from "next/link";

export default function SliderCard() {
  return (
    <>
      <Swiper
        loop={true}
        // slidesPerView={1}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        grabCursor={true}
        modules={[Autoplay]}
        className="mySwiper h-[520px]"
      >
        <SwiperSlide>
          <Link href={"/offer"}>
            <CardProduct />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/offer"}>
            <CardProduct />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/offer"}>
            <CardProduct />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/offer"}>
            <CardProduct />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/offer"}>
            <CardProduct />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/offer"}>
            <CardProduct />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
