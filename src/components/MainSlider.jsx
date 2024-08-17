"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
const fetchCatefories = async () => {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/places/advertising/"
  );
  return await response.json();
};

export default function MainSlider() {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["advertising"],
    queryFn: fetchCatefories,
    // staleTime :5 * 1000 ,
    refetchOnMount: true,
    // refetchOnWindowFocus:true   whene add in database
  });

  if (isLoading) {
    return (
      <div className="flex gap-4 justify-center">
        <Skeleton className="h-[408px] w-full rounded-xl border bg-black" />
      </div>
    );
  }
  if (error) {
    return <div className="text-red-400">{error.message}</div>;
  }
  if (isSuccess) {
    // console.log(data);
  }
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
        modules={[Autoplay, Navigation]}
        className="mySwiper main_slider"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={item.urls_ar}>
              <Image
                className="w-full h-[452px] rounded-2xl"
                src={item.image}
                width={300}
                height={100}
                alt={item.name_ar}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
