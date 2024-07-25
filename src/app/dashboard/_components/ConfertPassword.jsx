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
import { FaPlus } from "react-icons/fa";
export default function ConfertPassword() {
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
      <Dialog className="gap-0">
        <DialogTrigger asChild>
          <Button className=" text-[16px] flex justify-end hover:bg-gray-100 text-black w-full">
            تغيير كلمة السر{" "}
          </Button>
        </DialogTrigger>
        <DialogContent className="  bg-white">
          <DialogHeader>
            <DialogTitle className="text-[22px] font-bold">
              تعديل كلمة المرور
            </DialogTitle>
          </DialogHeader>
          {/* <h1 className="text-end text-[16px] font-medium	mt-4">
            تعديل كلمة المرور{" "}
          </h1> */}
          <form className="w-full text-end" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-8">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                كلمة المرور القديمة{" "}
              </label>
              <input
                type="password"
                name="oldpassword"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                placeholder="* * * * * * * * *"
                {...register("oldpassword")}
              />
              <p className="text-primaryColo">{errors.oldpassword?.message}</p>
            </div>
            <div className="mt-8">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                كلمة المرور الجديدة{" "}
              </label>
              <input
                type="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                placeholder="* * * * * * * * *"
                {...register("password")}
              />
              <p className="text-primaryColo">{errors.password?.message}</p>
            </div>
            <div className="mt-8">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                تأكيد كلمة المرور الجديدة{" "}
              </label>
              <input
                type="password"
                name="confirmpassword"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5  text-end"
                placeholder="* * * * * * * * *"
                {...register("confirmpassword")}
              />
              <p className="text-primaryColo">
                {errors.confirmpassword?.message}
              </p>
              <p className="text-primaryColo">
                {errors.o?.message}
              </p>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="mt-12 bg-primaryColo hover:bg-primaryColo w-[112px] text-white rounded-xl"
              >
                حفظ
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
