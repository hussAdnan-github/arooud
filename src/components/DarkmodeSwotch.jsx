'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
 import { MdLightMode , MdDarkMode } from "react-icons/md"
export default function DarkmodeSwitch() {

  const {theme , setTheme , systemTheme} = useTheme();
  const currntTheme = theme  === 'system' ? systemTheme : theme ;
  // const [mounted , setMouned] = useState(false);

  // useEffect(
  //     ()=>{
  //         setMouned(true)
  //     } ,[]
  // )
return (
  <div className=" h-5 rounded-full bg-primaryColo" style={{width:'74px'}}>{
      currntTheme === 'dark' ? <MdLightMode onClick={()=>setTheme(pre=>pre = 'light')}  className='-z-0 text-4xl cursor-pointer hover:text-primaryColo relative left-2 bottom-2 bg-black  border border-[#374151] rounded-full p-1.5 'style={{transition :'.8s'}}/>:
       <MdDarkMode onClick={()=>setTheme(pre=>pre = 'dark')}  className="-z-0 text-4xl text-white bottom-2 cursor-pointer hover:text-primaryColo relative left-8 border border-white bg-black rounded-full p-1.5 " style={{transition :'.8s'}} />
      }</div>
)
}



// <div className=" h-5 rounded-full bg-primaryColo" style={{width:'74px'}}>{(
//         currntTheme === 'light' ? <MdDarkMode onClick={()=>setTheme(pre=>pre = 'dark')} className=' text-4xl cursor-pointer hover:text-amber-500 relative left-2 bottom-2 bg-white border border-[#374151] rounded-full p-1.5 'style={{transition :'.8s'}} /> :
//         <MdLightMode onClick={()=>setTheme(pre=>pre = 'light')} className="text-4xl bottom-2 cursor-pointer hover:text-amber-500 relative left-8 border border-white bg-black rounded-full p-1.5 " style={{transition :'.8s'}}/>
         
//        ) }</div>
// </div>
//   )
// }
