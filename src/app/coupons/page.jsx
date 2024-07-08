import Header from "@/components/Header/Header";
import Image from "next/image";
import details from '../../../public/img/details.svg'
import MainCoupons from "@/components/MainCoupons";

export default function page() {
  return (
    <div className="coupons">
           <Header />
    <div className="offer_mainImg">
        <Image src={details} className="w-full" height={450}/>
    </div>
    <div >
        <MainCoupons/>
    </div>
    </div>
  )
}
