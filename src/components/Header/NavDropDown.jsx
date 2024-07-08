
'use client'
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
// import { FaAngleUp } from "react-icons/fa6";

export default function NavDropDown() {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className="nav_dropdown">
        
<div className="bg-white flex flex-col justify-center ">
<div className="flex items-center justify-center">
  <div className=" relative inline-block text-left dropdown">
    <span className="rounded-md shadow-sm"><button onClick={toggleVisibility} className=" inline-flex justify-center w-full px-4 py-2 rounded-xl text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border  border-gray-300 hover:text-gray-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" 
       type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
        <FaAngleDown className='mt-2 me-4' />
        
        <span className='text-xl font-bold navbar_down'>الفـــلــتـــــرة</span>
        {/* {isVisible ? <FaAngleDown /> :  <FaAngleUp /> } */}
        </button></span>
    <div className="fixed left-0 w-full opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95" style={{zIndex:'99999999' , top:'134px'}}>
     <div className="absolute right-0 w-full mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
      <div className="tablels px-12 bg-[#F8F8F8]">
  <div className="flex gap-2 py-8">

{/* Filter 3 */}
    <div className="flex flex-col gap-9 items-end flex-1 me-8">
 <div className='text-end '>
    <h1 className='text-2xl mb-8 font-bold'>الفلترة حسب السعر</h1>
 <div className="filter_price grid md:grid-cols-2 ">
        
        <h1>اقل من 5000 الف</h1>
        <h1>اقل من 5000 الف</h1>
        <h1>اقل من 5000 الف</h1>
      </div>
 </div>
 <div className='text-end'>
 <h1 className='text-2xl mb-8 font-bold'>الفلترة حسب اقسام عروض</h1>

 <div className="filter_work grid md:grid-cols-2 ">
    <h1>اقل من 5000 الف</h1>
    <h1>اقل من 5000 الف</h1>
    <h1>اقل من 5000 الف</h1>
  </div>
 </div>
    </div>

    {/* Filter 2 */}
  <div className="text-end me-7">
    <h1 className=" text-2xl mb-8 font-bold">
    الفلترة حسب الاقسام
    </h1>
    <div className="filter_work grid md:grid-cols-3 gap-2">
    <div className="text-center border border-gray-500 w-44 overflow-hidden rounded-full h-10 flex justify-center items-center">
      <h1>قسم السفر والسياحة</h1>
    </div>
   
    <div className="text-center border border-gray-500 w-44 overflow-hidden rounded-full h-10 flex justify-center items-center">
      <h1>قسم السفر والسياحة</h1>
    </div>
   
    <div className="text-center border border-gray-500 w-44 overflow-hidden rounded-full h-10 flex justify-center items-center">
      <h1>قسم السفر والسياحة</h1>
    </div>
   
    <div className="text-center border border-gray-500 w-44 overflow-hidden rounded-full h-10 flex justify-center items-center">
      <h1>قسم السفر والسياحة</h1>
    </div>
   
    <div className="text-center border border-gray-500 w-44 overflow-hidden rounded-full h-10 flex justify-center items-center">
      <h1>قسم السفر والسياحة</h1>
    </div>
   
    <div className="text-center border border-gray-500 w-44 overflow-hidden rounded-full h-10 flex justify-center items-center">
      <h1>قسم السفر والسياحة</h1>
    </div>
   
    <div className="text-center border border-gray-500 w-44 overflow-hidden rounded-full h-10 flex justify-center items-center">
      <h1>قسم السفر والسياحة</h1>
    </div>
   
    <div className="text-center border border-gray-500 w-44 overflow-hidden rounded-full h-10 flex justify-center items-center">
      <h1>قسم السفر والسياحة</h1>
    </div>
   
  </div>
  </div>

  {/* Filter 1 */}
  <div className="text-end">
    <h1 className="  text-2xl mb-8 font-bold">الفلترة حسب المنطقة</h1>
    <div className="filter_countery grid md:grid-cols-3 gap-2" >
    <div className="text-center border border-gray-500 w-32 overflow-hidden rounded-full h-10 flex justify-center items-center">
      <h1>تريم</h1>
    </div>
    <div className="text-center border border-gray-500 w-32 overflow-hidden rounded-full h-10 flex justify-center items-center">
    <h1>المكلا</h1>
    </div>
    <div className="text-center border border-gray-500 w-32 overflow-hidden rounded-full h-10 flex justify-center items-center">
    <h1>تريم</h1>
    </div>
    <div className="text-center border border-gray-500 w-32 overflow-hidden rounded-full h-10 flex justify-center items-center">
    <h1>تريم</h1>
    </div>
    <div className="text-center border border-gray-500 w-32 overflow-hidden rounded-full h-10 flex justify-center items-center">
    <h1>تريم</h1>
    </div>
    <div className="text-center border border-gray-500 w-32 overflow-hidden rounded-full h-10 flex justify-center items-center">
    <h1>تريم</h1>
    </div>
    <div className="text-center border border-gray-500 w-32 overflow-hidden rounded-full h-10 flex justify-center items-center">
    <h1>تريم</h1>
    </div>
    <div className="text-center border border-gray-500 w-32 overflow-hidden rounded-full h-10 flex justify-center items-center">
    <h1>تريم</h1>
    </div>
    <div className="text-center border border-gray-500 w-32 overflow-hidden rounded-full h-10 flex justify-center items-center">
    <h1>تريم</h1>
    </div>
  </div>
  </div>
 
  </div>
</div>
      </div>
    </div>
  </div>
</div>              
</div>

       
    </div>
  )
}
