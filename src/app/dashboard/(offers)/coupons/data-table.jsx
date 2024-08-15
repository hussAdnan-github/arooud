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
import DatePicker from "../../_components/DatePicker";
import { Clock8 } from "lucide-react";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {},
  });
  const createPost = async (data) => {
    console.log(data);
  };
  const onSubmit = async (data) => {
    createPost(data);
  };
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
            className="max-w-md text-end rounded-full pe-10  drop-shadow-sm bg-white border-0"
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
                  إضافة قسيمة
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[540px] h-[600px] overflow-scroll bg-white">
                <DialogHeader>
                  <DialogTitle>إضافة قسيمة</DialogTitle>
                </DialogHeader>

                <form
                  className="w-full text-end"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      اسم القسيمة{" "}
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="قسيمة"
                      {...register("name", {
                        required: "يجب أضافة أسم القسيمة",
                      })}
                    />
                    <p className="text-primaryColo">{errors.name?.message}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                      نبذة عن القسيمة  {" "}
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="أضف بعض الوصف القسيمة"
                      {...register("description", {
                        required: "يجب أضافة أسم القسم",
                      })}
                    ></textarea>
                    <p className="text-primaryColo">
                      {errors.description?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                      شروط الاستخدام{" "}
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="أضف بعض الشروط الاستخدام"
                      {...register("trem_use", {
                        required: "يجب أضافة أسم القسم",
                      })}
                    ></textarea>
                    <p className="text-primaryColo">
                      {errors.trem_use?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      صورة غلاف القسيمة{" "}
                    </label>

                    <label
                      className="block mb-2 text-sm font-medium update_img text-gray-500 dark:text-white"
                      for="file_input"
                    >
                      {" "}
                      <FaCircleChevronLeft className="text-gray-400 text-xl" />
                      إضافة صورة غلاف القسيمة{" "}
                    </label>
                    <input
                      className="  text-endblock w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                      {...register("image", {
                        required: "يجب أضافة أسم القسم",
                      })}
                    />
                    <p className="text-primaryColo">{errors.image?.message}</p>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      المتجر الإلكتروني
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
                      المحل التجاري{" "}
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
                      نوع العملة{" "}
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
                      حالة القسيمة {" "}
                    </label>
                    <Select>
                      <SelectTrigger className="w-full border-gray-300 text-[#9796A1]">
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

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                      >
                        تاريخ انتهاء القسيمة{" "}
                      </label>
                      <DatePicker />
                    </div>
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                      >
                        وقت انتهاء القسيمة{" "}
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                          placeholder="حسيننن"
                        />
                        <div className="absolute left-4 text-[#858D97] text-xl">
                          <Clock8 />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                      >
                        عدد الاستخدام
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                          placeholder="حسيننن"
                          {...register("number_use", {
                            required: "يجب أضافة أسم القسم",
                          })}
                        />
                        <p className="text-primaryColo">
                          {errors.number_use?.message}
                        </p>
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                      >
                        قيمة القسية
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                          {...register("price", {
                            required: "يجب أضافة قيمة لقسيمة",
                          })}
                        />
                        <p className="text-primaryColo">
                          {errors.price?.message}
                        </p>
                      </div>
                    </div>
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
                القسائم <span>({data.length})</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full flex-col gap-2">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <div
                  className="w-full flex justify-between h-[91px]  drop-shadow-sm bg-white rounded-2xl items-center p-2"
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
