import Image from "next/image";
import Coupons from "../../public/img/Coupons.svg";
import numcoupons from "../../public/img/numcoupons.svg";
import cardSADcopons from "../../public/img/cardSADcopons.svg";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimerSharp } from "react-icons/io5";
import Link from "next/link";

export default function CardCoupons({ data , url}) {
  return (
    <div className="card_coupons 2xl:w-[633px]">
      <div className="overflow-hidden  flex flex-col w-full items-center bg-whit rounded-lg shadow dark:bg-socondaryDark dark:border-socondaryDark">
        <div className="w-full h-[186px] p-1 z-20 bg-[#F4F4F4]">
          <Image
            className=" object-fill  hover:scale-110 transition ease-in-out  delay-0 hover:-translate-y-1 duration-300 rounded-t-lg w-full h-full  "
            src={data.image_ar}
            alt="صورة الكوبون"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col-reverse xl:flex-row w-full md:px-2 px-1 ps-2 md:ps-8 gap-0 xl:gap-10 card_bodycoupons">
          <div className="flex flex-col items-center xl:pe-7 z-10 xl:pt-8 gap-4  xl:gap-8  xl:border-r-2 xl:border-[#C8C9CC]  xl:border-dashed">
            <div className="img_carcoupons flex  drop-shadow-md bg-[#F3F3F3] border border-[#FCFCFC] h-28 w-28 p-4 rounded-lg object-contain">
              <Image
                className=""
                src={cardSADcopons}
                alt="شعار الكوبون"
                width={92}
                height={64}
              />
            </div>
            <div className="mb-4 xl:mb-0  drop-shadow-md bg-white py-1 px-2 rounded-full">
              <Link href={url}>
                <p className="text-xs font-medium">تفاصيل</p>
              </Link>
            </div>
          </div>
          <div className="title_cardcoupons flex flex-col items-end  mt-2">
            <p className="text-gray-300 font-normal text-sm	md:text-end w-full text-center">
              {data.name_ar}
            </p>
            <div className="h-20">
              <h1 className="text-xl text-center font-medium	 mb-4 md:text-end text-black dark:text-white">
                <span className=" font-bold text-2xl text-black dark:text-white">
                  كوبون
                </span>{" "}
                {data.description_ar}
              </h1>
            </div>
            <div className="detials_coupons xl:w-[154%] flex w-full justify-end gap-3  bg-[#F4F4F4] dark:bg-primaryDark rounded-lg px-4 py-1 items-center">
              <div className="date_coupons">
                <h1 className=" text-gray-400 text-sm md:text-xs text-end">
                  الكوبون صالح لغاية
                </h1>
                <div className="flex items-center gap-2">
                  <p className="text-gray-400 text-sm md:text-xl">
                    {data.duration}
                  </p>{" "}
                  <span>
                    <IoTimerSharp className="text-gray-400 text-xl" />
                  </span>
                </div>
              </div>
              <div className="number_coupons">
                <div className="flex items-center gap-2">
                  <p className="text-sm md:text-xl text-gray-400 ">
                    عدد مرات الاستخدام <span>{data.use}</span>
                  </p>{" "}
                  <span>
                    <Image
                      src={numcoupons}
                      alt="عدد الاستخدام"
                      width={16}
                      height={16}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="located_coupons flex items-center text-sm md:text-[16px] mt-4 mb-6">
              <p className="text-black dark:text-white">
                محل صدى الرنين اليمن - حضرموت - المكلا{" "}
              </p>
              <IoLocationOutline className="coupons_located text-primaryColo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
