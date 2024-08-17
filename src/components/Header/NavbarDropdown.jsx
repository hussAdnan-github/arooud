import Link from "next/link";
import { FaUserPlus } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Dropdown({ id }) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger
            className="w-24  md:w-[155px] h-[34px] px-0 md:px-4 py-1 md:py-3 text-[11px] pb-3 sm:pb-0 md:text-sm leading-5 text-white font-normal md:font-bold bg-primaryColo hover:bg-primaryColo hover:text-white hover:border-0 "
            asChild
          >
            <Button
              variant="outline"
              className="hover:-translate-y-1 hover:scale-100 transition duration-150 ease-in-out rounded-full"
            >
              تسجيل الدخول
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="ms-4 w-44 md:w-48 bg-[#D3D1D8] dark:bg-socondaryDark"
            style={{ zIndex: "99999" }}
          >
           
            <Link
              href="/signin"
              className="flex font-bold justify-end items-center text-end  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border border-gray-200 border-b-2 border-x-0 border-t-0 hover:pe-2 ease-in-out duration-300 "
            >
                  التسجيل كمستخدم
              <FaUserPlus className="ms-2 text-gray-400" />
            </Link>
            <Link
              href="/marketsignin"
              className="flex font-bold justify-end items-center text-end  py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border border-gray-200 border-b-2 border-x-0 border-t-0 hover:pe-2 ease-in-out duration-300 "
            >
              التسجيل كمحل تجاري
              <FaUserPlus className="ms-2 text-gray-400" />
            </Link>
            <Link
              href="/websitesignin"
              className="flex font-bold justify-end items-center text-end   py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:pe-2 ease-in-out duration-300 "
            >
              التسجيل كمتجر الكتروني
              <FaUserPlus className="ms-2 text-gray-400" />
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
