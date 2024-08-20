"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import axios from "axios";
import { Clock8, MoreHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";

import Image from "next/image";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdOutlineCameraAlt } from "react-icons/md";
import { useState } from "react";
import Delete from "./Delete";
import DatePicker from "../../_components/DatePicker";

export default function Edite({ dataRow }) {
  const [date, setDate] = useState(new Date(dataRow.getValue('end_time')));

  const [previewImage, setPreviewImage] = useState("");
  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {
      name: dataRow.getValue("name_ar"),
      status: dataRow.getValue("status"),
      share: dataRow.getValue("urls_ar"),
     
    },
  });

  const createUpdate = async (data) => {
    const formData = new FormData();
    const formattedDateTime = date.toISOString();

    formData.append("name_ar", data.name);
    formData.append("name_en", data.name);
    formData.append("end_time", formattedDateTime);
    formData.append("image", data.image[0]);
    formData.append("type_advertising", 2);
    formData.append("urls_ar", "https://tailwindcss.com/docs/installation");
    formData.append("urls_en", "https://tailwindcss.com/docs/installation");
    formData.append("status", data.status);
    try {
      const response = await axios.put(
        `https://offers.pythonanywhere.com/v1/api/places/advertising/${dataRow.getValue(
          "id"
        )}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  };
  const onSubmit = async (data) => {
    createUpdate(data);
  };
  return (
    <div>
      <Dialog className="gap-0">
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 bg-[#F4F9FD] rounded-full rotate-90  "
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]  h-[600px] overflow-scroll bg-white">
          <DialogHeader>
            <DialogTitle>تعديل قـسم</DialogTitle>
          </DialogHeader>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full text-end mt-8"
          >
            <div className="mb-4">
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                اسم الاعلان
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end"
                placeholder="حسيننن"
                {...register("name")}
              />
              <p className="text-primaryColo">{errors.name?.message}</p>
            </div>
            <div className="mb-4">
              <label
                for="first_name"
                className="block mb-4 text-sm font-medium text-gray-500 dark:text-white"
              >
                حالة الاعلان
              </label>

              <select
                className="w-full border cursor-pointer text-gray-500 border-[#b9b5b5a1] bg-white rounded-md  h-11 text-sm"
                style={{ direction: "rtl" }}
                {...register("status")}
              >
                <option value="1">قيد الانشاء</option>
                <option value="2">تم الانشاء</option>
                <option value="3">تم التوقف</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                رابط داخل الصورة
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end"
                placeholder="حسيننن"
                {...register("share")}
              />
              <p className="text-primaryColo">{errors.share?.message}</p>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="w-full">
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                >
                  تاريخ انتهاء القسية{" "}
                </label>
                <Popover>
                  <PopoverTrigger asChild>
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
                </Popover>
              </div>
              <div className="w-full">
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                >
                  وقت انتهاء القسية{" "}
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                    placeholder="حسيننن"
                    required
                  />
                  <div className=" absolute left-4">
                    <Clock8 className="text-[#858D97]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                {" "}
                صورة الاعلان
              </label>
              <div className="relative w-full h-[230px] rounded-lg mt-2">
                <input
                  id="file"
                  type="file"
                  {...register("image")}
                  // onChange={handleFileChange}
                />
                <label htmlFor="file" className=" ">
                  <div className="bg-black rounded-lg opacity-40 w-full h-full absolute z-10 cursor-pointer "></div>
                  <Image
                    src={
                      previewImage ? previewImage : dataRow.getValue("image")
                    }
                    alt="Preview"
                    width={464}
                    height={233}
                    priority
                    className="rounded-lg w-full h-full border   object-contain"
                  />
                  <MdOutlineCameraAlt className="absolute top-[40%] left-[45%] cursor-pointer text-6xl text-white z-20" />
                </label>
              </div>
            </div>
            <div className="flex justify-end  space-x-4 mt-8">
              <div className="bg-[#D3D3D3] cursor-pointer hover:bg-[#D3D3D3] flex justify-center items-center w-16 text-white rounded-xl">
                <Delete id={dataRow.getValue("id")} />
              </div>
              <Button
                type="submit"
                className="bg-primaryColo hover:bg-primaryColo text-white rounded-xl"
              >
                تعديل
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
