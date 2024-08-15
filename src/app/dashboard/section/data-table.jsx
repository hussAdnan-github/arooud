"use client";
import { Button } from "@/components/ui/button";
import { GoBell } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";
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

import { useState } from "react";
import Dropdown from "../_components/Dropdown";
import ButtonBack from "../_components/ButtonBack";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { IoSearchSharp } from "react-icons/io5";

export function DataTable({ columns, data }) {
  const formData = new FormData();

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
    formData.append("name_ar", data.sectionName);
    formData.append("name_en", data.sectionName);
    formData.append("status", data.status);
    formData.append("image", data.image[0]);
    try {
      await axios
        .post(
          "https://offers.pythonanywhere.com/v1/api/departments/departments/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
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
            className="max-w-md text-end rounded-full pe-10 drop-shadow-sm bg-white border-0"
          />
          <IoSearchSharp className="absolute me-2 text-2xl" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <Dialog className="gap-0">
            <DialogTrigger asChild>
              <Button className="bg-primaryColo shadow-md shadow-red-300 hover:bg-primaryColo text-white w-36">
                {" "}
                <FaPlus className="me-2" />
                أضافة قـسم
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
              <DialogHeader>
                <DialogTitle>أضافة قـسم</DialogTitle>
              </DialogHeader>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full text-end mt-8"
              >
                <div className="mb-4">
                  <label
                    // for="first_name"
                    className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                  >
                    اسم القسم
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end"
                    placeholder="حسيننن"
                    {...register("sectionName", {
                      required: "يجب أضافة أسم القسم",
                    })}
                  />
                  <p className="text-primaryColo">
                    {errors.sectionName?.message}
                  </p>
                </div>
                <div className="mt-6">
                  <label
                    // for="first_name"
                    className="block mb-4 text-sm font-medium text-gray-500 dark:text-white"
                  >
                    حالة القسم
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
                <div className="mt-6">
                  <label
                    // for="first_name"
                    className="block mb-4 text-sm font-medium text-gray-500 dark:text-white"
                  >
                    صورة{" "}
                  </label>

                  <label
                    className="block mb-2 text-sm font-medium update_img text-gray-500 dark:text-white"
                    htmlFor="file_input"
                  >
                    {" "}
                    <FaCircleChevronLeft className="text-gray-400 text-xl" />
                    إضافة صورة القسم{" "}
                  </label>
                  <input
                    className="  text-endblock w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    {...register("image", {
                      required: "يجب أضافة صورة القسم",
                    })}
                    type="file"
                  />
                  <p className="text-primaryColo">{errors.image?.message}</p>
                </div>
                <div className="felx flex-row space-x-4 mt-8">
                  <Button
                    type="submit"
                    className="bg-[#D3D3D3] hover:bg-[#D3D3D3] text-white rounded-2xl"
                  >
                    حفظ مع إضافة أخرى
                  </Button>
                  <Button
                    type="submit"
                    className="bg-primaryColo px-8 py-2 hover:bg-primaryColo text-white rounded-2xl"
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
              <span>({data.length})</span> الأقســام
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex w-full flex-col gap-2 ">
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <div
                className="w-full flex justify-between h-[91px]  bg-white rounded-lg items-center p-2"
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
              
                {row.getVisibleCells().map((cell) => (
                  <div key={cell.id} className="">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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

      <div className="inline-flex items-start gap-4 bg-white px-3 py-2 rounded-lg drop-shadow-md absolute -bottom-80">
        <div>
          <button
            className="me-4 text-primaryColo cursor-pointer"
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
          >
            <FaArrowLeft />
          </button>
          <button
            className="text-primaryColo cursor-pointer"
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
            {table.getRowModel().rows.length}
          </h1>
        </div>
      </div>
    </div>
  );
}
