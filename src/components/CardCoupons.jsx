import Image from 'next/image'
import Coupons from '../../public/img/Coupons.svg'
import numcoupons from '../../public/img/numcoupons.svg'
import cardSADcopons from '../../public/img/cardSADcopons.svg'
import { IoLocationOutline } from "react-icons/io5";
import { IoTimerSharp } from "react-icons/io5";

export default function CardCoupons() {
  return (
    <div  className="card_coupons ">
        
<div className="overflow-hidden flex flex-col max-w-xl items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  
        <Image className="  hover:scale-125 transition ease-in-out  delay-0 hover:-translate-y-1 duration-300 rounded-t-lg" src={Coupons} alt="image Coupons" />
     
   <div className='flex flex-col-reverse md:flex-row mt-2 w-full md:px-2 px-1 ps-2 md:ps-8 gap-0 md:gap-24 card_bodycoupons'>
   <div className='flex flex-col items-center gap-8 mt-4'>
   <div className='img_carcoupons bg-[#F3F3F3] p-4 rounded-lg'>
    <Image className='' src={cardSADcopons} alt='cardSADcopons'/>
    </div>
    <p className='mb-10 md:mb-0'>تفاصيل</p>
   </div>
    <div className='title_cardcoupons flex flex-col items-end'>
        <p className='text-gray-300 md:text-end w-full text-center'>جوالات</p>
    <h1 className='text-xl text-center mb-4 md:text-end'><span className='font-bold'>كوبون</span> من محلات صدى الرنين للهواتف الذكية وجميع مستلزمات الجوال</h1>
    <div className='detials_coupons flex w-full justify-between bg-gray-300 rounded-lg px-4 py-1 items-center'>
   
    <div className='date_coupons'>
    <h1 className=' text-gray-400 text-sm md:text-xs'>صلاحية الكوبون</h1>
   <div className='flex items-center gap-2'>
   <p className='text-gray-400 text-sm md:text-xl'>20/21/2024 </p> <span><IoTimerSharp className='text-gray-400 text-xl' />
   </span>
   </div>
    </div>
    <div className='number_coupons'>
    <div className='flex items-center gap-2 md:gap-4'><p className='text-sm md:text-xl text-gray-400 '>عدد الكوبات 3</p> <span><Image src={numcoupons} alt='numcoupons' width={24} height={24}/></span></div>
    </div>
    </div>
    <div className='located_coupons flex items-center text-sm md:text-xl w-full justify-center mt-4 mb-6'>
    <p>محل صدى الرنين اليمن - حضرموت - المكلا </p>
    <IoLocationOutline className='coupons_located text-primaryColor'/>

    </div>
    </div>
    
   </div>
</div>

    </div>
  )
}
