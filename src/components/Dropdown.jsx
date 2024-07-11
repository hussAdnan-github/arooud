import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export default function Dropdown({id}) {
  return (
<div>
<div className="flex items-center justify-center">
  {/* <div className="relative inline-block text-left dropdown">
    <span className="rounded-md shadow-sm"
      >
        <button className="inline-flex text-xs flex-row-reverse justify-center w-24 md:w-48 px-0 md:px-4 py-1 md:py-3 md:text-sm leading-5 text-white font-normal md:font-bold bg-primaryColo transition duration-150 ease-in-out rounded-full hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" 
       type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-116">
      <h1>        تسجيل الدخول
      </h1>        
        <CiLogin className="text-sm mt-1 md:mt-0 md:text-xl font-bold me-1 md:me-4"/>
        </button>
        </span>
    <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
      <div className="absolute px-2 left-0 md:right-0 w-44 md:w-full mt-2 origin-top-right bg-[#F2F2F4] border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-116" role="menu">
     <div>
     <Link href="/login" className="flex font-bold justify-end items-center text-end  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border border-b-2 border-x-0 border-t-0"> 
        <h1>التسجيل كمستخدم</h1>
        <FaUserPlus className="ms-2"/>
        </Link>
        <Link href="/shopsignin" className="flex font-bold justify-end items-center text-end  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rder-b-2 border-x-0 border-t-0">التسجيل كمحل تجاري 
        <FaUserPlus className="ms-2"/>
        
        </Link>
        <Link href="/storesignin" className="flex font-bold justify-end items-center text-end   py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">التسجيل كمتجر الكتروني 
        <FaUserPlus className="ms-2"/>
       
        </Link>
     </div>
      </div>
    </div>
  </div> */}


<DropdownMenu>
      <DropdownMenuTrigger className="w-24 md:w-48 px-0 md:px-4 py-1 md:py-3 md:text-sm leading-5 text-white font-normal md:font-bold bg-primaryColo transition duration-150 ease-in-out " asChild>
        <Button variant="outline" className='rounded-full'>تسجيل الدخول</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ms-4 w-44 md:w-56 bg-white"style={{zIndex:'99999'}} >
      <Link href="/login" className="flex font-bold justify-end items-center text-end  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border border-b-2 border-x-0 border-t-0"> 
        <h1>التسجيل كمستخدم</h1>
        <FaUserPlus className="ms-2"/>
        </Link>
        <Link href="/shopsignin" className="flex font-bold justify-end items-center text-end  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rder-b-2 border-x-0 border-t-0">التسجيل كمحل تجاري 
        <FaUserPlus className="ms-2"/>
        
        </Link>
        <Link href="/storesignin" className="flex font-bold justify-end items-center text-end   py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">التسجيل كمتجر الكتروني 
        <FaUserPlus className="ms-2"/>
       
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>

</div>  
</div>
  )
}
