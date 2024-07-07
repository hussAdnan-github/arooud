import Image from "next/image";
import phone from '../../public/img/phone.svg'
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

export default function Offer() {
  return (
    <div className="offer mt-36 mx-10">
        <div className=" bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
 <div class="flex items-start justify-between md:flex-row md:max-w-screen-xl flex-col">
    <div class="flex flex-col items-end mt-10 mx-10 gap-6 w-2/3">
        <h1 className="text-gray-400">جوالات</h1>
        <h1 className="text-5xl text-end ">أبل أيفون 15 برو ماكس، 5جي، 6.7 بوصة</h1>
        <h1 className="text-2xl text-end ps-20">أبل أيفون 15 برو ماكس، 5جي، 6.7 بوصة، 256 جيجا، تيتانيوم طبيعي أبل أيفون 15 برو ماكس، 5جي، 6.7 بوصة، 256 جيجا، تيتانيوم طبيعي</h1>
        <div className="flex gap-28 mt-4">   
            <div className="flex items-center gap-6 " >
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
                <p className="text-5xl font-bold">4599</p>
                <p className="text-primaryColor text-xl" >وفر <span>800</span> رس</p>
                </div>
            </div>
        </div>
    </div>
    <div className="bg-gray-400 m-6 p-4 w-1/3 h-80 rounded-lg flex items-center justify-center">
         <Image class="w-full" src={phone} alt="" />
    </div>
</div>
            <div className="offer_dowm flex justify-evenly items-center">
            <div className="offer_star flex gap-1">
            <FaRegStar className="text-primaryColor text-xl"/>
            <FaRegStar className="text-primaryColor text-xl"/>
            <FaRegStar className="text-primaryColor text-xl"/>
            <FaRegStar className="text-primaryColor text-xl"/>
            <FaRegStar className="text-primaryColor text-xl"/>


                </div>
            
                <div className="offer-connect">
                <div className="offer_located flex items-center gap-4">
                <div className="text-end ">
                <h1 className="text-primaryColor">يرجى التواصل</h1>
                <h1>+967 785×××××5</h1>
                </div>
            <IoLocationOutline className="text-primaryColor text-xl"/>
                </div>
                </div>
                <div className="offer_located flex items-center gap-4">
                <div className="text-end ">
                <h1 className="text-primaryColor">صدى الرنين</h1>
                <h1>اليمن - حضرموت - المكلا</h1>
                </div>
            <IoLocationOutline className="text-primaryColor text-xl"/>
                </div>  
            </div>
        </div>



    </div>
  )
}
