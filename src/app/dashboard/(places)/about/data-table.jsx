"use client";
import { Button } from "@/components/ui/button";
import { IoSearchSharp } from "react-icons/io5";
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

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import ButtonBack from "../../_components/ButtonBack";
import { useForm } from "react-hook-form";
import axios from "axios";
import Dropdown from "../../_components/Dropdown";
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
    const formData = new FormData();

    formData.append("goal_ar", data.goalName);
    formData.append("goal_en", data.goalName);
    formData.append("image_goal", data.goalimage[0]);
    formData.append("message_ar", data.messageName);
    formData.append("message_en", data.messageName);
    formData.append("image_message", data.messageimage[0]);
    formData.append("idea_ar", data.ideaName);
    formData.append("idea_en", data.ideaName);
    formData.append("image_idea", data.ideaimage[0]);
    formData.append("vision_ar", data.visionName);
    formData.append("vision_en", data.visionName);
    formData.append("image_vision", data.visionimage[0]);
    formData.append("status", data.status);

    try {
      await axios
        .post(
          "https://offers.pythonanywhere.com/v1/api/places/arewe/",
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
            value={table.getColumn("create_at")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("create_at")?.setFilterValue(event.target.value)
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
                <Button className="bg-primaryColo rounded-xl hover:bg-primaryColo shadow-md shadow-red-300 text-white w-44">
                  {" "}
                  <FaPlus className="me-2" />
                  إضافة من نحن
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] h-[600px] overflow-scroll bg-white">
                <DialogHeader>
                  <DialogTitle>إضافة من نحن</DialogTitle>
                </DialogHeader>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full text-end mt-8 mb-4"
                >
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500  ">
                      الهدف 
                    </label>
                    <textarea
                      rows="4"
                      className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="أضف بعض الوصف الهدف "
                      {...register("goalName", {
                        required: "يجب أضافة وصف الهدف",
                      })}
                    ></textarea>
                    <p className="text-primaryColo">
                      {errors.goalName?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500  "
                    >
                      صورة غلاف الهدف{" "}
                    </label>

                    <label
                      className="block mb-2 text-sm font-medium update_img text-gray-500  "
                      htmlFor="file_input"
                    >
                      {" "}
                      <FaCircleChevronLeft className="text-gray-400 text-xl" />
                      إضافة صورة غلاف الهدف
                    </label>
                    <input
                      className="  text-endblock w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                      {...register("goalimage", {
                        required: "يجب أضافة صورة غلاف الهدف",
                      })}
                    />
                    <p className="text-primaryColo">
                      {errors.goalimage?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500  ">
                      الرسالة  
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="أضف بعض الوصف الرسالة  "
                      {...register("messageName", {
                        required: "يجب أضافة وصف الرسالة",
                      })}
                    ></textarea>
                    <p className="text-primaryColo">
                      {errors.messageName?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500  "
                    >
                      صورة غلاف الرسالة  {" "}
                    </label>

                    <label
                      className="block mb-2 text-sm font-medium update_img text-gray-500  "
                      htmlFor="file_input2"
                    >
                      {" "}
                      <FaCircleChevronLeft className="text-gray-400 text-xl" />
                      إضافة صورة غلاف الرسالة  
                    </label>
                    <input
                      className="  text-endblock w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input2"
                      type="file"
                      {...register("messageimage", {
                        required: "يجب أضافة صورة غلاف الرسالة",
                      })}
                    />
                    <p className="text-primaryColo">
                      {errors.goal_ar?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500  ">
                      الفكرة  
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="أضف بعض الوصف الفكرة  "
                      {...register("ideaName", {
                        required: "يجب أضافة وصف الفكرة",
                      })}
                    ></textarea>
                    <p className="text-primaryColo">
                      {errors.ideaName?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500  "
                    >
                      صورة غلاف الفكرة  {" "}
                    </label>

                    <label
                      className="block mb-2 text-sm font-medium update_img text-gray-500  "
                      htmlFor="file_input3"
                    >
                      {" "}
                      <FaCircleChevronLeft className="text-gray-400 text-xl" />
                      إضافة صورة غلاف الفكرة  
                    </label>
                    <input
                      className="  text-endblock w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input3"
                      type="file"
                      {...register("ideaimage", {
                        required: "يجب أضافة صورة غلاف الفكرة",
                      })}
                    />
                    <p className="text-primaryColo">
                      {errors.ideaimage?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500  ">
                      الرؤية
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="أضف بعض الوصف الرؤية"
                      {...register("visionName", {
                        required: "يجب أضافة وصف الرؤية",
                      })}
                    ></textarea>
                    <p className="text-primaryColo">
                      {errors.visionName?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500  "
                    >
                      صورة غلاف الرؤية{" "}
                    </label>

                    <label
                      className="block mb-2 text-sm font-medium update_img text-gray-500  "
                      htmlFor="file_input4"
                    >
                      {" "}
                      <FaCircleChevronLeft className="text-gray-400 text-xl" />
                      إضافة صورة غلاف الرؤية
                    </label>
                    <input
                      className="  text-endblock w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input4"
                      type="file"
                      {...register("visionimage", {
                        required: "يجب أضافة صورة غلاف الرؤية",
                      })}
                    />
                    <p className="text-primaryColo">
                      {errors.visionimage?.message}
                    </p>
                  </div>

                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500  "
                    >
                      الحالة
                    </label>

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
                    <p className="text-primaryColo">{errors.status?.message}</p>
                  </div>
                  <div className="felx flex-row space-x-4 mt-8">
                    <Button
                      type="submit"
                      className="bg-[#D3D3D3] hover:bg-[#D3D3D3] text-white rounded-xl"
                    >
                      حفظ مع إضافة أخرى{" "}
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
                ({data.length}) من نحن
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
