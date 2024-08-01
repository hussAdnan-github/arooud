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
import ConfertPassword from "../../_components/ConfertPassword";
import DatePicker from "../../_components/DatePicker";
import { Clock8 } from "lucide-react";
import { BiEdit } from "react-icons/bi";
import Password from "@/components/Password";

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
            <Dialog className="gap-0 ">
              <DialogTrigger asChild>
                <Button className="bg-primaryColo rounded-xl hover:bg-primaryColo text-white w-36">
                  {" "}
                  <FaPlus className="me-2" />
                  إضافة مستخدم
                </Button>
              </DialogTrigger>
              <DialogContent className="DialogContent sm:max-w-[540px] h-[600px]   overflow-scroll bg-white">
                <DialogHeader>
                  <DialogTitle>إضافة مستخدم</DialogTitle>
                </DialogHeader>
                <h1 className="text-end text-[16px] font-medium	mt-4">
                  معلومات شخصية
                </h1>
                <form className="w-full text-end">
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      الاسم الأول{" "}
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
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      الاسم الأخير{" "}
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
                  <div className="mt-6">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      رقم الهاتف
                    </label>

                    <div className="flex justify-between">
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-96 p-2.5  text-end"
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
                  <div className="mt-6">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      الصورة الشخصية{" "}
                    </label>

                    <label
                      className="block mb-2 text-sm font-medium update_img text-gray-500 dark:text-white"
                      for="file_input"
                    >
                      {" "}
                      <FaCircleChevronLeft className="text-gray-400 text-xl" />
                      إضافة صورة الشخصية
                    </label>
                    <input
                      className="  text-endblock w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                    />
                  </div>
                  <h1 className="text-end text-[16px] font-medium	mt-8 mb-3">
                    معلومات الحساب
                  </h1>

                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      اسم المستخدم
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
                      كلمة المرور{" "}
                    </label>
                    <Password />
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      نوع المستخدم
                    </label>

                    <Select>
                      <SelectTrigger className="w-full   border-gray-300 text-[#9796A1]">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent className="bg-white ">
                        <SelectGroup>
                          {/* <SelectLabel>قيد الأنشــاء</SelectLabel> */}
                          <SelectItem className=" text-[#9796A1] text-end">
                            عميل
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

                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                      >
                        تاريخ الانضمام{" "}
                      </label>
                      <DatePicker />
                    </div>
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                      >
                        وقت الانضمام{" "}
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                          placeholder="حسيننن"
                          required
                        />
                        <div className="absolute left-4 text-[#858D97] text-xl">
                          <Clock8 />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 ">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      صلاحيات المستخدم
                    </label>
                    <div className="border rounded-lg info-scroll overflow-y-scroll h-52">
                      <h1 className="text-sm bg-[#E9E9E940] px-2 py-3">
                        يمكن اضافة مستخدم
                      </h1>
                      <h1 className="text-sm   px-2 py-3">يمكن اضافة مستخدم</h1>
                      <h1 className="text-sm bg-[#E9E9E940] px-2 py-3">
                        يمكن اضافة مستخدم
                      </h1>
                      <h1 className="text-sm px-2 py-3">يمكن اضافة مستخدم</h1>
                      <h1 className="text-sm bg-[#E9E9E940] px-2 py-3">
                        يمكن اضافة مستخدم
                      </h1>
                      <h1 className="text-sm px-2 py-3">يمكن اضافة مستخدم</h1>
                    </div>
                  </div>
                  <div className="checkbox_user mt-4">
                    <div className="mt-2">
                      <div className=" flex  items-start  justify-end">
                        <div className="flex flex-col">
                          <label htmlFor="" className=" font-bold">
                            حالة المستخدم الفائق{" "}
                          </label>
                          <h1 className="text-xs text-gray-400">
                            يقضي بأن هذا المستخدم يمتلك كافة الصلاحيات دون
                            الحاجة لمنحها له تصريحاً
                          </h1>
                        </div>
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="accent-primaryColo mt-1 me-2 w-6 h-6 ms-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className=" flex  items-start  justify-end">
                        <div className="flex flex-col">
                          <label htmlFor="" className=" font-bold">
                            حالة الطاقم{" "}
                          </label>
                          <h1 className="text-xs text-gray-400">
                            يحدد ما إذا كان يمكن للمستخدم الدخول إلى موقع
                            الإدارة هذا
                          </h1>
                        </div>
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="accent-primaryColo mt-1 me-2 w-6 h-6 ms-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className=" flex  items-start  justify-end">
                        <div className="flex flex-col">
                          <label htmlFor="" className=" font-bold">
                            نشط
                          </label>
                          <h1 className="text-xs text-gray-400">
                            يحدد ما إذا كان المستخدم سيُعامل على أنّه نشط. أزل
                            تحديد هذا الحقل بدلاً من حذف الحسابات
                          </h1>
                        </div>
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="accent-primaryColo mt-1 me-2 w-6 h-6 ms-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                    </div>
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

              <h1 className="text-3xl font-bold my-4">(1215) المستخدمين</h1>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full flex-col gap-2">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <div
                  className="w-full flex justify-between h-[91px] bg-white drop-shadow-sm rounded-2xl items-center p-2"
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
          </div>
        </div>
      </div>

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
