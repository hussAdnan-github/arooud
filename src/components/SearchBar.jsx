import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

import Link from 'next/link'

export default function SearchBar() {
  return (
    <div>


<form class="max-w-full mx-auto " style={{direction:"rtl"}}>
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 border border-gray-300 rounded-s-full  focus:ring-4 focus:outline-none  dark:text-white bg-white" type="button">كل الأصنـاف<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">يبييبسي</button>
            </li>
            
            </ul>
        </div>
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class=" block p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-s-none rounded-e-full border-s-gray-50 border-s-2 border border-gray-300 focus:ring-primaryColor focus:border-primaryColor dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-primaryColor" placeholder=" " required />
            <button style={{width:'14%'}} type="submit" class="flex justify-center items-center gap-2 absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-primaryColor rounded-full border border-primaryColor hover:bg-primaryColor focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primaryColor dark:hover:bg-primaryColor dark:focus:ring-primaryColor">
               <h1>البحث</h1><FaSearch />
            </button>
        </div>
    </div>
</form>


    </div>
  )
}
