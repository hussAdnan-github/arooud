// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import CardProduct from "./CardProduct";

export default function SlideOffer() {
  return (
    <div className="slide_offer">
      <Swiper
        spaceBetween={10}
        loop={true}
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
        className="mySwiper slider_categries h-[520px]"
      >
        <SwiperSlide>
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
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
