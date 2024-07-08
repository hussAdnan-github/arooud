import HeaderLine from "@/components/HeaderLine";
import HeaderText from "@/components/HeaderText";
import MainSlider from "@/components/MainSlider";
import SliderCard from "@/components/SliderCard";
import cashBack from '../../public/img/cashBack.svg'
import Image from "next/image";
import SliderCategries from "@/components/SliderCategries";
import SliderCardCoupons from "@/components/SliderCardCoupons";
import CardAbout from "@/components/CardAbout";
import Header from "@/components/Header/Header";
import MainTitle from "@/components/MainTitle";
import ActiveButtonUser from "@/components/ActiveButtonUser";
import Partners from "@/components/Partners";
 


export default function Home() {
  return ( 
  
<div className="home">
<Header />

<div className="container m-auto mt-24  ">
  <div className="">
    <MainSlider />
  </div>
  <div className="mt-32 mb-16">
    <HeaderText titel={"ابرز العروض المحلية"}/> 
  </div>
  <div className="my-20">
    <SliderCard />
  </div>
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
  <div className="mt-28">
  <MainTitle title={'العروض والخصومات'}/>
  </div>
  <div className="mt-20 mb-16">
    <HeaderText titel={"عروض مميزة"}/> 
  </div>
  <div>
    <SliderCard />
  </div>
  <div><HeaderLine title={'المزيد من العروض المميزة'}/></div>
  <div className="mt-32 mb-16">
    <HeaderText titel={"عروض الأسبوع"}/> 
  </div>
  <div>
    <SliderCard />
  </div>
  <div><HeaderLine title={'المزيد من عروض الأسبوع'}/></div>
  <div className="mt-32 mb-16">
    <HeaderText titel={"بقية عروض"}/> 
  </div>
  <div>
    <SliderCard />
  </div>
  <div><HeaderLine title={'المزيد من عروض المميزة'}/></div>
  <div className="mb-32">
  <Image src={cashBack} alt="cashBack"/>
</div>
<div>
<MainTitle title={'الكوبونات والقسائم'}/>

</div>
  <div className="mt-20">
    <HeaderText titel={"كوبونات المتاجر العالمية"}/> 
  </div>
  <div className="mt-20">
    <SliderCardCoupons/>
  </div>
<div className="mt-32 mb-20">
<MainTitle title={'عن عــروض'}/>

</div>
  <div id="about" >
    <CardAbout />
  </div>
  <div className="my-24 btn_after relative">
    <ActiveButtonUser title={'انظم معنا'}/>
  </div>
<div className="mb-20">
<MainTitle title={'شركاء عروضنا '}/>

</div>
  <div className="container m-auto">
    <Partners/>
  </div>
  <div className="my-24 btn_before text-end relative">
    <ActiveButtonUser title={'المزيـد'}/>
  </div>
</div> 





</div>
)
}
