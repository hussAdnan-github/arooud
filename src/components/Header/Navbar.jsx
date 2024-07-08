'use client'
import Link from "next/link";
import Dropdown from '../Dropdown';
import NavDropDown from "./NavDropDown";
import DarkmodeSwotch from "../DarkmodeSwotch";
import { useRef } from "react";

export default function NavBar() {
// const aboutRef = useRef(null);
// onClick={()=>{ aboutRef.current?.scrollIntoView(
//   {
//     behavior:'smooth'
//   }
// )}}
  return (
    <div className="navbar mt-6">
        <div className="flex justify-between items-center mx-2 md:mx-20">
            <div>
      <DarkmodeSwotch/>

            </div>
            <div  className=" nav_links flex gap-4 md:gap-16  ">
            <h1 className="text-sm sm:text-2xl font-bold">شركاء عروضنا</h1>
            <h1 className="text-sm sm:text-2xl font-bold" >عنا</h1>  
            <h1 className="text-sm sm:text-2xl font-bold">العروض</h1>
            <h1 className="text-sm sm:text-2xl font-bold">الكوبونات</h1>
            <h1 className="text-sm sm:text-2xl font-bold text-primaryColor">الرئيسية</h1>
            </div>
           <div>
            <NavDropDown />
           </div>
        </div>
        
    </div>
  )
}
