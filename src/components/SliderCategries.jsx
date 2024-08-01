"use client";
import CardIconImg from "../../public/img/cardicon.svg";
import market from "../../public/img/mrket.svg";
import hotel from "../../public/img/hotel.svg";
import world from "../../public/img/world.svg";
import music from "../../public/img/music.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css/navigation';

// Import Swiper styles

import { Navigation } from "swiper/modules";

import CardIcon from "./CardIcon";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function SliderCategries() {
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
    <div className="mainslider_categries ms-8">
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
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        className="mySwiper slider_categries "
      >
        <SwiperSlide>
          {" "}
          <CardIcon title={"الجمال والعافية"} img={CardIconImg} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CardIcon title={"الترفيه"} img={music} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CardIcon title={"التسوق"} img={market} />
        </SwiperSlide>
        <SwiperSlide>
          <CardIcon title={"السفر والسياحة"} img={world} />
        </SwiperSlide>

        <SwiperSlide>
          <CardIcon title={"الضيافة"} img={hotel} />
        </SwiperSlide>

        <SwiperSlide>
          <CardIcon title={"الضيافة"} img={hotel} />
        </SwiperSlide>
      </Swiper>
      <div className="relative w-full -top-28">
        <button
          className="btn-prev absolute -left-14 bg-[#D9D9D9] p-2 rounded-full"
          onClick={handlePrevClick}
        >
          <FaAngleLeft />
        </button>
        <button
          className="btn-next absolute  -right-10 bg-[#D9D9D9] p-2 rounded-full"
          onClick={handleNextClick}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
