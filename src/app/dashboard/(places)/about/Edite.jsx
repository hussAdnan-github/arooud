"use client";
import { Button } from "@/components/ui/button";
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
import axios from "axios";
import { MoreHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";
import { FaCircleChevronLeft } from "react-icons/fa6";
import Image from "next/image";
import { FaAngleDoubleLeft } from "react-icons/fa";

import { MdOutlineCameraAlt } from "react-icons/md";
import { useState } from "react";
import Delete from "./Delete";

export default function Edite({ dataRow }) {
  const [previewImage, setPreviewImage] = useState("");
  // const handleFileChange = (event) => {
  //   console.log(event.target.files[0]);
  //   if (event.target.files && event.target.files[0]) {
  //     setPreviewImage(URL.createObjectURL(event.target.files[0]));
  //   }
  // };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {
      goalName: dataRow.getValue("goal_ar"),
      messageName: dataRow.getValue("message_ar"),
      ideaName: dataRow.getValue("idea_ar"),
      visionName: dataRow.getValue("vision_ar"),
      status: dataRow.getValue("status"),
    },
  });

  const createUpdate = async (data) => {
    // console.log(dataRow.getValue('idea_ar'))
    // if (data.image && data.image[0]) {
    //   setPreviewImage(URL.createObjectURL(data.image[0]));
    //   console.log(setPreviewImage);
    // }

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
    console.log(dataRow.getValue("id"));
    try {
      const response = await axios.put(
        `https://offers.pythonanywhere.com/v1/api/places/arewe/${dataRow.getValue(
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
        <DialogContent className="sm:max-w-[425px] h-[600px] overflow-scroll bg-white">
          <DialogHeader>
            <DialogTitle>تعديل قـسم</DialogTitle>
          </DialogHeader>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full text-end mt-8"
          >
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                الهدف 
              </label>
              <textarea
                rows="4"
                className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                placeholder="أضف بعض الوصف الهدف "
                {...register("goalName")}
              ></textarea>
              <p className="text-primaryColo">{errors.goalName?.message}</p>
            </div>
            <div className="mt-6">
              <label className="block mb-4 text-sm font-medium text-gray-500 dark:text-white">
                صورة{" "}
              </label>
              <div className="relative w-full h-[230px] rounded-lg">
                <input
                  id="file_input"
                  type="file"
                  {...register("goalimage")}
                  // onChange={handleFileChange}
                />
                <label htmlFor="file_input" className=" ">
                  <div className="bg-black rounded-lg opacity-40 w-full h-full absolute z-10 cursor-pointer "></div>
                  <Image
                    src={
                      previewImage
                        ? previewImage
                        : dataRow.getValue("image_goal")
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
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                الرسالة  
              </label>
              <textarea
                id="message"
                rows="4"
                className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                placeholder="أضف بعض الوصف الرسالة  "
                {...register("messageName")}
              ></textarea>
              <p className="text-primaryColo">{errors.messageName?.message}</p>
            </div>
            <div className="mt-6">
              <label className="block mb-4 text-sm font-medium text-gray-500 dark:text-white">
                صورة{" "}
              </label>
              <div className="relative w-full h-[230px] rounded-lg">
                <input
                  id="file_input2"
                  type="file"
                  {...register("messageimage")}
                  // onChange={handleFileChange}
                />
                <label htmlFor="file_input2" className=" ">
                  <div className="bg-black rounded-lg opacity-40 w-full h-full absolute z-10 cursor-pointer "></div>
                  <Image
                    src={
                      previewImage
                        ? previewImage
                        : dataRow.getValue("image_message")
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
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                الفكرة  
              </label>
              <textarea
                id="message"
                rows="4"
                className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                placeholder="أضف بعض الوصف الفكرة  "
                {...register("ideaName")}
              ></textarea>
              <p className="text-primaryColo">{errors.ideaName?.message}</p>
            </div>
            <div className="mt-6">
              <label className="block mb-4 text-sm font-medium text-gray-500 dark:text-white">
                صورة{" "}
              </label>
              <div className="relative w-full h-[230px] rounded-lg">
                <input
                  id="file_input3"
                  type="file"
                  {...register("ideaimage")}
                  // onChange={handleFileChange}
                />
                <label htmlFor="file_input3" className=" ">
                  <div className="bg-black rounded-lg opacity-40 w-full h-full absolute z-10 cursor-pointer "></div>
                  <Image
                    src={
                      previewImage
                        ? previewImage
                        : dataRow.getValue("image_idea")
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
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                الرؤية
              </label>
              <textarea
                id="message"
                rows="4"
                className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                placeholder="أضف بعض الوصف الرؤية"
                {...register("visionName")}
              ></textarea>
              <p className="text-primaryColo">{errors.visionName?.message}</p>
            </div>
            <div className="mt-6">
              <label className="block mb-4 text-sm font-medium text-gray-500 dark:text-white">
                صورة{" "}
              </label>
              <div className="relative w-full h-[230px] rounded-lg">
                <input
                  id="file_input4"
                  type="file"
                  {...register("visionimage")}
                  // onChange={handleFileChange}
                />
                <label htmlFor="file_input4" className=" ">
                  <div className="bg-black rounded-lg opacity-40 w-full h-full absolute z-10 cursor-pointer "></div>
                  <Image
                    src={
                      previewImage
                        ? previewImage
                        : dataRow.getValue("image_vision")
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
            <div className="mt-4">
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                الحالة{" "}
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
