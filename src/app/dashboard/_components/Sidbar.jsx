"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/img/logo.png";
import { FaRegUserCircle, FaUserEdit } from "react-icons/fa";
import { RiDiscountPercentFill, RiH1 } from "react-icons/ri";
import { FaFolderPlus } from "react-icons/fa";
import { BsShieldFill } from "react-icons/bs";
import { GoPasskeyFill } from "react-icons/go";
import React, { useState } from "react";
import SideBarItem from "@/components/SideBarItem";
import { FaBuffer } from "react-icons/fa";
import { TbLogin } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SidbarItem from "./SidbarItem";
import { TbWorldUpload } from "react-icons/tb";
import { AiTwotoneShop } from "react-icons/ai";
import { RxEnter } from "react-icons/rx";
import { FaShield } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { FaCheckToSlot } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import { BsCurrencyExchange } from "react-icons/bs";

import { TbWorldWww } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { RiCoupon2Line } from "react-icons/ri";

export default function SideBar() {
  const account = [
    {
      id: 1,
      name: "المستخدمين",
      icon: <FaRegUserCircle className="ms-4" />,
      url: "/dashboard/users",
    },
    {
      id: 2,
      name: " المواقع الالكترونية",
      icon: <TbWorldUpload className="ms-4" />,
      url: "",
    },
    {
      id: 3,
      name: "المواقع العالمية",
      icon: <TbWorldWww className="ms-4" />,
      url: "",
    },
    {
      id: 3,
      name: "محلات تجارية",
      icon: <AiTwotoneShop className="ms-4" />,
      url: "/dashboard/shops",
    },
  ];
  const offer = [
    { id: 1, name: "أنوع العملة", icon: <BsCurrencyExchange  className="ms-4" /> , url:''},
    { id: 1, name: "العروضات والخصومات", icon: <BiSolidOffer  className="ms-4" /> , url:''},
    { id: 1, name: "القسائم", icon: <RiCoupon2Line   className="ms-4" /> , url:''},
    { id: 1, name: "القسائم المحلية", icon: <RiCoupon2Line   className="ms-4" /> , url:''},
    { id: 1, name: "الكوبونات العالمية", icon: <RiCoupon2Line   className="ms-4" /> , url:''},
 
  ];
  const place = [
    { id: 1, name: "الاعلانات", icon: <HiSpeakerphone className="ms-4"/>, url: "/dashboard/advertisements"},
    { id: 1, name: "البلدان", icon: <IoLocationSharp className="ms-4"/>, url: "/dashboard/countries" },
    { id: 1, name: "المحافظات", icon: <IoLocationSharp className="ms-4"/>, url:"/dashboard/governorates" },
    { id: 1, name: "المديريات", icon: <IoLocationSharp className="ms-4"/>, url:"/dashboard/directorates" },
    { id: 1, name: "من نحن", icon: <BsFillExclamationCircleFill className="ms-4"/>, url:"/dashboard/about" },
  ];
  const auth = [{ id: 1, name: "المجموعات", icon: <FaCheckToSlot className="ms-4"/> ,url:'/dashboard/authentications'}];
  const keys = [{ id: 1, name: "الرموز", icon: <FaKey className="ms-4"/> ,url:'/dashboard/keys'}];

  return (
    <>
      <div className="sidebar" style={{ height: "952px" }}>
        <div
          className="flex flex-col items-center mt-4 me-2  text-gray-700 bg-white rounded-lg"
          style={{ height: "96%", width: "200px" }}
        >
          <div className="flex items-center w-full px-3 mt-3">
            <Image src={logo} alt="logo" />
          </div>

          <div className="w-full ">
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300 ">
              <Tabs defaultValue="account" className=" w-full">
                <TabsList>
                  <TabsTrigger value="account" className="w-full">
                    <div className="active cursor-pointer flex flex-row-reverse justify-start items-center w-full py-3 mt-2 rounded hover:bg-gray-300">
                      <FaUserEdit className="ms-4 text-gray-400 text-[16px] " />
                      <span className="ml-2 text-[16px] font-bold text-gray-400">
                        الحسابات
                      </span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="section" className="w-full">
                    <Link href={"/dashboard/section"} className="w-full">
                      <div className="flex flex-row-reverse items-center w-full py-3 mt-2 rounded hover:bg-gray-300">
                        <FaBuffer className="ms-4 text-gray-400 text-[16px] " />

                        <span className="ml-2 text-[16px] font-bold text-gray-400">
                          الاقسام
                        </span>
                      </div>
                    </Link>
                  </TabsTrigger>
                  <TabsTrigger value="offer" className="w-full">
                   
                      <div className="flex flex-row-reverse items-center w-full py-3 mt-2 rounded hover:bg-gray-300">
                        <RiDiscountPercentFill className="ms-6 text-gray-400 text-[16px] " />

                        <span className="ml-2 text-[16px] font-bold text-gray-400">
                        العروض
                        </span>
                      </div>
                   
                  </TabsTrigger>
                  <TabsTrigger value="place" className="w-full">
                      <div className="flex flex-row-reverse items-center w-full py-3 mt-2 rounded hover:bg-gray-300">
                        <FaFolderPlus className="ms-6 text-gray-400 text-[16px] " />

                        <span className="ml-2 text-[16px] font-bold text-gray-400">
                        الاماكن
                        </span>
                      </div>
                  </TabsTrigger>
              
                  <TabsTrigger value="auth" className="w-full pe-0">
                      <div className="flex flex-row-reverse items-center w-full py-3 mt-2 rounded hover:bg-gray-300">
                        <FaShield  className="ms-6 text-gray-400 text-[16px] " />

                        <span className="ml-2 text-[16px] font-bold text-gray-400">
                        المصادقة والتفويض 
                        </span>
                      </div>
                  </TabsTrigger>
              
                  <TabsTrigger value="keys" className="w-full">
                      <div className="flex flex-row-reverse items-center w-full py-3 mt-2 rounded hover:bg-gray-300">
                        <GoPasskeyFill  className="ms-6 text-gray-400 text-[16px] " />

                        <span className="ml-2 text-[16px] font-bold text-gray-400">
                        رمز التفويض
                        </span>
                      </div>
                  </TabsTrigger>
                  
                </TabsList>
                <TabsContent
                  value="account"
                  className=" relative right-56 bottom-20"
                >
                  <SidbarItem data={account} />
                </TabsContent>
                <TabsContent
                  value="section"
                  className=" relative right-56 bottom-20"
                >
                  {/* <SidbarItem/> */}
                </TabsContent>
                <TabsContent
                  value="offer"
                  className=" relative right-56 bottom-20"
                >
                  <SidbarItem data={offer}/>
                </TabsContent>
                <TabsContent
                  value="place"
                  className=" relative right-56 bottom-20"
                >
                  <SidbarItem data={place}/>
                </TabsContent>
                <TabsContent
                  value="keys"
                  className=" relative right-56 bottom-20"
                >
                  <SidbarItem data={keys}/>
                </TabsContent>
                <TabsContent
                  value="auth"
                  className=" relative right-56 bottom-20"
                >
                  <SidbarItem data={auth}/>
                </TabsContent>
              </Tabs>

            <div className="flex items-center gap-4 absolute top-full">
              <div>
              <RxEnter className="text-[16px] text-[#9796A1]"/>
              </div>
              <h1 className="text-[16px] text-[#9796A1]">تسجيل خروج</h1>
             
            </div>
 
             
             
            </div>
          </div>
          {/* <div
            className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300"
            href="#"
          >
            <span className="ml-2 text-xs font-bold text-gray-400">
              تسجيل خروج
            </span>
            <TbLogin className="ms-4 text-gray-400 text-2xl" />
          </div> */}
        </div>
      </div>
    </>
  );
}
