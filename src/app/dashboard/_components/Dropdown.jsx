import Link from "next/link";
import { FaUserPlus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import img from "../../../../public/dashboard/person.svg";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import ConfertPassword from "./ConfertPassword";
export default function Dropdown({ id }) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger
            className="w-24 md:w-48 px-0 md:px-4 py-1 md:py-3  md:text-sm leading-5 text-black font-normal md:font-bold bg-white transition duration-150 ease-in-out "
            asChild
          >
            <Button variant="outline" className="rounded-md border-0">
              <Image
                className="me-2 rounded-full"
                src={img}
                alt="sadasdsad"
                width={30}
                height={30}
              />
              مرحبا احمد الكاف
              <FaAngleDown className="ms-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ms-4 w-full md:w-56 bg-white">
            {/* <Link href="/login" className="pe-2 flex font-bold justify-end items-center text-end  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border border-b-2 border-x-0 border-t-0"> 
        <h1>تغير كلمة السر</h1>
      </Link> */}
            <ConfertPassword />
            <Link
              href="/"
              className="pe-2 flex font-bold justify-end items-center text-end  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rder-b-2 border-x-0 border-t-0"
            >
              عرض الموقع
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
