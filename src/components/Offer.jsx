import Image from "next/image";
import phone from '../../public/img/phone.svg'
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import cardSADcopons from '../../public/img/cardSADcopons.svg'
import { FaPhoneAlt } from "react-icons/fa";

export default function Offer() {
  return (
<div className="offer relative bottom-40 mx-0 md:mx-10  ">
 <div className=" bg-white rounded-xl  border border-gray-200 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
 <div className="">
    <Image src={cardSADcopons} alt="bbfvdf" className="w-40 h-auto absolute -top-10 left-1/4 rounded-xl"/>
 </div>
 <div className="flex flex-col items-start justify-between md:flex-row md:max-w-screen-xl  ">
    <div className="flex flex-col items-end mt-10 mx-0 md:mx-10 gap-6 w-full md:w-2/3">
        <h1 className="text-gray-400">جوالات</h1>
        <h1 className="text-3xl md:text-4xl text-center md:text-end">أبل أيفون 15 برو ماكس، 5جي، 6.7 بوصة</h1>
        <h1 className="text-2xl text-center md:text-end ps-0 md:ps-20">أبل أيفون 15 برو ماكس، 5جي، 6.7 بوصة، 256 جيجا، تيتانيوم طبيعي أبل أيفون 15 برو ماكس، 5جي، 6.7 بوصة، 256 جيجا،  </h1>
        <div className="flex md:flex-row flex-col-reverse gap-6 mb-10 md:mb-0 md:gap-28 mt-4">   
            <div className="flex items-center gap-6 md:justify-normal justify-center" >
                <div className="text-end">
                    <p className="font-bold">صلاحية العرض</p>
                    <p>الى تاريخ 12/2/2024</p>
                </div>
                <MdOutlineDateRange className="text-2xl text-gray-400"/>

            </div>
            <div className="flex items-center gap-4">
            <p className="me-6 text-xl">5999 </p>
                <p className="font-bold">رس <span className="font-normal">( شامل الضريبة )</span></p>
                <div className="flex flex-col items-center">
                <p className="text-5xl font-bold">457899</p>
                <p className="text-primaryColo text-xl" >وفر <span>800</span> رس</p>
                </div>
            </div>
        </div>
    </div>
    <div className="bg-gray-200 m-0 md:m-6 p-0 md:p-4 w-full md:w-1/3 h-80 rounded-xl flex items-center justify-center">
         <Image className="w-full h-full object-contain" src={phone} alt="" />
    </div>
</div>
<div className="offer_dowm flex justify-evenly items-center my-10">
            <div className="offer_star flex gap-1">
            <FaRegStar className="text-gray-400 text-xl"/>
            <FaRegStar className="text-gray-400 text-xl"/>
            <FaRegStar className="text-gray-400 text-xl"/>
            <FaRegStar className="text-gray-400 text-xl"/>
            <FaRegStar className="text-gray-400 text-xl"/>
                </div>
            
                <div className="offer-connect">
                <div className="offer_located flex items-center gap-4">
                <div className="text-end ">
                <h1 className="text-primaryColo font-bold text-xl">يرجى التواصل</h1>
                <h1>+967 785×××××5</h1>
                </div>
            <FaPhoneAlt  className="text-primaryColo font-bold text-3xl"/>
                </div>
                </div>
                <div className="offer_located flex items-center gap-4">
                <div className="text-end ">
                <h1 className="text-primaryColo font-bold text-xl">صدى الرنين</h1>
                <h1>اليمن - حضرموت - المكلا</h1>
                </div>
            <IoLocationOutline className="text-primaryColo font-bold text-3xl"/>
                </div>  
</div>
 </div>



    </div>
  )
}
