import Image from 'next/image'
import Coupons from '../../public/img/Coupons.svg'
import numcoupons from '../../public/img/numcoupons.svg'
import cardSADcopons from '../../public/img/cardSADcopons.svg'
import { IoLocationOutline } from "react-icons/io5";
import { IoTimerSharp } from "react-icons/io5";

export default function CardCoupons() {
  return (
    <div  className="card_coupons">
        
<div className="flex flex-col max-w-xl items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  
        <Image className="rounded-t-lg" src={Coupons} alt="image Coupons" />
     
   <div className='flex justify-between mt-2 w-full px-2 ps-8 gap-24 card_bodycoupons'>
   <div className='flex flex-col items-center gap-8 mt-4'>
   <div className='img_carcoupons bg-[#F3F3F3] p-4 rounded-lg'>
    <Image className='' src={cardSADcopons} alt='cardSADcopons'/>
    </div>
    <p>تفاصيل</p>
   </div>
    <div className='title_cardcoupons flex flex-col items-end'>
        <p className='text-gray-300 text-end'>جوالات</p>
    <h1 className='text-xl text-end'><span className='font-bold'>كوبون</span> من محلات صدى الرنين للهواتف الذكية وجميع مستلزمات الجوال</h1>
    <div className='detials_coupons flex w-full justify-between bg-gray-300 rounded-lg px-4 py-1 items-center'>
   
    <div className='date_coupons'>
    <h1 className='text-xs text-gray-400'>صلاحية الكوبون</h1>
   <div className='flex items-center gap-2'>
   <p className='text-gray-400'>20/21/2024 </p> <span><IoTimerSharp className='text-gray-400 text-xl' />
   </span>
   </div>
    </div>
    <div className='number_coupons'>
    <div className='flex items-center gap-4'><p className='text-xl text-gray-400 '>عدد الكوبات 3</p> <span><Image src={numcoupons} alt='numcoupons' width={24} height={24}/></span></div>
    </div>
    </div>
    <div className='located_coupons flex items-center mt-4 mb-6'>
    <p>محل صدى الرنين اليمن - حضرموت - المكلا </p>
    <IoLocationOutline className='text-primaryColor'/>

    </div>
    </div>
    
   </div>
</div>

    </div>
  )
}
