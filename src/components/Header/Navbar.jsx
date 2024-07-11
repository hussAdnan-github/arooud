
'use client'
import Link from "next/link";
import Dropdown from '../Dropdown';
import NavDropDown from "./NavDropDown";
import DarkMode from "../DarkMode";
const navLinks = [
  {name: 'شركاء عروضنا' ,href : '#partents'} ,
  {name: 'عنا' ,href : '#about'} ,
  {name: 'العروض' ,href : '#offer'} ,
  {name: 'الكوبونات' ,href : '#coupons'} ,
  {name: 'الرئيسية' ,href : '#home'} ,
]
export default function NavBar() {
 
  return ( 
  <div className="navbar mt-6">
        <div className="flex justify-between items-center mx-2 md:mx-20">
            <div>
      <DarkMode />
            </div>
            <div  className=" nav_links flex gap-4 md:gap-16  ">
            {navLinks.map(link =>{
              return(
                <Link key={link.key} href={link.href} onClick={()=>{
                  console.log(link);
                }}><h1 className= "text-sm sm:text-xl font-bold hover:text-red-500">{link.name}</h1></Link>
              )
            })}
            </div>
           <div>
            <NavDropDown />
           </div>
        </div>
        
    </div>

  )
}
