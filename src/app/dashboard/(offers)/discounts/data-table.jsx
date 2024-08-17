"use client";

import { GoBell } from "react-icons/go";
import { FaPlus, FaRegEye } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

import { Clock8 } from "lucide-react";
import { useForm } from "react-hook-form";
import { IoSearchSharp } from "react-icons/io5";

export function DataTable({ columns, data, section, website, shope }) {
  const [columnFilters, setColumnFilters] = useState([]);
  const [date, setDate] = useState();

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
            value={table.getColumn("name_ar")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("name_ar")?.setFilterValue(event.target.value)
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
                  إضافة عرض
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[540px] h-[600px] overflow-scroll bg-white">
                <DialogHeader>
                  <DialogTitle>إضافة العروض والخصومات</DialogTitle>
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
                      اسم العرض{" "}
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="حسيننن"
                      {...register("name", {
                        required: "يجب أضافة أسم العرض",
                      })}
                    />
                    <p className="text-primaryColo">{errors.name?.message}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500  ">
                      نبذة عن العرض 
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="أضف بعض الوصف للعرض"
                      {...register("description", {
                        required: "يجب أضافة نبذة عن العرض",
                      })}
                    ></textarea>
                    <p className="text-primaryColo">
                      {errors.description?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500  "
                    >
                      صورة غلاف العرض{" "}
                    </label>

                    <label
                      className="block mb-2 text-sm font-medium update_img text-gray-500  "
                      for="file_input"
                    >
                      {" "}
                      <FaCircleChevronLeft className="text-gray-400 text-xl" />
                      إضافة صورة غلاف العرض{" "}
                    </label>
                    <input
                      className="  text-endblock w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                      {...register("image", {
                        required: "يجب أضافة صورة العرض",
                      })}
                    />
                    <p className="text-primaryColo">{errors.image?.message}</p>
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
                        {...register("section", {
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
                        {errors.section?.message}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500  "
                    >
                      المحل التجاري{" "}
                    </label>
                    <div className="flex items-center   justify-end">
                      <div className="flex gap-5 me-5">
                        <FaRegEye className="text-2xl text-gray-500" />
                        <BiEdit className="text-2xl" />
                        <FaPlus className="text-xl" />
                      </div>

                      <select
                        {...register("section", {
                          required: "يجب أضافة أسم القسم",
                        })}
                        className="w-full border cursor-pointer border-[#b9b5b5a1] text-[#b9b5b5a1] bg-white rounded-md  h-11 text-sm"
                        style={{ direction: "rtl" }}
                      >
                        {shope.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name_ar}
                          </option>
                        ))}
                      </select>
                      <p className="text-primaryColo">
                        {errors.section?.message}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500  "
                    >
                      القسم{" "}
                    </label>
                    <div className="flex items-center   justify-end">
                      <div className="flex gap-5 me-5">
                        <FaRegEye className="text-2xl text-gray-500" />
                        <BiEdit className="text-2xl" />
                        <FaPlus className="text-xl" />
                      </div>

                      <select
                        {...register("section", {
                          required: "يجب أضافة أسم القسم",
                        })}
                        className="w-full border cursor-pointer border-[#b9b5b5a1] text-[#b9b5b5a1] bg-white rounded-md  h-11 text-sm"
                        style={{ direction: "rtl" }}
                      >
                        {section.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name_ar}
                          </option>
                        ))}
                      </select>
                      <p className="text-primaryColo">
                        {errors.section?.message}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500  "
                    >
                      حالة العرض{" "}
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

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500  "
                      >
                        تاريخ انتهاء العرض{" "}
                      </label>

                      {/* <Popover>
                        <PopoverTrigger {...register("date")} asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-between text-left font-normal   border-[#DADADA] ",
                              !date &&
                                "text-muted-foreground text-[#7D8592] hover:text-[#7D8592]"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? (
                              format(date, "PPP", { locale: ar })
                            ) : (
                              <span>حدد التاريخ</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            locale={ar}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover> */}
                    </div>
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500  "
                      >
                        وقت انتهاء العرض{" "}
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
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500  "
                      >
                        السعر قبل{" "}
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                          placeholder="حسيننن"
                          {...register("after_price", {
                            required: "يجب أضافة السعر قبل",
                          })}
                        />
                      </div>
                      <p className="text-primaryColo">
                        {errors.after_price?.message}
                      </p>
                    </div>
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500  "
                      >
                        السعر بعد{" "}
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                          placeholder="حسيننن"
                          {...register("before_price", {
                            required: "يجب أضافة السعر بعد",
                          })}
                        />
                      </div>
                      <p className="text-primaryColo">
                        {errors.before_price?.message}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex justify-end w-full text-center gap-4">
                      <label htmlFor="">هل العرض مميز</label>
                      <input
                        type="checkbox"
                        id="first_name"
                        className="w-[16px]"
                        placeholder="حسيننن"
                        {...register("checkbox")}
                      />
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
                {" "}
                العروض والخصومات <span>({data.length})</span>
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
