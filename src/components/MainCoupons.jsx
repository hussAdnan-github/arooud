import Image from "next/image";
import { MdOutlineDateRange } from "react-icons/md";
import cardcouponsGray from "../../public/img/cardcouponsGray.svg";
import Coupons from "../../public/img/Coupons.svg";
import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import numcoupons from "../../public/img/numcoupons.svg";
import cardSADcopons from "../../public/img/cardSADcopons.svg";
import { IoTimerSharp } from "react-icons/io5";
import ButtonRoundedSocendary from "./ButtonRoundedSocendary";
import ButtonRounded from "./ButtonRoundedPrimary";

export default function MainCoupons() {
  return (
    <div className="coupons relative  md:mt-0 bottom-36  mt-36 container mx-auto md:px-0">
      <div className=" bg-white -mb-16 w-full  rounded-t-2xl  dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col-reverse items-start justify-between md:flex-row">
          <div className="flex flex-col items-center md:items-end mt-10 mx-0 md:mx-10 gap-10 w-full md:w-2/3">
            <h1 className="text-gray-400 md:text-2xl">جوالات</h1>
            <h1 className="text-3xl md:text-5xl text-center md:text-end font-bold">
              كوبون من محلات صدى الرنين للهواتف الذكية وجميع مستلزمات الجوال
            </h1>
            <div className="flex justify-center w-full md:w-auto gap-4">
              <div className="flex flex-col items-end">
                <h1 className="text-xl md:text-3xl font-bold">
                  قسيمة بقيمة 200 ريال
                </h1>
                <h1 className="text-xl md:text-3xl font-bold">من متجر شي ان</h1>
              </div>
              <Image
                src={cardcouponsGray}
                alt="cardcouponsGray"
                className="w-7 h-auto"
              />
            </div>
            <div className="flex md:flex-row flex-col-reverse gap-6 mb-10 md:mb-0 md:gap-28 mt-4">
              <div className="detials_coupons flex  px-4 py-1 items-center">
                <div className="date_coupons me-20 text-end">
                  <h1 className="text-xs md:text-xl text-gray-400 me-14 mb-1">
                    صلاحية الكوبون إلى تاريخ
                  </h1>
                  <div className="flex items-center gap-5">
                    <p className="text-gray-400 font-bold text-xs md:text-4xl">
                      20/21/2024{" "}
                    </p>{" "}
                    <span>
                      <IoTimerSharp className="text-gray-400 text-xs md:text-4xl" />
                    </span>
                  </div>
                </div>
                <div className="number_coupons">
                  <div className="flex items-center gap-4">
                    <p className="text-xl text-gray-400 font-bold md:text-4xl">
                      عدد مرات الاستخدام 3
                    </p>{" "}
                    <span>
                      <Image
                        src={numcoupons}
                        alt="numcoupons"
                        width={34}
                        height={38}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden m-0 md:m-6 p-0 w-full md:w-[407px] h-[420px] rounded-t-2xl flex items-center justify-center">
            <Image
              className="coupons_mainimg transition w-full h-full object-cover rounded-t-2xl"
              src={Coupons}
              alt=""
            />
          </div>
        </div>
        <div className="container m-auto">
          <h1 className="text-center md:text-end text-2xl font-bold">
            شروط استخدام الكوبون
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
            <div>
              <h1 className="text-center mt-3 text-2xl">hussein</h1>
              <h1 className="text-center mt-3 text-2xl">hussein</h1>
            </div>
            <div className="mt-10 md:mt-0">
              <h1 className="text-center mt-3 text-2xl">hussein</h1>
              <h1 className="text-center mt-3 text-2xl">hussein</h1>
            </div>
          </div>
          <div className="flex items-center justify-start flex-col md:flex-row gap-10 mb-20 mt-20 ps-0 md:ps-48">
            <button
              type="submit"
              className="transition text-[#C8C9CC]  text-2xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-30 hover:bg-primaryColo md:w-[297px] md:h-[54px] hover:text-white  hover:border-0 hover:font-bold border border-[#C8C9CC] inline-block w-48 rounded-full py-2"
            >
              الانتقال الى الموقع
            </button>
            <button className="text-2xl bg-primaryColo transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-30   text-white font-bold text-center inline-block w-60 md:w-[297px] md:h-[54px] rounded-full py-2">
              نسخ الكوبون
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
