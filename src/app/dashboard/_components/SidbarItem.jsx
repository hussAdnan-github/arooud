 
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/img/logo.png";
import { FaRegUserCircle, FaUserEdit } from "react-icons/fa";
import { RiDiscountPercentFill, RiH1 } from "react-icons/ri";
import { FaFolderPlus } from "react-icons/fa";
import { BsShieldFill } from "react-icons/bs";
import { GoPasskeyFill } from "react-icons/go";
import React, { useState } from "react";

import { FaBuffer } from "react-icons/fa";
import { TbLogin } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SidbarItem({ data }) {
  return (
    <>
      <div className="sidebar" style={{ height: "880px" }}>
        <div
          className="flex flex-col items-center mt-4 me-2  text-gray-700 bg-white rounded-lg"
          style={{ height: "96%", width: "200px" }}
        >
          <div className="flex items-center w-full px-3 mt-3">
            <Image src={logo} alt="logo" />
          </div>

          <div className="w-full px-2">
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300 ">
              {data.map( (item) => (
              <Link href={item.url} className="w-full">
                <div
                  key={item.id}
                  className="flex flex-row-reverse cursor-pointer items-center w-full h-12   mt-2 rounded hover:bg-gray-300" 
                >
                  {item.icon}
                  <span className="ml-2 text-[16px] font-bold text-gray-400">
                    {item.name}
                  </span>
                </div>
              </Link>
              ))}
              {/* <div
                className="flex flex-row-reverse cursor-pointer items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
                
              >
                <FaFolderPlus className="ms-6 text-gray-400" />

                <span className="ml-2 text-xs font-bold text-gray-400">
                  الاماكن
                </span>
              </div> */}
              {/*                 
                  <div onClick={setSidBar4()} className="flex flex-row-reverse cursor-pointer items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" >
                  <BsShieldFill  className="ms-6 text-gray-400"/>
                      <span className="ml-2 text-xs font-bold text-gray-400">المصادقة والتفويض</span>
                  </div> */}
              {/* <div onClick={setSidBar5()} className="flex flex-row-reverse cursor-pointer items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" href="#">
                  <GoPasskeyFill  className="ms-6 text-gray-400"/>
                      <span className="ml-2 text-xs font-bold text-gray-400">رمز التفويض</span>
                  </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
