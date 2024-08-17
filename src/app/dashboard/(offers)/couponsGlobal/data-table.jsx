"use client";
import { Button } from "@/components/ui/button";
import { IoSearchSharp } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { FaPlus, FaRegEye } from "react-icons/fa";
import {   FaCircleChevronLeft } from "react-icons/fa6";
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

export function DataTable({ columns, data, currency, website }) {
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
                  إضافة كوبون
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[540px] h-[600px] overflow-scroll bg-white">
                <DialogHeader>
                  <DialogTitle>إضافة  كوبون عالمي</DialogTitle>
                </DialogHeader>
                <h1 className="text-end text-[16px] font-medium	mt-4">
                  معلومات شخصية
                </h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full text-end"
                >
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500  "
                    >
                      اسم الكوبون{" "}
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="كوبون"
                      {...register("name", {
                        required: "يجب أضافة أسم الكوبون",
                      })}
                    />
                    <p className="text-primaryColo">{errors.name?.message}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500  ">
                      نبذة عن الكوبون  {" "}
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="أضف بعض الوصف الكوبون المحلي"
                      {...register("description", {
                        required: "يجب أضافة الوصف للكوبون ",
                      })}
                    ></textarea>
                    <p className="text-primaryColo">
                      {errors.description?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500  ">
                      شروط الاستخدام{" "}
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="أضف بعض الشروط الاستخدام"
                      {...register("trem_use", {
                        required: "يجب أضافة شروط الاستخدام",
                      })}
                    ></textarea>
                    <p className="text-primaryColo">
                      {errors.trem_use?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500  "
                    >
                      صورة غلاف الكوبون{" "}
                    </label>

                    <label
                      className="block mb-2 text-sm font-medium update_img text-gray-500  "
                      for="file_input"
                    >
                      {" "}
                      <FaCircleChevronLeft className="text-gray-400 text-xl" />
                      إضافة صورة غلاف الكوبون{" "}
                    </label>
                    <input
                      className="  text-endblock w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                      {...register("image", {
                        required: "يجب أضافة صورة الكوبون",
                      })}
                    />
                    <p className="text-primaryColo">{errors.image?.message}</p>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500  "
                    >
                      الجهة المنشئة{" "}
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="شركرة دن"
                      required
                      {...register("compony", {
                        required: "يجب أضافة الجهة المنشئة",
                      })}
                    />
                    <p className="text-primaryColo">
                      {errors.compony?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500  "
                    >
                      المتجر الإلكتروني{" "}
                    </label>
                    <div className="flex items-center   justify-end">
                      <div className="flex gap-5 me-5">
                        <FaRegEye className="text-2xl text-gray-500" />
                        <BiEdit className="text-2xl" />
                        <FaPlus className="text-xl" />
                      </div>

                      <select
                        {...register("website", {
                          required: "يجب أضافة أسم القسم",
                        })}
                        className="w-full border cursor-pointer border-[#b9b5b5a1] text-[#b9b5b5a1] bg-white rounded-md  h-11 text-sm"
                        style={{ direction: "rtl" }}
                      >
                        {website.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name_ar}
                          </option>
                        ))}
                      </select>
                      <p className="text-primaryColo">
                        {errors.website?.message}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500  "
                    >
                      نوع العملة{" "}
                    </label>
                    <div className="flex items-center  justify-end">
                    <div className="flex gap-5 me-5">
                        <FaRegEye className="text-2xl text-gray-500" />
                        <BiEdit className="text-2xl" />
                        <FaPlus className="text-xl" />
                      </div>

                      <select
                        {...register("currency", {
                          required: "يجب أضافة أسم القسم",
                        })}
                        className="w-full border cursor-pointer border-[#b9b5b5a1] text-[#b9b5b5a1] bg-white rounded-md  h-11 text-sm"
                        style={{ direction: "rtl" }}
                      >
                        {currency.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name_ar}
                          </option>
                        ))}
                      </select>
                      <p className="text-primaryColo">
                        {errors.currency?.message}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500  "
                    >
                      حالة الكوبون {" "}
                    </label>
                    <select
                      {...register("status", {
                        required: "يجب أضافة أسم القسم",
                      })}
                      className="w-full border cursor-pointer border-[#b9b5b5a1] text-[#b9b5b5a1] bg-white rounded-md  h-11 text-sm"
                      style={{ direction: "rtl" }}
                    >
                      <option value="1">قيد الانشاء</option>
                      <option value="2">تم الانشاء</option>
                      <option value="3">تم التوقف</option>
                    </select>
                    <p className="text-primaryColo">{errors.status?.message}</p>
                  </div>

                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500  "
                      >
                        تاريخ انتهاء الكوبون{" "}
                      </label>
                      <DatePicker />
                    </div>
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500  "
                      >
                        وقت انتهاء الكوبون{" "}
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
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500  "
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
                            required: "يجب أضافة عدد الاستخدام",
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
                        className="block mb-2 text-sm font-medium text-gray-500  "
                      >
                        قيمة الكوبون
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                          placeholder="حسيننن"
                          {...register("price", {
                            required: "يجب أضافة قيمة الكوبون",
                          })}
                        />
                        <p className="text-primaryColo">
                          {errors.price?.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500  "
                    >
                      نوع الخصم{" "}
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
                 الكوبونات العالمية <span>({data.length})</span>
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
