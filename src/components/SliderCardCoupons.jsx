'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
 
import CardCoupons from './CardCoupons';
import Link from 'next/link';

export default function SliderCardCoupons() {
    return (
        <>
          <Swiper
            loop={true}
            // slidesPerView={'2'}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={5}   
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
            }}
            grabCursor={true}    

            modules={[Autoplay]}
            className="mySwiper slide_coupons md:h-[420px]"
          >
            <SwiperSlide><Link href={'/coupons'}><CardCoupons /></Link></SwiperSlide>
            <SwiperSlide><Link href={'/coupons'}><CardCoupons /></Link></SwiperSlide>
            <SwiperSlide><Link href={'/coupons'}><CardCoupons /></Link></SwiperSlide>
            <SwiperSlide><Link href={'/coupons'}><CardCoupons /></Link></SwiperSlide>


          </Swiper>
        </>
      );
}
