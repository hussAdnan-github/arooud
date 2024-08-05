"use client";
import { Button } from "@/components/ui/button";
import { IoSearchSharp } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { FaPlus, FaRegEye } from "react-icons/fa";
import { FaArrowRightLong, FaCircleChevronLeft } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import Dropdown from "../../_components/Dropdown";
import ButtonBack from "../../_components/ButtonBack";
import { BiEdit } from "react-icons/bi";
import { TiPlus } from "react-icons/ti";

export function DataTable({ columns, data }) {
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
            className="max-w-md text-end rounded-full pe-10 bg-white drop-shadow-sm border-0"
          />
          <IoSearchSharp className="absolute me-2 text-2xl" />
        </div>
      </div>
      <div className="w-[870px]">
        <div className="flex justify-between items-center">
          <div>
            <Dialog className="gap-0">
              <DialogTrigger asChild>
                <Button className="bg-primaryColo rounded-xl shadow-md shadow-red-300 hover:bg-primaryColo text-white w-36">
                  {" "}
                  <FaPlus className="me-2" />
                  إضافة موقع الالكتروني{" "}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[570px] h-[600px] overflow-scroll bg-white">
                <DialogHeader>
                  <DialogTitle>اضافة المتجر إلكتروني</DialogTitle>
                </DialogHeader>

                <form className="w-full text-end mt-8">
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      اسم الموقع الإلكتروني
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
                    <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                      نبذة الموقع الإلكتروني
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
                      className="block mb-4 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      شعار الموقع الإلكتروني{" "}
                    </label>

                    <label
                      className="block mb-2 text-sm font-medium update_img text-gray-500 dark:text-white"
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
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      مالك المتجر{" "}
                    </label>
                    <div className="flex items-center gap-5 justify-end">
                      <FaRegEye className="text-2xl text-gray-500" />
                      <BiEdit className="text-2xl" />
                      <FaPlus className="text-xl" />

                      <Select>
                        <SelectTrigger className="w-3/4 border-gray-300 text-[#9796A1]">
                          <SelectValue placeholder="انتظاار" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-end">
                          <SelectGroup className="text-end">
                            <SelectItem
                              className=" text-[#9796A1] text-end"
                              value="انتظاار"
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
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      مجالات المتحر الإلكتروني{" "}
                    </label>
                    <div
                      className="grid grid-cols-4 "
                      style={{ direction: "rtl" }}
                    >
                      <div className="w-28 text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                        <h1 className="text-[#7D7E80]">الكتروتيات</h1>
                      </div>
                      <div className="w-28 text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                        <h1 className="text-[#7D7E80]">مواد غذائية</h1>
                      </div>
                      <div className="w-28 text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                        <h1 className="text-[#7D7E80]">ادوات تجميل</h1>
                      </div>
                      <div className="w-28 text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                        <h1 className="text-[#7D7E80]">جوالات</h1>
                      </div>
                      <div className="w-28 mt-2 text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                        <h1 className="text-[#7D7E80]">جوالات</h1>
                      </div>
                      <div className="w-28 mt-2 text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                        <h1 className="text-[#7D7E80]">جوالات</h1>
                      </div>
                      <div className="flex justify-center items-center w-28 mt-2 bg-[#F6F6F6] text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                        <TiPlus className="text-xl" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      البريد الاكتروني
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
                      className="block mb-4 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      رقم الهاتف
                    </label>

                    <div className="flex  justify-between gap-2">
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                        placeholder="777777777777"
                        required
                      />
                      <Select>
                        <SelectTrigger className="w-20   border-gray-300 text-[#9796A1]">
                          <SelectValue placeholder="+967" />
                        </SelectTrigger>
                        <SelectContent className="bg-white ">
                          <SelectGroup>
                            {/* <SelectLabel>قيد الأنشــاء</SelectLabel> */}
                            <SelectItem
                              value="+967"
                              className=" text-[#9796A1] text-end"
                            >
                              +967
                            </SelectItem>

                            <SelectItem
                              className=" text-[#9796A1] text-end"
                              value="05"
                            >
                              05
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      رابط المتجر الإلكتروني{" "}
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
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      المدينة{" "}
                    </label>
                    <div className="flex items-center gap-5 justify-end">
                      <FaRegEye className="text-2xl text-gray-500" />
                      <BiEdit className="text-2xl" />
                      <FaPlus className="text-xl" />

                      <Select>
                        <SelectTrigger className="w-3/4 border-gray-300 text-[#9796A1]">
                          <SelectValue placeholder="المكلا" />
                        </SelectTrigger>
                        <SelectContent className="bg-white ">
                          <SelectGroup>
                           

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
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
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
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
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
                </form>

                <DialogFooter>
                  <Button
                    type="submit"
                    className="bg-[#D3D3D3] hover:bg-[#D3D3D3] text-white rounded-xl"
                  >
                    أضافة مع أضافة أخرى
                  </Button>
                  <Button
                    type="submit"
                    className="bg-primaryColo hover:bg-primaryColo text-white rounded-xl"
                  >
                    أضافة
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <div className="text-end my-2">
              <ButtonBack />

              <h1 className="text-3xl font-bold my-4">
                <span> (1215) </span>
                المواقع الالكترونية{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full flex-col gap-2">
            {/* <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                 </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader> */}
            {/* <TableBody className="bg-blue-700 rounded-full"> */}
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
      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div> */}
      <div className="inline-flex items-start gap-4 bg-white px-3 py-2 rounded-lg drop-shadow-md">
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
