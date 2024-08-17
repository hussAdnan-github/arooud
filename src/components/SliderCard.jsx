"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CardProduct from "./CardProduct";

import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";

const fetchCatefories = async () => {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/offers/offers/"
  );
  return await response.json();
};

export default function SliderCard() {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["offer"],
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
    // console.log(data["result"]);
  }
  return (
    <>
      <Swiper
        loop={true}
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
        {data["result"].map((item) => (
          <SwiperSlide key={item.id}>
            <CardProduct data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
