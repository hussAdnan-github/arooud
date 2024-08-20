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
import { format } from "date-fns"
import { ar } from 'date-fns/locale';

import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image";
import { FaPlus, FaRegEye } from "react-icons/fa";
import { MdOutlineCameraAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import Delete from "./Delete";
import { BiEdit } from "react-icons/bi";
import DatePicker from "../../_components/DatePicker";

export default function Edite({ dataRow }) {
  const [previewImage, setPreviewImage] = useState("");
  const [date, setDate] = useState(new Date(dataRow.getValue("duration")));

  const [dataCurrency, setDataCurrency] = useState([]);
  const [dataweb, setDataweb] = useState([]);
  const [datashope, setDatashope] = useState([]);

  useEffect(() => {
    const fetchcurrency = async () => {
      const response = await fetch(
        "https://offers.pythonanywhere.com/v1/api/offers/currency/"
      );
      const data = await response.json();
      setDataCurrency(data["result"]);
    };
    const fetchWebs = async () => {
      const response = await fetch(
        "https://offers.pythonanywhere.com/v1/api/accounts/webs/"
      );
      const data = await response.json();
      setDataweb(data["result"]);
    };
    const fetchShope = async () => {
      const response = await fetch(
        "https://offers.pythonanywhere.com/v1/api/accounts/markets/"
      );
      const data = await response.json();
      setDatashope(data["result"]);
    };

    fetchcurrency();
    fetchWebs();
    fetchShope();
  }, []);
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
      description: dataRow.getValue("description_ar"),
      trem_use: dataRow.getValue("terms_of_use_ar"),
      price: dataRow.getValue("coupon_value"),
      website: dataRow.getValue("website"),
      shope: dataRow.getValue("market"),
      currency: dataRow.getValue("currency_type"),
      number_use: dataRow.getValue("use"),
    },
  });

  const createUpdate = async (data) => {
    const formData = new FormData();
    const formattedDateTime = date.toISOString();
    formData.append("name_ar", data.name);
    formData.append("name_en", data.name);
    formData.append("image_ar", data.image[0]);
    formData.append("image_en", data.image[0]);
    formData.append("status", data.status);
    formData.append("coupon_value", data.price);
    formData.append("description_ar", data.description);
    formData.append("description_en", data.description);
    formData.append("terms_of_use_ar", data.trem_use);
    formData.append("terms_of_use_en", data.trem_use);
    formData.append("duration", formattedDateTime);
    formData.append("use", data.number_use);
    formData.append("website", data.website);
    formData.append("market", data.shope);
    formData.append("currency_type", data.currency);
    try {
      const response = await axios.put(
        `https://offers.pythonanywhere.com/v1/api/offers/coupons/${dataRow.getValue(
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
        <DialogContent className="sm:max-w-[540px] h-[600px] overflow-scroll bg-white">
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
                اسم القسيمة{" "}
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                placeholder="قسيمة"
                {...register("name")}
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
                {...register("description")}
              ></textarea>
              <p className="text-primaryColo">{errors.description?.message}</p>
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
                {...register("trem_use")}
              ></textarea>
              <p className="text-primaryColo">{errors.trem_use?.message}</p>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                صورة غلاف القسيمة
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
                  {...register("website")}
                  className="w-full border cursor-pointer border-[#b9b5b5a1] text-[#b9b5b5a1] bg-white rounded-md  h-11 text-sm"
                  style={{ direction: "rtl" }}
                >
                  {dataweb.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name_ar}
                    </option>
                  ))}
                </select>
                <p className="text-primaryColo">{errors.website?.message}</p>
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
                  {...register("shope")}
                  className="w-full border cursor-pointer border-[#b9b5b5a1] text-[#b9b5b5a1] bg-white rounded-md  h-11 text-sm"
                  style={{ direction: "rtl" }}
                >
                  {datashope.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name_ar}
                    </option>
                  ))}
                </select>
                <p className="text-primaryColo">{errors.shope?.message}</p>
              </div>
            </div>
            <div className="mb-4">
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                نوع العملة{" "}
              </label>
              <div className="flex items-center   justify-end">
                <div className="flex gap-5 me-5">
                  <FaRegEye className="text-2xl text-gray-500" />
                  <BiEdit className="text-2xl" />
                  <FaPlus className="text-xl" />
                </div>

                <select
                  {...register("section")}
                  className="w-full border cursor-pointer border-[#b9b5b5a1] text-[#b9b5b5a1] bg-white rounded-md  h-11 text-sm"
                  style={{ direction: "rtl" }}
                >
                  {dataCurrency.map((item) => (
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
                حالة القسيمة {" "}
              </label>
              <select
                className="w-full h-10 border border-gray-300 text-gray-500 text-sm  rounded-md focus:border-[#9796A1]focus:outline-none"
                style={{ direction: "rtl" }}
                {...register("status")}
              >
                <option value="1">قيد الانشاء</option>
                <option value="2">تم الانشاء</option>
                <option value="3">تم التوقف</option>
              </select>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="w-full">
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                >
                  تاريخ انتهاء القسيمة{" "}
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
                    {...register("number_use")}
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
                    {...register("price")}
                  />
                  <p className="text-primaryColo">{errors.price?.message}</p>
                </div>
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
