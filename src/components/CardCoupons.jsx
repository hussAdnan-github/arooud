import Image from "next/image";
import Coupons from "../../public/img/Coupons.svg";
import numcoupons from "../../public/img/numcoupons.svg";
import cardSADcopons from "../../public/img/cardSADcopons.svg";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimerSharp } from "react-icons/io5";

export default function CardCoupons() {
  return (
    <div className="card_coupons ">
      <div className="overflow-hidden  flex flex-col max-w-[595px] items-center bg-whit rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full h-[186px] p-1 bg-[#F4F4F4]">
          <Image
            className=" object-fill hover:scale-125 transition ease-in-out  delay-0 hover:-translate-y-1 duration-300 rounded-t-lg w-full h-full  "
            src={Coupons}
            alt="image Coupons"
          />
        </div>
        <div className="flex flex-col-reverse md:flex-row mt-2 w-full md:px-2 px-1 ps-2 md:ps-8 gap-0 md:gap-10 card_bodycoupons">
          <div className="flex flex-col items-center gap-8 lg:gap-16 xl:gap-8 mt-4">
            <div className="img_carcoupons flex  drop-shadow-md bg-[#F3F3F3] border border-[#FCFCFC] h-28 w-28 p-4 rounded-lg object-contain">
              <Image
                className=""
                src={cardSADcopons}
                alt="cardSADcopons"
                width={92}
                height={64}
              />
            </div>
            <div className=" drop-shadow-md bg-white p-1 px-2 rounded-full">
              <p className="mb-10 md:mb-0 text-xs font-medium">تفاصيل</p>
            </div>
          </div>
          <div className="title_cardcoupons flex flex-col items-end  md:border-l-2 md:border-[#C8C9CC]  md:border-dashed">
            <p className="text-gray-300 font-normal text-sm	md:text-end w-full text-center">
              جوالات
            </p>
            <h1 className="text-xl text-center font-medium	 mb-4 md:text-end">
              <span className=" font-bold text-2xl">كوبون</span> من محلات صدى
              الرنين للهواتف الذكية وجميع مستلزمات الجوال
            </h1>
            <div
              className="detials_coupons md:w-[140%] flex w-full justify-end gap-6 bg-[#F4F4F4] rounded-lg px-4 py-1 items-center"
              style={{ zIndex: "-1" }}
            >
              <div className="date_coupons">
                <h1 className=" text-gray-400 text-sm md:text-xs text-end">
                  الكوبون صالح لغاية
                </h1>
                <div className="flex items-center gap-2">
                  <p className="text-gray-400 text-sm md:text-xl">
                    20/21/2024{" "}
                  </p>{" "}
                  <span>
                    <IoTimerSharp className="text-gray-400 text-xl" />
                  </span>
                </div>
              </div>
              <div className="number_coupons">
                <div className="flex items-center gap-2">
                  <p className="text-sm md:text-xl text-gray-400 ">
                    عدد مرات الاستخدام 3
                  </p>{" "}
                  <span>
                    <Image
                      src={numcoupons}
                      alt="numcoupons"
                      width={16}
                      height={16}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="located_coupons flex items-center text-sm md:text-[16px] mt-4 mb-6">
              <p>محل صدى الرنين اليمن - حضرموت - المكلا </p>
              <IoLocationOutline className="coupons_located text-primaryColo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
