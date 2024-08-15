import Image from "next/image";

import iconCard from "../../public/img/iconCard.svg";
import cardSAD from "../../public/img/cardSAD.svg";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

export default function CardProduct({ data }) {
  const provideCost = data.price_before - data.price_after;

  return (
    <div className="card_product ms-5 md:ms-0 ">
      <div className="card relative flex rounded-xl h-[450px] w-full 2xl:w-[320px] flex-col overflow-hidden border dark:border-socondaryDark  border-gray-100 bg-white shadow-md dark:bg-socondaryDark">
        <div
          className="relative mx-2 mt-2 flex h-52 overflow-hidden rounded-t-xl bg-gray-200 dark:bg-primaryDark"
          href="#"
        >
          <Image
            className=" w-full h-full hover:scale-125 object-contain hover:rotate-12 transition ease-in-out  delay-0 hover:-translate-y-1 duration-300"
            src={data.image_ar}
            alt="صورة العرض"
            width={200}
            height={200}
            objectFit="contain"
          />
          <span className="absolute top-0 right-0" style={{ right: "-14px" }}>
            <Image src={iconCard} alt="ايقونه" />
          </span>
        </div>
        <div className=" px-4 pb-1 card_body mt-1 text-end">
          <div className="card_title h-20">
            <span className="card_type text-[#C8C9CC]  text-xs ">
              {data.name_ar}
            </span>
            <h1 className="font-medium text-end card_name text-black dark:text-white">
              {data.description_ar}
            </h1>
          </div>
          <div className="flex items-center h-16 my-3  rounded-md bg-[#F4F4F4] dark:bg-primaryDark">
            <div className="card_sad w-16 h-16 bg-[#F4F4F4] border border-[#C8C9CC] flex justify-center items-center rounded-full relative -top-6 left-3">
              <Image
                src={cardSAD}
                alt="شعار العرض"
                className=""
                width={46}
                height={46}
              />
            </div>
            <div className=" w-[75%] me-1">
              <div className="flex justify-end items-end gap-1">
                <h1 className="text-[10px] text-gray-400">( شامل الضريبة )</h1>
                <span>{data.currency_type}</span>
                <h1 className="font-bold text-2xl text-black dark:text-white">
                  {data.price_after}
                </h1>
              </div>
              <div className="flex flex-row-reverse gap-1 ">
                <h1 className="text-xs line-through text-black dark:text-white">
                  {data.price_before}
                </h1>
                <span className="text-xs text-[#F64A51] dark:text-primaryColo">
                  وفر <span>{provideCost}</span>
                  <span>{data.currency_type === 2 ? "ريال يمني" : "رس"}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className=" bg-white shadow py-2 px-5 rounded-2xl">
              <Link href={`/offer/${data.id}`}>
                <h1 className="text-xs font-medium">تفاصيل</h1>
              </Link>
            </div>
            <div className="flex flex-col items-end">
              <h1
                className="discount text-center w-20 mb-1 text-white rounded-sm text-xs bg-[#F64A51] dark:bg-primaryColo block "
                style={{ padding: "3px" }}
              >
                {" "}
                <span className="me-1">%14.5 </span> خصم
              </h1>
              <h1 className="text-xs mt-1">
                اليمن - حضرموت - المكلا{" "}
                <CiLocationOn className="located_card  text-[#F64A51] dark:text-primaryColo text-xl inline-block" />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /*
   */
}
