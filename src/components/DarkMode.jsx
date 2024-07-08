'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
 import { MdLightMode , MdDarkMode } from "react-icons/md"
export default function DarkMode() {

  const {theme , setTheme , systemTheme} = useTheme();
  const currntTheme = theme  === 'system' ? systemTheme : theme ;
  const [mounted , setMouned] = useState(false);

  useEffect(
      ()=>{
          setMouned(true)
      } ,[]
  )
return (
  <div className=" h-6 rounded-full bg-primaryColo" style={{width:'78px'}}>
      <div className="flex justify-around items-center w-full h-full">
      <MdLightMode className="text-xl text-white"/>
      <MdDarkMode className="text-xl text-white"/>
      </div>
    {mounted &&   (currntTheme === 'dark' ? (<MdDarkMode onClick={()=>setTheme(pre=>pre = 'light')}  
   className='-z-0 text-4xl cursor-pointer hover:text-primaryColo relative left-9 bg-black
     border border-[#374151] rounded-full p-1.5 'style={{transition :'.8s' , bottom:"30px"}}/>)
     :
       (<MdLightMode onClick={()=>setTheme(pre=>pre = 'dark')}
         className="-z-0 text-4xl text-white bottom-6  cursor-pointer hover:text-primaryColo relative 
         left-1 border border-white bg-black rounded-full p-1.5 " style={{transition :'.8s', bottom:"30px"}} />))}
         </div>
    )
}