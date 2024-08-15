import Header from "@/components/Header/Header";
import Image from "next/image";
import details from "../../../../../public/img/details.svg";
import Offer from "@/components/Offer";
import SliderOfferDetailes from "@/components/SliderOfferDetailes";
import HeaderText from "@/components/HeaderText";
export default async function page({ params }) {
  const response = await fetch(
    `https://offers.pythonanywhere.com/v1/api/offers/offers/${params.offerid}`,
    {
      cache: "no-store",
    }
  );
  const offer = await response.json();
  return (
    <div>
      <Header />
      <div className="main_offer">
        {/* <Header /> */}
        <div className="offer_mainImg ">
          <Image src={details} className=" w-full" height={450} alt=""/>
        </div>
        <div className="mt-40 md:mt-0">
          <Offer data={offer} />
        </div>
        <div className="bg-[#F4F4F4] dark:bg-primaryDark pt-16 pb-36">
          <div className="container m-auto">
            <div className="md:container">
              <div className="  mb-16">
                <HeaderText titel={"عروض محلات صدى الرنين"} />
              </div>
              <div>
                {/* <SlideOffer /> */}
                <SliderOfferDetailes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
