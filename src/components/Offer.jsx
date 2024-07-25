// copy

import Image from "next/image";
import phone from "../../public/img/phone.svg";
import { MdOutlineaDateRange, MdOutlineDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import cardSADcopons from "../../public/img/cardSADcopons.svg";
import { FaPhoneAlt } from "react-icons/fa";

export default function Offer() {
  return (
    <div className="offer  container mx-auto ">
      <div className=" relative bottom-36 w-full bg-white rounded-xl   dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className=" w-48 h-48غ flex justify-center items-center bg-[#F3F3F3] border border-[#C8C9CC] rounded-lg drop-shadow-md p-1 absolute -top-28  md:left-[17%]">
          <Image
            src={cardSADcopons}
            alt="bbfvdf"
            className="w-[150px] h-auto rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start justify-between md:flex-row md:max-w-screen-xl  ">
          <div className="flex flex-col items-end mt-6 mx-0 md:mx-10 gap-6 w-full md:w-2/3">
            <h1 className="text-gray-400 md:text-2xl font-normal text-center md:text-end mt-11 md:mt-0 w-full md:w-auto">
              جوالات
            </h1>
            <h1 className="text-2xl md:mt-2 text-center md:text-end font-medium	md:text-5xl">
              أبل أيفون 15 برو ماكس، 5جي، 6.7 بوصة
            </h1>
            <h1 className="text-2xl md:text-3xl px-3 md:px-0 font-light	 text-center md:text-end ps-0 md:ps-20">
              أبل أيفون 15 برو ماكس، 5جي، 6.7 بوصة، 256 جيجا، تيتانيوم طبيعي أبل
              أيفون 15 برو ماكس، 5جي، 6.7 بوصة، 256 جيجا،{" "}
            </h1>
            <div className="flex md:flex-row flex-col-reverse gap-6 mb-10 md:mb-0 md:gap-10 mt-4 items-center w-full md:w-auto">
              <div className="flex items-end md:items-center gap-2 md:justify-normal justify-center ">
                <div className="text-end">
                  <p className="font-medium text-sm">صلاحية العرض</p>
                  <p className="text-[#C8C9CC] text-2xl">الى تاريخ 12/2/2024</p>
                </div>
                <MdOutlineDateRange className="text-4xl text-gray-400" />
              </div>
              <div className="flex gap-4 flex-col-reverse md:flex-row items-center md:items-center">
                <p className="me-6 text-xl md:text-4xl line-through">5999 </p>
                <p className="text-xl">
                  رس{" "}
                  <span className="font-normal text-[10px]">
                    ( شامل الضريبة )
                  </span>
                </p>
                <div className="flex flex-col items-center">
                  <p className="text-5xl md:text-6xl font-medium">457899</p>
                  <p className="text-primaryColo font-light	 text-xl md:text-3xl">
                    وفر <span>800</span> رس
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F4F4F4] m-0 md:m-6 p-0 md:p-4 w-full md:w-[400px] h-80 md:h-[425px] rounded-xl flex items-center justify-center">
            <Image
              className="offer_Img transition w-full h-full object-contain"
              src={phone}
              alt=""
            />
          </div>
        </div>
        <div className="offer_dowm flex justify-evenly items-center mt-10 md:mt-16 flex-col-reverse md:flex-row gap-6 md:gap-0 ">
          <div className="offer_star drop-shadow-lg  bg-white py-2 px-5 rounded-full flex gap-2">
            <FaRegStar className="text-[#7D7E80] text-2xl" />
            <FaRegStar className="text-[#7D7E80] text-2xl" />
            <FaRegStar className="text-[#7D7E80] text-2xl" />
            <FaRegStar className="text-[#7D7E80] text-2xl" />
            <FaRegStar className="text-[#7D7E80] text-2xl" />
          </div>

          <div className="offer-connect">
            <div className="offer_located flex items-center gap-4">
              <div className="text-end ">
                <h1 className="text-primaryColo font-medium text-xl md:text-3xl">
                  يرجى التواصل
                </h1>
                <h1 className="text-3xl font-light">+967 785×××××5</h1>
              </div>
              <FaPhoneAlt className="text-primaryColo font-bold mt-2 text-3xl" />
            </div>
          </div>
          <div className="offer_located flex items-center gap-4">
            <div className="text-end ">
              <h1 className="text-primaryColo text-xl md:text-3xl font-medium">صدى الرنين</h1>
              <h1 className="text-3xl font-light">اليمن - حضرموت - المكلا</h1>
            </div>
            <IoLocationOutline className="text-primaryColo mt-2 font-bold text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
