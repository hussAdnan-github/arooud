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
import { MoreHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";
 

import { useState } from "react";
import Delete from "./Delete";
import { MdOutlineCameraAlt } from "react-icons/md";
import Image from "next/image";

export default function Edite({ dataRow }) {
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
      Name: dataRow.getValue("name_ar"),
      status: dataRow.getValue("status"),
      short: dataRow.getValue("cut_ar"),
    },
  });

  const createUpdate = async (data) => {
    // if (data.image && data.image[0]) {
    //   setPreviewImage(URL.createObjectURL(data.image[0]));
    //   console.log(setPreviewImage);
    // }
    // console.log(data.image[0]);
    // console.log(data);
    const formData = new FormData();
    formData.append("name_ar", data.Name);
    formData.append("name_en", data.Name);
    formData.append("cut_ar", data.short);
    formData.append("status", data.status);
    formData.append("cut_en", data.short);
    formData.append("icon", data.image[0]);
    try {
      const response = await axios.put(
        `https://offers.pythonanywhere.com/v1/api/offers/currency/${dataRow.getValue("id")}/`,
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
        <DialogContent className="sm:max-w-[425px] bg-white">
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
                اسم العملة{" "}
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end"
                placeholder="حسيننن"
                {...register("Name", {
                  required: "يجب أضافة أسم القسم",
                })}
              />
            </div>
            <div className="mb-4">
              <label
                for="first_name"
                className="block mb-4 text-sm font-medium text-gray-500 dark:text-white"
              >
                حالة العملة{" "}
              </label>

              <select
                      className="w-full border cursor-pointer border-[#b9b5b5a1] text-[#b9b5b5a1] bg-white rounded-md  h-11 text-sm"
                      style={{ direction: "rtl" }}
                      {...register("status", {
                        required: "يجب أضافة أسم الدولة",
                      })}
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
                اختصار العملة{" "}
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end"
                placeholder="ري"
                {...register("short", {
                  required: "يجب أضافة أسم القسم",
                })}
              />
            </div>
            <div>
              <label htmlFor="" className=" block mb-2 text-sm font-medium text-gray-500 dark:text-white">رمز العملة</label>
              <div className="relative w-full h-[160px] rounded-lg">
                <input
                  id="file"
                  type="file"
                  {...register("image")}
                  // onChange={handleFileChange}
                />
                <label htmlFor="file" className=" ">
                  <div className="bg-black rounded-lg opacity-40 w-full h-full absolute z-10 cursor-pointer "></div>
                  <Image
                    src={previewImage ? previewImage : dataRow.getValue("icon")}
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
