"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CardCoupons from "./CardCoupons";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";

const fetchCoupons = async () => {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/offers/globalcoupon/"
  );
  return await response.json();
};
export default function GlobalCoupon() {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["GlobalCoupon"],
    queryFn: fetchCoupons,
  });

  if (isLoading) {
    return (
      <div className="flex gap-4 justify-center">
        <Skeleton className="h-[380px] w-[600px] rounded-xl border bg-black" />
        <Skeleton className="h-[380px] w-[600px] rounded-xl border bg-black" />
      </div>
    );
  }
  if (isError) {
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
        spaceBetween={10}
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
        modules={[Autoplay]}
        className="mySwiper slide_coupons h-[620px] xl:h-[500px]"
      >
        {data["result"].map((item) => (
          <SwiperSlide key={item.id}>
            <CardCoupons data={item} url={`/globalcoupon/${item.id}`}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
