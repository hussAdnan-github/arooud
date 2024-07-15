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
import MainDropDown from "@/components/MainDropDown";
 


export default function Home() {
  return ( 
  
<div className="home"  id="home">
<Header />
  

<div className=" mt-10" data-aos="zoom-in">
  <div className="container m-auto">
    <MainSlider />
  </div>


<div className="section_1 bg-[#F4F4F4] pb-24">
<div className="container m-auto">
 <div className="mt-44">
    <HeaderText titel={"ابرز العروض المحلية"}/> 
  </div>
  <div className="my-20 mt-14" id='offer'>
    <SliderCard />
  </div>
  <div>
    <SliderCard />
  </div>
  <div>
    <HeaderLine title={'المزيد من العروض'}/>
    </div>


<div className="">
  <Image src={cashBack} alt="cashBack"/>
</div>


  <div className="mt-24">
  <SliderCategries/>
  </div>

 
  </div> 

</div>

<div className="section_2 bg-[#EDEEF2]">
    <div className="container m-auto">
    <div className=" ">
  <MainTitle title={'العروض والخصومات'}/>
  </div>
  <div className="mt-20 flex items-center justify-end md:flex-row flex-col-reverse">
   
    <div className="flex ms-0 md:ms-80 md:flex-row flex-col-reverse " >
      <MainDropDown title={'المنطقة'}/>
      <MainDropDown title={'محل تجاري'}/>
      <MainDropDown title={'التصنيف'}/>
      
    </div>
    <div className="flex-1 ">
    <HeaderText titel={"عروض مميزة"}/> 
    </div>
  </div>
  <div className="mt-14" >
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
    </div>
</div>
  
<div  id="coupons">
<MainTitle title={'الكوبونات والقسائم'}/>

</div>
  <div className="mt-20" >
    <HeaderText titel={"كوبونات المتاجر العالمية"}/> 
  </div>
  <div className="mt-20" >
    <SliderCardCoupons/>
  </div>


<div className="mt-32 mb-20" id="about">
<MainTitle title={'عن عــروض'}/>

</div>
  <div id="about" >
    <CardAbout />
  </div>
  <div className="my-24 text-center md:text-start btn_after relative">
    <ActiveButtonUser title={'انظم معنا'}/>
  </div>
<div className="mb-20"  id="partents">
<MainTitle title={'شركاء عروضنا '}/>

</div>
  <div className="container m-auto"  >
    <Partners/>
  </div>
  <div className="my-24 btn_before text-center md:text-end relative">
    <ActiveButtonUser title={'المزيـد'}/>
  </div>
</div> 



</div>

)
}
