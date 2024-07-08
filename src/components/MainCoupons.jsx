import Image from "next/image";
import { MdOutlineDateRange } from "react-icons/md";
import cardcouponsGray from '../../public/img/cardcouponsGray.svg'
import Coupons from '../../public/img/Coupons.svg'
import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import numcoupons from '../../public/img/numcoupons.svg'
import cardSADcopons from '../../public/img/cardSADcopons.svg'
import { IoTimerSharp } from "react-icons/io5";
import ButtonRoundedSocendary from "./ButtonRoundedSocendary";
import ButtonRounded from "./ButtonRoundedPrimary";

export default function MainCoupons() {
  return (
    <div className="coupons relative bottom-40 mx-0 md:mx-10  ">
 <div className=" bg-white rounded-xl  border border-gray-200 shadow  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
 <div className="flex flex-col items-start justify-between md:flex-row">
    <div className="flex flex-col items-end mt-10 mx-0 md:mx-10 gap-6 w-full md:w-2/3">
        <h1 className="text-gray-400">جوالات</h1>
        <h1 className="text-3xl md:text-5xl text-center md:text-end ">كوبون من محلات صدى الرنين للهواتف الذكية وجميع مستلزمات الجوال</h1>
        <div className="flex gap-4">
           <div className="flex flex-col items-end">
           <h1 className="text-xl font-bold">قسيمة بقيمة 200 ريال</h1>
           <h1 className="text-xl font-bold">من متجر شي ان</h1>
           </div>
           <Image src={cardcouponsGray} alt="cardcouponsGray" className="w-7 h-auto" />
        </div>
<div className="flex md:flex-row flex-col-reverse gap-6 mb-10 md:mb-0 md:gap-28 mt-4">   
<div className='detials_coupons flex  px-4 py-1 items-center'>
   <div className='date_coupons me-20 text-end'>
   <h1 className='text-xs text-gray-400 me-6 mb-1'>صلاحية الكوبون</h1>
  <div className='flex items-center gap-2'>
  <p className='text-gray-400 font-bold text-xl'>20/21/2024 </p> <span><IoTimerSharp className='text-gray-400 text-xl' />
  </span>
  </div>
   </div>
   <div className='number_coupons'>
   <div className='flex items-center gap-4'><p className='text-xl text-gray-400 font-bold'>عدد الكوبات 3</p> <span><Image src={numcoupons} alt='numcoupons' width={24} height={24}/></span></div>
   </div>
   </div>
        </div>
    </div>
    <div className=" m-0 md:m-6 p-0 w-full md:w-1/3 h-80 rounded-lg flex items-center justify-center">
         <Image className="w-full h-full object-cover rounded-xl" src={Coupons} alt="" />
    </div>
  
</div>
<div className="container m-auto">
<h1 className="text-end text-2xl font-bold">شروط استخدام الكوبون</h1>

<div className="grid grid-cols-2 mt-5">
   <div>
   <h1 className="text-center text-2xl">hussein</h1>
   <h1 className="text-center text-2xl">hussein</h1>
   <h1 className="text-center text-2xl">hsdgfdsgfdggfdhgfhfg</h1>
 
   </div>
   <div>
   <h1 className="text-center text-2xl">hussein</h1>
   <h1 className="text-center text-2xl">hussein</h1>
   <h1 className="text-center text-2xl">hussesdasdasdasin</h1>
   </div>
</div>
<div className="flex justify-start  gap-10 mb-20 mt-20 ps-48">
   <ButtonRounded title={'نسخ الكوبون'} urllink={'#'} />
   <ButtonRoundedSocendary title={'الانتقال الى الموقع'}/>
</div>
</div>
 
 </div>


    </div>
  )
}
