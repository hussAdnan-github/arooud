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

import Image from "next/image";
import { FaPlus, FaRegEye } from "react-icons/fa";

import { MdOutlineCameraAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import Delete from "./Delete";
import { BiEdit } from "react-icons/bi";
import { TiPlus } from "react-icons/ti";

export default function Edite({ dataRow }) {
  const [datacountry, setDatacountry] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://offers.pythonanywhere.com/v1/api/places/directorate/"
      );
      const data = await response.json();
      setDatacountry(data["result"]);
    };

    fetchData();
  }, []);

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
      sectionName: dataRow.getValue("name_ar"),
      status: dataRow.getValue("status"),
      // image: dataRow.getValue("image_ar"),
      country: dataRow.getValue("directorate"),
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
    formData.append("name_ar", data.sectionName);
    formData.append("name_en", data.sectionName);
    formData.append("status", data.status);
    formData.append("image", data.image[0]);
    try {
      const response = await axios.put(
        `https://offers.pythonanywhere.com/v1/api/departments/departments/${dataRow.getValue(
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
        <DialogContent className="DialogContent sm:max-w-[540px] h-[600px]   overflow-scroll bg-white">
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
                اسم الموقع الإلكتروني
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
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                نبذة المتجر الإلكتروني
              </label>
              <textarea
                id="message"
                rows="4"
                className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                placeholder="أضف بعض الوصف للمحل"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                شعار الموقع الإلكتروني
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
                      previewImage ? previewImage : dataRow.getValue("image_ar")
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
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                مالك المتجر{" "}
              </label>
              <div className="flex items-center gap-5 justify-end">
                <FaRegEye className="text-2xl text-gray-500" />
                <BiEdit className="text-2xl" />
                <FaPlus className="text-xl" />

                <Select>
                  <SelectTrigger className="w-3/4 border-gray-300 text-[#9796A1]">
                    <SelectValue placeholder="انتظاار" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-end">
                    <SelectGroup className="text-end">
                      <SelectItem
                        className=" text-[#9796A1] text-end"
                        value="انتظاار"
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
                مجالات المتجر الإلكتروني{" "}
              </label>
              <div className="grid grid-cols-4 " style={{ direction: "rtl" }}>
                <div className="w-28 text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                  <h1 className="text-[#7D7E80]">الكتروتيات</h1>
                </div>
                <div className="w-28 text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                  <h1 className="text-[#7D7E80]">مواد غذائية</h1>
                </div>
                <div className="w-28 text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                  <h1 className="text-[#7D7E80]">ادوات تجميل</h1>
                </div>
                <div className="w-28 text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                  <h1 className="text-[#7D7E80]">جوالات</h1>
                </div>
                <div className="w-28 mt-2 text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                  <h1 className="text-[#7D7E80]">جوالات</h1>
                </div>
                <div className="w-28 mt-2 text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                  <h1 className="text-[#7D7E80]">جوالات</h1>
                </div>
                <div className="flex justify-center items-center w-28 mt-2 bg-[#F6F6F6] text-[#7D7E80] border border-[#DDDADB] text-center p-2 rounded-2xl">
                  <TiPlus className="text-xl" />
                </div>
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
            <div className="mb-4">
              <label
                for="first_name"
                className="block mb-4 text-sm font-medium text-gray-500 dark:text-white"
              >
                رقم الهاتف
              </label>

              <div className="flex  justify-between gap-2">
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
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
            <div className="mb-4">
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                رابط المتجر الإلكتروني{" "}
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
                المدينة{" "}
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
                  {datacountry.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name_ar}
                    </option>
                  ))}
                </select>
                <p className="text-primaryColo">{errors.section?.message}</p>
              </div>
            </div>
            <div className="mb-4">
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                الفيس بوك
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
                انستقرام
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                placeholder="youremail@gmail.com"
                required
              />
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
