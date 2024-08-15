import Header from "@/components/Header/Header";
import Image from "next/image";
import details from "../../../../../../public/img/details.svg";
import GlobalCoupons from "@/components/GlobalCoupons";

export default async function page({ params }) {
  const response = await fetch(
    `https://offers.pythonanywhere.com/v1/api/offers/globalcoupon/${params.globalcouponid}`,
    {
      cache: "no-store",
    }
  );
  const coupons = await response.json();

  return (
    <div>
      <Header />
      <div className="coupons">
        {/* <Header /> */}
        <div className="offer_mainImg">
          <Image
            src={details}
            className="w-full"
            height={450}
            alt="خلفية صفحة الكوبون"
          />
        </div>
        <div>
          <GlobalCoupons data={coupons} />
        </div>
      </div>
    </div>
  );
}
