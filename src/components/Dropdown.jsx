import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";

export default function Dropdown({id}) {
  return (
<div>
<div className="flex items-center justify-center">
  <div className=" relative inline-block text-left dropdown">
    <span className="rounded-md shadow-sm"
      >
        <button className="inline-flex text-xs flex-row-reverse justify-center w-28  md:w-48 px-0 md:px-4 py-1 md:py-3 md:text-sm leading-5 text-white font-bold bg-primaryColo transition duration-150 ease-in-out rounded-full hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" 
       type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-116">
      <h1>        تسجيل الدخول
      </h1>        
        <CiLogin className="text-xl font-bold me-4"/>
        </button>
        </span>
    <div className="opacity-0 z-10 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
      <div className="absolute right-0 w-full mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-116" role="menu">
     <div>
     <Link href="/login" className="flex justify-between text-end px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> 
        <h1>التسجيل كمستخدم</h1>
        <FaUserPlus />
        </Link>
        <Link href="/shopsignin" className="block text-end px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">التسجيل كمحل تجاري 
        </Link>
        <Link href="/storesignin" className="block text-end px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">التسجيل كمتجر الكتروني 
        </Link>
     </div>
      </div>
    </div>
  </div>
</div>  
</div>
  )
}
