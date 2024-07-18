"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/dataform";
import Link from "next/link";
import ButtonRoundedPrimary from "@/components/ButtonRoundedPrimary";

export default function Login() {
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
        <div className="mb-8 flex flex-col items-end ">
          <label className="block mb-2 text-[16px]  font-medium text-[#9796A1] dark:text-white me-4">
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

        <div className="flex justify-end  gap-8">
          <Link
            href={"/signup"}
            type="submit"
            className=" text-center font-bold transition ease-in-out delay-150  hover:scale-105  duration-30 hover:bg-primaryColo hover:text-white hover:border-white md:w-[230px] hover:font-bold border border-gray-400 text-gray-400 inline-block w-48 rounded-full py-2"
          >
            تسجــيل جديد
          </Link>
          <ButtonRoundedPrimary title={"إرسال"} urllink={"/"} />
        </div>
        <h1 className="text-[#9796A1] text-[16px] font-normal	 mt-10">
          أو سجل عبر حساباتك على منصات التواصل الإجتماعي 
        </h1>
      </form>
    </div>
  );
}
