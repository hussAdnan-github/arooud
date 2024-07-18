'use client'
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

export default function BtnBack() {
  const router = useRouter();

  return (
    <div className="btn_back flex items-center gap-2 cursor-pointer" onClick={()=>{router.back()}}>
       <FaChevronLeft className="text-sm" />
        <h1 className="font-bold " >رجوع الى الخلف 
        </h1>
    </div>
  )
}
