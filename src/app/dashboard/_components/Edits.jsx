"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/dataform";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
import { FaPlus } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";
import DatePicker from "./DatePicker";
import EditeImage from "./EditeImage";
export default function Edits() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    //  reset,
    //  getValues,
    watch,
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit = (data) => console.log(watch);

  return (
    <div>

      {/* تعديل أعلان */}
      {/* <Dialog className="gap-0">
        <DialogTrigger asChild>
          <Button className=" text-[16px] flex justify-end hover:bg-gray-100 text-black w-full">
            تعديل أعلان{" "}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[584px] h-full bg-white">
                <DialogHeader>
                  <DialogTitle>إضافة إعلان</DialogTitle>
                </DialogHeader>

                <form className="w-full text-end mt-2">
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      اسم الاعلان
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end"
                      placeholder="حسيننن"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500 "
                    >
                      حالة الاعلان
                    </label>

                    <Select>
                      <SelectTrigger className="w-full   border-gray-300 text-[#9796A1]">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent className="bg-white ">
                        <SelectGroup>
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
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      رابط داخل الصورة
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end"
                      placeholder="حسيننن"
                      required
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500 "
                      >
                        تاريخ انتهاء القسية{" "}
                      </label>
                      <DatePicker />
                    </div>
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500 "
                      >
                        وقت انتهاء القسية{" "}
                      </label>
                      <div>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                          placeholder="حسيننن"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500 "
                    >
                      صورة الاعلان
                    </label>

                 <EditeImage/>
                  </div>
                </form>

                <DialogFooter>
                  <Button
                    type="submit"
                    className="bg-[#D3D3D3] hover:bg-[#D3D3D3] text-white rounded-xl"
                  >
                    أضافة مع أضافة أخرى
                  </Button>
                  <Button
                    type="submit"
                    className="bg-primaryColo hover:bg-primaryColo text-white rounded-xl"
                  >
                    أضافة
                  </Button>
                </DialogFooter>
              </DialogContent>
      </Dialog>
     
      */}
     
      {/*about تعديل  */}

      <Dialog className="gap-0">
        <DialogTrigger asChild>
          <Button className=" text-[16px] flex justify-end hover:bg-gray-100 text-black w-full">
            تعديل أعلان{" "}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[584px] h-[600px] overflow-scroll bg-white">
                <DialogHeader>
                  <DialogTitle>إضافة من نحن</DialogTitle>
                </DialogHeader>

                <form className="w-full text-end mt-8 mb-4">
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500 ">
                    الهدف 
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="أضف بعض الوصف الهدف "
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500 "
                    >
                      صورة غلاف الهدف{" "}
                    </label>

                    <EditeImage/>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500 ">
                    الرسالة  
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="أضف بعض الوصف الرسالة  "
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500 "
                    >
                      صورة غلاف الرسالة  {" "}
                    </label>

                    <EditeImage/>

                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500 ">
                    الفكرة  
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="أضف بعض الوصف الفكرة  "
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500 "
                    >
                      صورة غلاف الفكرة  {" "}
                    </label>

                    <EditeImage/>

                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-500 ">
                    الرؤية
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="resize-none bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                      placeholder="أضف بعض الوصف الرؤية"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500 "
                    >
                      صورة غلاف الرؤية{" "}
                    </label>

                    <EditeImage/>

                  </div>
                  
                  <div className="mb-4">
                    <label
                      for="first_name"
                      className="block mb-4 text-sm font-medium text-gray-500 "
                    >
                      حالة المحافظة
                    </label>

                  
                    <Select>
                      <SelectTrigger className="w-full   border-gray-300 text-[#9796A1]">
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
                </form>

                <DialogFooter>
                  <Button
                    type="submit"
                    className="bg-[#D3D3D3] hover:bg-[#D3D3D3] text-white rounded-xl"
                  >
                    أضافة مع أضافة أخرى
                  </Button>
                  <Button
                    type="submit"
                    className="bg-primaryColo hover:bg-primaryColo text-white rounded-xl"
                  >
                    أضافة
                  </Button>
                </DialogFooter>
              </DialogContent>
      </Dialog>
    </div>
  );
}
