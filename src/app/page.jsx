import HeaderLine from "@/components/HeaderLine";
import HeaderText from "@/components/HeaderText";
import MainSlider from "@/components/MainSlider";
import SliderCard from "@/components/SliderCard";
import cashBack from "../../public/img/cashBack.svg";
import Image from "next/image";
import SliderCategries from "@/components/SliderCategries";
import SliderCardCoupons from "@/components/SliderCardCoupons";
import CardAbout from "@/components/CardAbout";
import Header from "@/components/Header/Header";
import MainTitle from "@/components/MainTitle";
import ActiveButtonUser from "@/components/ActiveButtonUser";
import MainDropDown from "@/components/MainDropDown";
import Partners from "@/components/Partners";
import GlobalCoupon from "@/components/GlobalCoupon";

export default function Home() {
  return (
    <div className="home" id="home">
      <Header />
      <section className="section_0 bg-[#F8F8F8] dark:bg-socondaryDark pb-11">
        <div className="container mx-auto">
          <MainSlider />
        </div>
      </section>
      <section
        id="offer"
        className="section_1 scroll-mt-32 bg-[#F4F4F4] dark:bg-primaryDark pb-24 pt-10"
      >
        <div className="container mx-auto mt-4 ">
          <div className="">
            <HeaderText titel={"أبرز العروض المحلية"} />
          </div>

          <div className="my-20 mt-14">
            <SliderCard />
          </div>
          <div>
            <HeaderLine title={"المزيد من العروض"} />
          </div>
          <div className="mt-20">
            <HeaderText titel={"أبرز عروض المواقع الإلكترونية"} />
          </div>
          <div className="mt-20">
            <SliderCard />
          </div>

          <div className="">
            <HeaderLine title={"المزيد من العروض"} />
          </div>

          <div className="mt-20">
            <Image src={cashBack} alt="cashBack" className="w-full" />
          </div>

          <div className="mt-24">
            <SliderCategries />
          </div>
        </div>
      </section>
      <section className="section_2 bg-[#EDEEF2] dark:bg-primaryDark">
        <div className="container mx-auto">
          <div>
            <MainTitle title={"العروض والخصومات"} />
          </div>
          <div className="mt-20 flex items-center justify-end md:flex-row flex-col-reverse">
            <div className="flex mt-4 md:mt-0 ms-0 md:ms-80 md:flex-row flex-col-reverse ">
              <MainDropDown title={"المنطقة"} />
              <MainDropDown title={"محل تجاري"} />
              <MainDropDown title={"التصنيف"} />
            </div>
            <div className="flex-1 ">
              <HeaderText titel={"عروض مميزة"} />
            </div>
          </div>
          <div className="mt-14">
            <SliderCard />
          </div>
          <div>
            <HeaderLine title={"المزيد من العروض المميزة"} />
          </div>
          <div className="mt-20 ">
            <HeaderText titel={"عروض الأسبوع"} />
          </div>
          <div className="mt-14">
            <SliderCard />
          </div>
          <div>
            <HeaderLine title={"المزيد من عروض الأسبوع"} />
          </div>
          <div className="mt-14">
            <HeaderText titel={"بقية العروض"} />
          </div>
          <div className="mt-14">
            <SliderCard />
          </div>
          <div>
            <HeaderLine title={"المزيد من العروض"} />
          </div>

          <div className="relative top-20  ">
            <Image src={cashBack} alt="cashBack" className="w-full" />
          </div>
        </div>
      </section>
      <section
        id="coupons"
        className="section_3 scroll-mt-10 bg-[#FAFBFF] dark:bg-primaryDark pt-36 pb-24"
      >
        <div className="container mx-auto">
          <div className="">
            <MainTitle title={"الكوبونات والقسائم"} />
          </div>
          <div className="mt-20">
            <HeaderText titel={"كوبونات المتاجر العالمية"} />
          </div>
          <div className="mt-20">
            <GlobalCoupon />
          </div>
          <div>
            <HeaderLine title={"المزيد من كوبونات المتاجر العالمية"} />
          </div>

          <div className="mt-14">
            <HeaderText titel={"كوبونات حصرية"} />
          </div>
          <div className="mt-20">
            <SliderCardCoupons />
          </div>
          <div>
            <HeaderLine title={"المزيد من الكوبونات حصرية  "} />
          </div>
          <div className="mt-14">
            <HeaderText titel={"القسائم الشرائية"} />
          </div>
          <div className="mt-20">
            <SliderCardCoupons />
          </div>
          <div>
            <HeaderLine title={"المزيد من القسائم الشرائية "} />
          </div>
        </div>
      </section>
      <section
        id="about"
        className="section_4 scroll-mt-28 bg-[#F4F4F4] dark:bg-primaryDark pb-2"
      >
        <div className="container mx-auto">
          <div className=" mb-20 pt-12">
            <MainTitle title={"عن عــروض"} />
          </div>
          <div>
            <CardAbout />
          </div>
          <div className="my-24 text-center md:text-start btn_after relative">
            <ActiveButtonUser title={"انظم معنا"} />
          </div>
        </div>
      </section>
      <section
        id="partents"
        className="setion_5 scroll-mt-32 pt-10 bg-[#FAFBFF] dark:bg-primaryDark"
      >
        <div className="container mx-auto">
          <div className="me-0 md:me-10">
            <MainTitle title={"شركاء عروضنا "} />
          </div>
          <div className="mt-32">
            <Partners />
          </div>
          <div className="py-24 btn_before text-center md:text-end relative">
            <ActiveButtonUser title={"المزيـد"} />
          </div>
        </div>
      </section>
    </div>
  );
}
