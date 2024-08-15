import { IoSearchSharp } from "react-icons/io5";

import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchBar() {
  return (
    <div>
      <form className=" mx-auto">
        <div className="flex">
          <div className="main_search ms-2 md:ms-8 md:w-full md:mx-12 h-[50px] bg-white dark:bg-socondaryDark">
            <Link
              href={""}
              className=" flex w-10 h-10 items-center md:w-[116px] text-white font-bold bg-primaryColo
md:h-full rounded-full justify-between md:px-6 px-2 "
              style={{ fontSize: "16px" }}
            >
              <IoSearchSharp
                className="search_icon me-2"
                style={{ fontSize: "18px" }}
              />
              بحـث
            </Link>
            <input
              type="text"
              className="text-end text-2xl bg-white dark:bg-socondaryDark"
            />
            <Select className="bg-white ">
              <SelectTrigger className="w-[170px] border-0 hidden md:inline-flex">
                <SelectValue placeholder="كل الاصناف" className="font-bold" />
              </SelectTrigger>
              <SelectContent
                className="bg-white dark:bg-socondaryDark w-44 right-8"
                style={{ zIndex: "99999" }}
              >
                <SelectGroup>
                  <SelectItem
                    value="all"
                    className="cursor-pointer bg  w-full    ease-in duration-300 "
                  >
                    كل الاصناف{" "}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* 
<select id="mySelect" name="mySelect" className="">
  <option value="">كل الاصناف</option>
  <option value="option1" className="a">1</option>
  <option value="option1">1</option>
  <option value="option1">1</option>
  <option value="option1">1</option>
</select> */}
          </div>
        </div>
      </form>
    </div>
  );
}
