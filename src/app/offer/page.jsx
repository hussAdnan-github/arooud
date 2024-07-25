import Header from "@/components/Header/Header";
import Image from "next/image";
import details from "../../../public/img/details.svg";
import Offer from "@/components/Offer";
import HeaderText from "@/components/HeaderText";
import SlideOffer from "@/components/SlideOffer";
export default function page() {
  return (
    <div>
      <Header />
      <div className="main_offer">
        {/* <Header /> */}
        <div className="offer_mainImg ">
          <Image src={details} className=" w-full" height={450} />
        </div>
        <div className="mt-40 md:mt-0">
          <Offer />
        </div>
       <div className="bg-[#F4F4F4] pt-16 pb-36">
       <div className="container m-auto">
          <div className="md:container">
            <div className="  mb-16">
              <HeaderText titel={"عروض محلات صدى الرنين"} />
            </div>
            <div>
              <SlideOffer />
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}
