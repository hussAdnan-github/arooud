
import Link from "next/link";
import NavDropDown from "./NavDropDown";
import DarkMode from "../DarkMode";
const navLinks = [
  {id: 1, name: 'شركاء عروضنا' ,href : '#partents'} ,
  {id: 2, name: 'عنا' ,href : '#about'} ,
  {id: 3, name: 'العروض' ,href : '#offer'} ,
  {id: 4, name: 'الكوبونات' ,href : '#coupons'} ,
  {id: 5, name: 'الرئيسية' ,href : '#home'} ,
]
export default function NavBar() {
 
  return ( 
  <div className="navbar mt-6">
        <div className="flex justify-between items-center mx-2 md:mx-20">
            <div>
      <DarkMode />
            </div>
            <div  className=" nav_links flex gap-4 md:gap-16 flex-1 justify-end me-28 ">
            {navLinks.map(link =>{
              return(
                <Link  key={link.id} href={link.href}><h1 className= "transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105  duration-300 text-sm sm:text-xl font-bold hover:text-red-500">{link.name}</h1></Link>
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
