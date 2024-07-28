'use client'
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
export default function LinkNavbar() {
  const navLinks = [
    { id: 1, name: "شركاء عروضنا", hash: "#partents" },
    { id: 2, name: "عنا", hash: "#about" },
    { id: 3, name: "العروض", hash: "#offer" },
    { id: 4, name: "الكوبونات", hash: "#coupons" },
    { id: 5, name: "الرئيسية", hash: "#home" },
  ];

  const [activeSection, setactiveSection] = useState("الرئيسية");

  return (
    <div className=" nav_links flex gap-4 md:gap-16 flex-1 justify-end md:me-28 ">
      {navLinks.map((link) => {
        return (
          <Link key={link.id} href={link.hash} onClick={()=> setactiveSection(link.name)}>
            <h1 className={clsx("transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105  duration-300 text-sm sm:text-xl font-bold hover:text-red-500", {
                "text-primaryColo" :activeSection == link.name,
            })}>
              {link.name}
            </h1>
          </Link>
        );
      })}
    </div>
  );
}
