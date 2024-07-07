import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";

export default function Dropdown({id}) {
  return (
<div>
{/* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">تسجيل الدخول
<CiLogin />
</button>
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>

 */}


<button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-primaryColor hover:bg-primaryColor focus:ring-4 focus:outline-none  font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primaryColor dark:hover:bg-primaryColor rounded-full" type="button">
<CiLogin className="text-xl font-bold me-4" />
تسجيل الدخول

</button>

<div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li className="me-2">
        <a href="/login" class="block text-end px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">التسجيل كمستخدم 
        </a>
        
      </li>
      <li className="flex items-center justify-end me-2">
        <a href="/shopsignin" class="block text-end px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">التسجيل كمحل تجاري 
        </a>
        <FaUserPlus />
      </li>
      <li className="flex items-center justify-end me-2">
        <a href="/storesignin" class="block text-end px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">التسجيل كمتجر الكتروني 
        </a>
        <FaUserPlus />
      </li>
     
    </ul>
</div>

</div>
  )
}
