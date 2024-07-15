'use client'
import { useRouter } from "next/navigation";

export default function BtnBack() {
  const router = useRouter();

  return (
    <div className="btn_back ">
        <h1 className="font-bold cursor-pointer" onClick={()=>{router.back()}}>رجوع الى الخلف 
        </h1>
    </div>
  )
}
