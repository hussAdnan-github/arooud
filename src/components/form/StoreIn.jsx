"use client";
 
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/dataform";
import Link from "next/link";
import ButtonRoundedPrimary from "@/components/ButtonRoundedPrimary";
export default function StoreIn() {
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
              <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:w-[543px] w-full text-end mt-6"
          >
            {/* <MainInput lable={'اسم المتجر الكتروني'} title={'sawdd'}/>
        <MainInput lable={'مجال عمل المتجر الكتروني'} title={'عطور'}/>
        <MainInput lable={'رابط المتجر '} title={'عطور'}/>
        <MainInput lable={'حسابات التواصل '} title={'@sdaff'}/>
        */}
            <div className="mb-6">
              <label
                 className="font-normal  block mb-2 text-sm md:text-[16px] text-[#9796A1] me-4 dark:text-white"
              >
                اسم المتجر الكتروني
              </label>
              <input
                {...register("name")}
                id="name"
                className="bg-gray-50 border md:h-14 md:text-xl md:font-semibold border-[##DADADA] text-gray-500  text-sm rounded-lg  block w-full p-2.5  placeholder-[#DADADA]  text-end"
                placeholder="عطور"
              />
              <p className="text-primaryColo">{errors.name?.message}</p>
            </div>
            <div className="mb-6">
              <label
                 className="font-normal  block mb-2 text-sm md:text-[16px] text-[#9796A1] me-4 dark:text-white"
              >
                مجال عمل المتجر الكتروني
              </label>
              <input
                {...register("work")}
                id="work"
                className="bg-gray-50 border md:h-14 md:text-xl md:font-semibold border-[##DADADA] text-gray-500  text-sm rounded-lg  block w-full p-2.5  placeholder-[#DADADA]  text-end"
                placeholder="عطور"
              />
              <p className="text-primaryColo">{errors.work?.message}</p>
            </div>
            <div className="mb-6">
              <label
                 className="font-normal  block mb-2 text-sm md:text-[16px] text-[#9796A1] me-4 dark:text-white"
              >
                رابط المتجر{" "}
              </label>
              <input
                {...register("located")}
                id="located"
                className="bg-gray-50 border md:h-14 md:text-xl md:font-semibold border-[##DADADA] text-gray-500  text-sm rounded-lg  block w-full p-2.5  placeholder-[#DADADA]  text-end"
                placeholder="عطور"
              />
              <p className="text-primaryColo">{errors.located?.message}</p>
            </div>
            <div className="mb-6">
              <label
                 className="font-normal  block mb-2 text-sm md:text-[16px] text-[#9796A1] me-4 dark:text-white"
              >
                حسابات التواصل
              </label>
              <input
                {...register("account")}
                id="account"
                className="bg-gray-50 border md:h-14 md:text-xl md:font-semibold border-[##DADADA] text-gray-500  text-sm rounded-lg  block w-full p-2.5  placeholder-[#DADADA]  text-end"
                placeholder="@atoour"
              />
              <p className="text-primaryColo">{errors.account?.message}</p>
            </div>

            <div className="flex justify-end gap-16 mt-12">
              <Link
                href={"/storesignup"}
                className="text-white bg-primaryColo transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-30 text-[16px] font-bold text-center inline-block w-60 md:w-[230px] rounded-full py-2"
              >
                إضافة متجر جديد
              </Link>
              <ButtonRoundedPrimary title={"التسجيل"} urllink={"/"} />
            </div>
          </form>
  )
}
