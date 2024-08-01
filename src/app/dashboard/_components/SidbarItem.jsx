"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/img/logo.png";

import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function SidbarItem({ data }) {
  const path = usePathname();

  return (
    <>
      <div className="sidebar" style={{ height: "880px" }}>
        <div
          className="flex flex-col items-center me-2 pt-10 text-gray-700 bg-white rounded-3xl drop-shadow-sm"
          style={{ height: "95%", width: "200px" }}
        >
          <div className="w-full pe-2">
            <div className="flex flex-col items-center w-full mt-3   ">
              {data.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className={clsx("w-full rounded-[4px] ", {
                    "border-l-4  border-primaryColo ": path == item.url,
                  })}
                >
                  <div className="flex flex-row-reverse cursor-pointer items-center w-full h-12   mt-2 rounded hover:bg-gray-300">
                    <div className=" ms-2 text-2xl text-[#7D8592]">
                      {item.icon}
                    </div>
                    <span className="ml-2 text-[16px] font-bold text-gray-400">
                      {item.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
