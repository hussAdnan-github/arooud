"use client";
import { Button } from "@/components/ui/button";
import { IoSearchSharp } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { FaPlus, FaRegEye } from "react-icons/fa";
import {  FaCircleChevronLeft } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import Dropdown from "../../_components/Dropdown";
import ButtonBack from "../../_components/ButtonBack";
import { BiEdit } from "react-icons/bi";
import AddSection from "../../_components/AddSection";

export function DataTable({ columns, data, section, country }) {
  const [columnFilters, setColumnFilters] = useState([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center  gap-6">
          <Dropdown />
          <GoBell className="text-black rounded-lg p-2 text-4xl  bg-white drop-shadow-sm" />
        </div>
        <div className="flex items-center justify-end py-4 relative flex-auto">
          <Input
            placeholder="بحـث"
            value={table.getColumn("name")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-md text-end rounded-full pe-10 drop-shadow-sm bg-white border-0"
          />
          <IoSearchSharp className="absolute me-2 text-2xl" />
        </div>
      </div>
      <div className="w-[870px]">
        <div className="flex justify-between items-center">
          <div>
            <Dialog className="gap-0">
              <DialogTrigger asChild>
                <Button className="bg-primaryColo rounded-xl shadow-md shadow-red-300 hover:bg-primaryColo text-white   ">
                  {" "}
                  <FaPlus className="me-2" />
                  إضافة متجر إلكتروني
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[620px] h-[600px] overflow-scroll bg-white">
                <DialogHeader>
                  <DialogTitle>إضافة متجر إلكتروني</DialogTitle>
                </DialogHeader>

                <form className="w-full text-end mt-8">
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      اسم المحل التجاري
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="حسيننن"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500 ">
                      نبذة المحل التجاري
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="أضف بعض الوصف للمحل"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500 "
                    >
                      شعار المحل{" "}
                    </label>

                    <label
                      className="block mb-2 text-sm font-medium update_img text-gray-500 "
                      for="file_input"
                    >
                      {" "}
                      <FaCircleChevronLeft className="text-gray-400 text-xl" />
                      إضافة صورة شعار المحل
                    </label>
                    <input
                      className="  text-endblock w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      المستخدام المنشاء{" "}
                    </label>
                    <div className="flex items-center gap-5 justify-end">
                      <FaRegEye className="text-2xl text-gray-500" />
                      <BiEdit className="text-2xl" />
                      <FaPlus className="text-xl" />

                      <Select>
                        <SelectTrigger className="w-3/4 border-gray-300 text-[#9796A1]">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent className="bg-white ">
                          <SelectGroup>
                            {/* <SelectLabel>قيد الأنشــاء</SelectLabel> */}
                            <SelectItem className=" text-[#9796A1] text-end">
                              قيد الانشاء
                            </SelectItem>

                            <SelectItem
                              className=" text-[#9796A1] text-end"
                              value="apple"
                            >
                              انتظاار
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      مجالات المتجر الإلكتروني{" "}
                    </label>
                    <div
                      className="grid grid-cols-4 "
                      style={{ direction: "rtl" }}
                    >
                      {section.map((item) => (
                        <div
                          key={item.id}
                          className="w-32 mt-1 text-[#7D7E80] border border-[#DDDADB] text-center p-2 px-1 rounded-2xl"
                        >
                          <h1 className="text-[#7D7E80]">{item.name_ar}</h1>
                        </div>
                      ))}
                      <Dialog className="gap-0">
                        <DialogTrigger asChild>
                          <Button className="cursor-pointer flex justify-center items-center w-32 mt-2 bg-[#F6F6F6] text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                            <TiPlus className="text-xl" />
                          </Button>
                        </DialogTrigger>
                        <AddSection />
                      </Dialog>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="youremail@gmail.com"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      موقع المحل التجاري{" "}
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="youremail@gmail.com"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      المدينة{" "}
                    </label>
                    <div className="flex items-center   justify-end">
                      <div className="flex gap-5 me-5">
                        <BiEdit className="text-2xl" />
                        <FaPlus className="text-xl" />
                      </div>

                      <select
                        // {...register("section", {
                        //   required: "يجب أضافة أسم القسم",
                        // })}
                        className="w-full border cursor-pointer border-[#b9b5b5a1] text-[#b9b5b5a1] bg-white rounded-md  h-11 text-sm"
                        style={{ direction: "rtl" }}
                      >
                        {country.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name_ar}
                          </option>
                        ))}
                      </select>
                      {/* <p className="text-primaryColo">
                        {errors.section?.message}
                      </p> */}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      الفيس بوك
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="youremail@gmail.com"
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      انستقرام
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="youremail@gmail.com"
                      required
                    />
                  </div>

                  <div className="felx flex-row space-x-4 mt-8">
                    <Button
                      type="submit"
                      className="bg-[#D3D3D3] hover:bg-[#D3D3D3] text-white rounded-xl"
                    >
                      حفظ مع إضافة أخرى
                    </Button>
                    <Button
                      type="submit"
                      className="bg-primaryColo hover:bg-primaryColo text-white rounded-xl"
                    >
                      إضافة
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <div className="text-end my-2">
              <ButtonBack />

              <h1 className="text-3xl font-bold my-4">
                <span> ({data.length}) </span>
                المحلات التجارية{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full flex-col gap-2">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <div
                  className="w-full flex justify-between h-[91px] drop-shadow-sm bg-white rounded-2xl items-center p-2"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <div key={cell.id} className="">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <div>
                <div colSpan={columns.length} className="h-24 text-center">
                  ليس هناك مدخلات
                </div>
              </div>
            )}
            {/* </TableBody> */}
          </div>
        </div>
      </div>

      <div className="inline-flex items-start gap-4 bg-white px-3 py-2 rounded-lg drop-shadow-md absolute -bottom-80">
        <div>
          <button
            className="me-4 text-primaryColo "
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
          >
            <FaArrowLeft />
          </button>
          <button
            className="text-primaryColo "
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <h1 className="text-black text-sm font-bold">
            {table.getState().pagination.pageIndex + 1} {" - "}{" "}
            {table.getPageCount()} {"of"}
            {" 28"}
          </h1>
        </div>
      </div>
    </div>
  );
}
