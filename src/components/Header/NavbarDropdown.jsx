import Link from "next/link";
import { FaUserPlus } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export default function Dropdown({id}) {
  return (
<div>
<div className="flex items-center justify-center">
 

<DropdownMenu>
      <DropdownMenuTrigger className="w-24  md:w-[155px] h-[34px] px-0 md:px-4 py-1 md:py-3 text-[11px] pb-3 sm:pb-0 md:text-sm leading-5 text-white font-normal md:font-bold bg-primaryColo hover:bg-primaryColo hover:text-white hover:border-0 " asChild>
        <Button variant="outline" className='rounded-full'>تسجيل الدخول</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ms-4 w-44 md:w-full bg-[#D3D1D8]"style={{zIndex:'99999'}} >
      <Link href="/login" className="flex font-bold justify-end items-center text-end  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border border-gray-200 border-b-2 border-x-0 border-t-0"> 
        <h1>التسجيل كمستخدم</h1>
        <FaUserPlus className="ms-2 text-gray-400"/>
        </Link>
        <Link href="/shopsignin" className="flex font-bold justify-end items-center text-end  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border border-gray-200 border-b-2 border-x-0 border-t-0">التسجيل كمحل تجاري 
        <FaUserPlus className="ms-2 text-gray-400"/>
        
        </Link>
        <Link href="/storesignin" className="flex font-bold justify-end items-center text-end   py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">التسجيل كمتجر الكتروني 
        <FaUserPlus className="ms-2 text-gray-400"/>
       
        </Link>
      </DropdownMenuContent>
</DropdownMenu>

</div>  
</div>
  )
}
