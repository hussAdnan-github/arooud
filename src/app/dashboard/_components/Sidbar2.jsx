"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/img/logo.png";
import { FaRegUserCircle, FaUserEdit } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaFolderPlus } from "react-icons/fa";

import { GoPasskeyFill } from "react-icons/go";

import { FaBuffer } from "react-icons/fa";
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
import { useState } from "react";
import clsx from "clsx";

export default function SideBar2() {
  const [activeSection, setactiveSection] = useState("الحسابات");

  const titleSidebar = [
    {
      id: 1,
      name: "الحسابات",
      icon: <FaUserEdit />,
      value: "account",
    },
    {
      id: 2,
      name: "الاقسام",
      icon: <FaBuffer />,
      value: "section",
    },
    {
      id: 3,
      name: "العروض",
      icon: <RiDiscountPercentFill />,
      value: "offer",
    },
    {
      id: 4,
      name: "الاماكن",
      icon: <FaFolderPlus />,
      value: "place",
    },
    {
      id: 5,
      name: "المصادقة والتفويض",
      icon: <FaShield />,
      value: "auth",
    },
  ];
  const account = [
    {
      id: 1,
      name: "المستخدمين",
      icon: <FaRegUserCircle />,
      url: "/dashboard/users",
    },
    {
      id: 2,
      name: " المتاجر الإلكترونية",
      icon: <TbWorldUpload />,
      url: "/dashboard/website",
    },

    {
      id: 4,
      name: "محلات تجارية",
      icon: <AiTwotoneShop />,
      url: "/dashboard/shops",
    },
  ];
  const offer = [
    {
      id: 1,
      name: "أنواع العملة",
      icon: <BsCurrencyExchange />,
      url: "/dashboard/currencies",
    },
    {
      id: 2,
      name: "العروضات والخصومات",
      icon: <BiSolidOffer />,
      url: "/dashboard/discounts",
    },
    {
      id: 3,
      name: "القسائم",
      icon: <RiCoupon2Line />,
      url: "/dashboard/coupons",
    },
    {
      id: 4,
      name: "الكوبونات المحلية",
      icon: <RiCoupon2Line />,
      url: "/dashboard/couponsLocal",
    },
    {
      id: 5,
      name: "الكوبونات العالمية",
      icon: <RiCoupon2Line />,
      url: "/dashboard/couponsGlobal",
    },
  ];
  const place = [
    {
      id: 1,
      name: "الإعلانات",
      icon: <HiSpeakerphone />,
      url: "/dashboard/advertisements",
    },
    {
      id: 2,
      name: "البلدان",
      icon: <IoLocationSharp />,
      url: "/dashboard/countries",
    },
    {
      id: 3,
      name: "المحافظات",
      icon: <IoLocationSharp />,
      url: "/dashboard/governorates",
    },
    {
      id: 4,
      name: "المديريات",
      icon: <IoLocationSharp />,
      url: "/dashboard/directorates",
    },
    {
      id: 5,
      name: "من نحن",
      icon: <BsFillExclamationCircleFill />,
      url: "/dashboard/about",
    },
  ];
  const auth = [
    {
      id: 1,
      name: "المجموعات",
      icon: <FaCheckToSlot />,
      url: "/dashboard/authentications",
    },
  ];

  return (
    <>
      <div className="sidebar" style={{ height: "952px" }}>
        <div
          className="flex flex-col items-center mt-4 me-2 relative  text-gray-700 bg-white rounded-3xl drop-shadow-sm"
          style={{ height: "96%", width: "200px" }}
        >
          <div className="flex items-center w-40 px-3 ms-4 mt-10">
            <Image src={logo} alt="logo" />
          </div>

          <div className="w-full ">
            <div className="flex flex-col items-center w-full mt-3   ">
              <Tabs defaultValue="account" className=" w-full">
                <TabsList>
                  {titleSidebar.map((title) => (
                    <TabsTrigger
                      key={title.id}
                      value={title.value}
                      className="w-full pe-2"
                      onClick={() => setactiveSection(title.name)}
                    >
                      {title.value == "section" ? (
                        <Link href={"/dashboard/section"} className="w-full">
                          <div
                            className={clsx(
                              "flex flex-row-reverse items-center w-full py-3 mt-2 rounded hover:bg-gray-300",
                              {
                                "border-l-4 border-primaryColo bg-[#CFCFCF]":
                                  activeSection == title.name,
                              }
                            )}
                          >
                            <div className="ms-6 text-gray-400 text-2xl ">
                              {title.icon}
                            </div>
                            <span className="ml-2 text-[16px] font-bold text-gray-400">
                              {title.name}
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <div
                          className={clsx(
                            "flex flex-row-reverse items-center w-full py-3 mt-2 rounded hover:bg-gray-300",
                            {
                              "border-l-4 border-primaryColo bg-[#CFCFCF]":
                                activeSection == title.name,
                            }
                          )}
                        >
                          <div className="ms-6 text-gray-400 text-2xl ">
                            {title.icon}
                          </div>
                          <span className="ml-2 text-[16px] font-bold text-gray-400">
                            {title.name}
                          </span>
                        </div>
                      )}
                    </TabsTrigger>
                  ))}
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
                  <SidbarItem data={offer} />
                </TabsContent>
                <TabsContent
                  value="place"
                  className=" relative right-56 bottom-20"
                >
                  <SidbarItem data={place} />
                </TabsContent>
                <TabsContent
                  value="auth"
                  className=" relative right-56 bottom-20"
                >
                  <SidbarItem data={auth} />
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="flex items-center gap-4 absolute bottom-8 cursor-pointer">
            <h1 className="text-[16px] font-bold text-[#9796A1]">تسجيل خروج</h1>
            <RxEnter className="text-2xl font-bold text-[#9796A1] rotate-180" />
          </div>
        </div>
      </div>
    </>
  );
}
