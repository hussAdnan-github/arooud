import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

import Link from 'next/link'

export default function SearchBar() {
  return (
    <div>
  
<form className=" mx-auto">   
<div className="flex">
<div className="main_search">
<Link href={''} className="flex items-center md:w-28 md:text-xl text-white font-bold bg-primaryColo
h-full rounded-full justify-between md:px-6 px-2 ">
  <IoSearchSharp className="search_icon me-1"/>
  بحـث
  </Link>
  <input type="text" className="text-end text-2xl" />
<select id="mySelect" name="mySelect">
  <option value="">كل الاصناف</option>
  <option value="option1" className="a">1</option>
  <option value="option1">1</option>
  <option value="option1">1</option>
  <option value="option1">1</option>
783098176
</select>
</div>
</div>
</form>


    </div>
  )
}
