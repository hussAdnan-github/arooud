import Image from 'next/image'
import card from '../../public/img/phone.svg'
import iconCard from '../../public/img/iconCard.svg'
import cardSAD from '../../public/img/cardSAD.svg'
import { CiLocationOn } from "react-icons/ci";
import Link from 'next/link';

export default function CardProduct() {
  return (
    <div className='card_product ms-5 md:ms-0'>
<div className="card relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border dark:border-[#1f2937] border-gray-100 bg-white shadow-md dark:bg-[#1f2937]">
  <div className="relative mx-2 mt-2 flex h-60 overflow-hidden rounded-xl bg-gray-200" href="#">
    <Image className=" w-full" src={card} alt="product image" />
    <span className="absolute top-0 right-0" style={{right:'-14px'}}><Image src={iconCard}/></span>
  </div>
  <div className=" px-4 pb-5 card_body mt-1 text-end">
  <div className='card_title'>
  <span className='card_type text-gray-400  text-xs '>جوالات</span>
  <h1 className='font-medium text-end card_name mt-1'>أبل أيفون 15 برو ماكس، 5جي، 6.7 بوصة، 256 جيجا، تيتانيوم طبيعي</h1>
  </div>
    <div className='flex items-center h-16 my-4  rounded-md bg-gray-200'>
    <div className='card_sad'>
<Image src={cardSAD} alt='image cardSAD'/>
    </div>
    <div>
    <div className='flex justify-end items-end gap-1'>
    <h1 className='text-xs text-gray-400'>
    ( شامل الضريبة )

        </h1>
    <span>رس</span>
        <h1 className='font-bold text-2xl'>
            4599
        </h1>
    </div> 
    <div className='flex flex-row-reverse gap-1'><h1 className='text-sm '> 5999</h1>  <span className='text-sm text-[#F64A51]'>وفر 800 رس</span></div>
    </div>
    </div>

  <div className='flex justify-between items-end'>
  <div>
        <h1 className='text-xs font-bold'>تفاصيل</h1>
    </div>
  <div className='flex flex-col items-end'>
        <h1 className='text-center w-20 mb-1 text-white rounded-sm text-xs bg-[#F64A51] block ' style={{padding:'3px'}}>%14.5خصم</h1>
        <h1 className='text-xs mt-1'>اليمن - حضرموت - المكلا <CiLocationOn className='text-[#F64A51] text-xl inline-block' />
        </h1>
    </div>
  
  </div>
  </div>
</div>
    </div>
  )
}
{/* 
 */}