'use client'
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

export default function BtnBack() {
  const router = useRouter();

  return (
    <div className="mb-10 md:mb-0 btn_back flex justify-center md:justify-start items-center gap-2 cursor-pointer" onClick={()=>{router.back()}}>
       <FaChevronLeft className="text-sm" />
        <h1 className="font-bold " >رجوع الى الخلف 
        </h1>
    </div>
  )
}
