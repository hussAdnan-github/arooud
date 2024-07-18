"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/dataform";
import Link from "next/link";
import ButtonRoundedPrimary from "@/components/ButtonRoundedPrimary";

export default function Sigin() {
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                className="font-normal  block mb-2 text-sm md:text-[16px] text-[#9796A1] me-4 dark:text-white"
              >
                الاسم
              </label>
              <input
                id="name"
                {...register("name")}
                className="bg-gray-50 border md:h-14 md:text-xl md:font-semibold border-[##DADADA] text-gray-500  text-sm rounded-lg  block w-full p-2.5  placeholder-[#DADADA]  text-end"
                placeholder="سالم سليم"
              />
              <p className="text-primaryColo">{errors.name?.message}</p>
            </div>
            <div className="mb-8 flex flex-col items-end ">
              <label
                className="block mb-2 text-[16px] font-medium text-[#9796A1] dark:text-white me-3"
              >
                البريد الإلكتروني او رقم الهاتف
              </label>
              <input
                {...register("email")}
                id="email"
                className="md:h-14 md:text-[17px] border-[##DADADA]  placeholder-[#DADADA] bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                placeholder="@gmail.com"
              />
              <p className="text-primaryColo">{errors.email?.message}</p>
            </div>
            <div className="mb-6">
              <label
                className="font-normal  block mb-2 text-sm md:text-[16px] text-[#9796A1] me-4 dark:text-white"
              >
                المدينة
              </label>
              <input
                {...register("countary")}
                id="contary"
                className="bg-gray-50 border md:h-14 md:text-xl md:font-semibold border-[##DADADA] text-gray-500  text-sm rounded-lg  block w-full p-2.5  placeholder-[#DADADA]  text-end"
                placeholder="سيئون"
              />
              <p className="text-primaryColo">{errors.countary?.message}</p>
            </div>
            <div className="flex justify-center md:justify-end gap-8 mt-10">
              <ButtonRoundedPrimary title={"إرســال"} />
            </div>
          </form>
    </div>
  )
}
