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
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import Dropdown from "../../_components/Dropdown";
import { BiEdit } from "react-icons/bi";
import ButtonBack from "../../_components/ButtonBack";
import { useForm } from "react-hook-form";
import axios from "axios";
export function DataTable({ columns, data ,country}) {
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
  } = useForm({});

  const createPost = async (data) => {
    try {
      const response = await axios.post(
        "https://offers.pythonanywhere.com/v1/api/places/provinec/",
        {
          name_ar: data.name,
          name_en: data.name,
          status: data.state,
          country: data.country,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
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
                <Button className="bg-primaryColo rounded-xl shadow-md shadow-red-300 hover:bg-primaryColo text-white w-44">
                  {" "}
                  <FaPlus className="me-2" />
                  إضافة محافظة
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                  <DialogTitle>إضافة محافظة</DialogTitle>
                </DialogHeader>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full text-end mt-8 mb-4"
                >
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      اسم المحافظة
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end"
                      placeholder="اسم الدولة"
                      {...register("name", {
                        required: "يجب أضافة أسم المحافظة",
                      })}
                    />
                    <p className="text-primaryColo">{errors.name?.message}</p>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      دولة المحافظة{" "}
                    </label>

                    <div className="flex items-center gap-5 justify-end">
                      <FaRegEye className="text-2xl text-gray-500" />
                      <BiEdit className="text-2xl" />
                      <FaPlus className="text-xl" />

                      <select
                        className="w-full border cursor-pointer border-[#b9b5b5a1] text-gray-500 bg-white rounded-md  h-11 text-sm"
                        style={{ direction: "rtl" }}
                        {...register("country", {
                          required: "يجب أضافة أسم الدولة",
                        })}
                      >
                        {country.map((item) => (
                          <option key={item.id} value={item.id}>{item.name_ar}</option>
                        ))}
                      </select>
                    </div>
                    <p className="text-primaryColo">{errors.country?.message}</p>
                  </div>

                  <div className="mt-6">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500 dark:text-white"
                    >
                      حالة المحافظة{" "}
                    </label>
                    <div className="flex items-center gap-5 justify-end">
                      <FaRegEye className="text-2xl text-gray-500" />
                      <BiEdit className="text-2xl" />
                      <FaPlus className="text-xl" />

                      <select
                        className="w-full border cursor-pointer border-[#b9b5b5a1] text-gray-500 bg-white rounded-md  h-11 text-sm"
                        style={{ direction: "rtl" }}
                        {...register("status", {
                          required: "يجب أضافة حالة المحافظة",
                        })}
                      >
                        <option value="1">قيد الانشاء</option>
                        <option value="2">تم الانشاء</option>
                        <option value="3">تم التوقف</option>
                      </select>
                    </div>
                    <p className="text-primaryColo">{errors.status?.message}</p>
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
                ({data.length}) المحافظات
              </h1>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full flex-col gap-2 ">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <div
                  className="w-full flex justify-between h-9  drop-shadow-sm bg-white rounded-lg items-center p-2"
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
