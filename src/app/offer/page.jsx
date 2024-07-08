import Header from "@/components/Header/Header";
import Image from "next/image";
import details from '../../../public/img/details.svg'
import Offer from "@/components/Offer";
import HeaderText from "@/components/HeaderText";
import SliderCard from "@/components/SliderCard";
import SlideOffer from "@/components/SlideOffer";
export default function page() {
  return (
    <div className="main_offer">
    <Header />
    <div className="offer_mainImg">
        <Image src={details} className="w-full" height={450}/>
    </div>
    <div>
        <Offer />
    </div>
<div className="container m-auto">
<div className="  mb-16">
    <HeaderText titel={"عروض محلات صدى الرنين"}/> 
  </div>
  <div className="container">
     <div className="mt-44 mb-16">
    <HeaderText titel={"عروض محلات صدى الرنين"}/> 
  </div>
     <SlideOffer />
     </div>
</div>
    </div>
  )
}
