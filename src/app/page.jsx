import CardIcon from "@/components/CardIcon";
import CardProduct from "@/components/CardProduct";
import HeaderLine from "@/components/HeaderLine";
import HeaderText from "@/components/HeaderText";
import Hero from "@/components/Hero";
import MainSlider from "@/components/MainSlider";
import SliderCard from "@/components/SliderCard";
import cashBack from '../../public/img/cashBack.svg'

import Image from "next/image";
import SliderCategries from "@/components/SliderCategries";
import Dropdown from "@/components/Dropdown";
import NavbarSearch from "@/components/Header/NavbarSearch";
import SliderCardCoupons from "@/components/SliderCardCoupons";
import CardAbout from "@/components/CardAbout";
import Partners from "@/components/partners";
import Header from "@/components/Header/Header";


export default function Home() {
  return ( 
  
<div className="home">
<Header />

<div className="container m-auto mt-24  ">
  <div className="">
    <MainSlider />
  </div>
  <div className="mt-32">
    <HeaderText titel={"ابرز العروض المحلية"}/> 
  </div>
  <div>
    <SliderCard />
  </div>
  <div><HeaderLine/></div>
  <div>
    <SliderCard />
  </div>
  <div><HeaderLine title={'المزيد من العروض'}/></div>
<div className="mb-32">
  <Image src={cashBack} alt="cashBack"/>
</div>
  <div>
  <SliderCategries/>
  </div>
  <div className="text-end my-28">
    <h1 className="text-5xl font-bold">
    العروض والخصومات
    </h1>
  </div>
  <div className="mt-32">
    <HeaderText titel={"عروض مميزة"}/> 
  </div>
  <div>
    <SliderCard />
  </div>
  <div><HeaderLine title={'المزيد من العروض المميزة'}/></div>
  <div className="mt-32">
    <HeaderText titel={"عروض الأسبوع"}/> 
  </div>
  <div>
    <SliderCard />
  </div>
  <div><HeaderLine title={'المزيد من عروض الأسبوع'}/></div>
  <div className="mt-32">
    <HeaderText titel={"بقية عروض"}/> 
  </div>
  <div>
    <SliderCard />
  </div>
  <div><HeaderLine title={'المزيد من عروض المميزة'}/></div>
  <div className="mb-32">
  <Image src={cashBack} alt="cashBack"/>
</div>
<div className="text-end my-28">
    <h1 className="text-5xl font-bold">
    الكوبونات والقسائم
    </h1>
  </div>
  <div className="mt-32">
    <HeaderText titel={"كوبونات المتاجر العالمية"}/> 
  </div>
  <div className="mt-24">
    <SliderCardCoupons/>
  </div>
  <div className="text-end my-28">
    <h1 className="text-5xl font-bold">
     عن عــروض  
    </h1>
  </div>
  <div>
    <CardAbout />
  </div>
  <div className="text-end my-28">
    <h1 className="text-5xl font-bold">
    شركاء عروضنا 
    </h1>
  </div>
  <div className="container m-auto">
    <Partners/>
  </div>
</div> 
</div>
)
}
