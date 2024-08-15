"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// import React, { useRef } from "react";

import { Navigation } from "swiper/modules";

import CardProduct from "./CardProduct";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";
const fetchCatefories = async () => {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/offers/offers/"
  );
  return await response.json();
};

export default function SliderOfferDetailes() {
  // const swiperRef = useRef(null);

  // const handlePrevClick = () => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     swiperRef.current.swiper.slidePrev();
  //   }
  // };

  // const handleNextClick = () => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     swiperRef.current.swiper.slideNext();
  //   }
  // };
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["offers"],
    queryFn: fetchCatefories,
    // staleTime :5 * 1000 ,
    refetchOnMount: true,
    // refetchOnWindowFocus:true   whene add in database
  });

  if (isLoading) {
    return (
      <div className="flex gap-4 justify-center">
        <Skeleton className="h-[408px] w-[300px] rounded-xl border bg-black" />
        <Skeleton className="h-[408px] w-[300px] rounded-xl border bg-black" />
        <Skeleton className="h-[408px] w-[300px] rounded-xl border bg-black" />
        <Skeleton className="h-[408px] w-[300px] rounded-xl border bg-black" />
      </div>
    );
  }
  if (error) {
    return <div className="text-red-400">{error.message}</div>;
  }
  if (isSuccess) {
    console.log(data["result"]);
  }
  return (
    <div className="mainslider_categries">
      <Swiper
        // ref={swiperRef}
        spaceBetween={10}
        loop={true}
        // navigation={true}
        // modules={[Navigation]}
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
        {data["result"].map((item) => (
          <SwiperSlide key={item.id}>
            <CardProduct data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="relative w-full -top-72">
        <button
          className=" btn-prev absolute -left-14 bg-[#D9D9D9] p-2 rounded-full"
          onClick={handlePrevClick}
        >
          <FaAngleLeft />
        </button>
        <button
          className="btn-next absolute  -right-14 bg-[#D9D9D9] p-2 rounded-full"
          onClick={handleNextClick}
        >
          <FaAngleRight />
        </button>
      </div> */}
    </div>
  );
}
