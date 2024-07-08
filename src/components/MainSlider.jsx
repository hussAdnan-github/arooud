'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import mainSlider from '../../public/img/mainSlider.svg'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function MainSlider() {
  return (
 
        <>
          <Swiper
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper main_slider"
          >
            <SwiperSlide>
              <Image src={mainSlider} alt='Image Main Carsoule' />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={mainSlider} alt='Image Main Carsoule' />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={mainSlider} alt='Image Main Carsoule' />
            </SwiperSlide>
           
          </Swiper>
        </>
    
  )
}
