import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

import Link from 'next/link'

export default function SearchBar() {
  return (
    <div>
  
<form className=" mx-auto">   
<div className="flex">
<div className="main_search ms-2 md:ms-0  md:w-full md:mx-16">
<Link href={''} className="flex w-10 h-10 items-center md:w-28 text-white font-bold bg-primaryColo
md:h-full rounded-full justify-between md:px-6 px-2 " style={{fontSize:'16px'}}>
  <IoSearchSharp className="search_icon me-2" style={{fontSize:'18px'}}/>
  بحـث
  </Link>
  <input type="text" className="text-end text-2xl" />
<select id="mySelect" name="mySelect" className="">
  <option value="">كل الاصناف</option>
  <option value="option1" className="a">1</option>
  <option value="option1">1</option>
  <option value="option1">1</option>
  <option value="option1">1</option>
</select>
</div>
</div>
</form>


    </div>
  )
}
