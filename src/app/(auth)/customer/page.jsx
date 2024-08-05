import Image from "next/image";
import logo from "../../../../public/img/logo.png";

import Link from "next/link";

import ButtonRoundedPrimary from "@/components/ButtonRoundedPrimary";
import login from "../../../../public/img/login.png";
import { FaAngleDoubleLeft } from "react-icons/fa";

export default function page() {
  return (
    <div className="customer container m-auto mt-10">
      <div className="profile flex justify-between mb-20">
        <div className="profile_img_user flex gap-4 items-center">
          <div className="img_user w-8 h-8 bg-gray-400 rounded-full"></div>
          <div className="title_user">
            <h1>سالم سليم احمد</h1>
            <h1 className="text-gray-400">سيئون</h1>
          </div>
        </div>
        <Link href={"/"} className="img_logo">
          <Image src={logo} alt="شعار عروض " className="w-28" />
        </Link>
      </div>

      <div className="cutomer_info">
        <div className="flex flex-col items-start md:flex-row justify-between">
          <div className="flex flex-col items-center">
            <div className="customer_img h-80 w-80    md:h-[360px] md:w-[360px] object-cover">
              <Image
                src={login}
                alt="صورة التسجيل"
                className="rounded-full w-full h-full border border-black object-contain"
              />
            </div>
            <div>
              <input id="file" type="file" />
              <label
                htmlFor="file"
                className="text-primaryColo underline mt-4 text-2xl  font-normal flex items-center cursor-pointer  "
              >
                {" "}
                <FaAngleDoubleLeft />
                إضافة
              </label>

              {/* <Link href={'#'}> <h1 className="text-primaryColo underline mt-10 text-2xl  font-normal flex items-center"> <FaAngleDoubleLeft /> إضافة</h1></Link> */}
            </div>
          </div>
          <div className="cutomer_data w-full md:w-2/4">
            <div className=" flex flex-col items-end gap-6 me-0 md:me-32">
              <div className="text-end name relative w-full border-b-2 pb-2 border border-x-0 border-t-0 ">
                <h1 className="text-[#9796A1] text-xl">الاسم</h1>
                <h1 className="text-black text-2xl font-bold mt-4">
                  سالم سليم احمد
                </h1>
                <Link href={"#"}>
                  {" "}
                  <h1 className="text-primaryColo font-normal text-[16px] underline absolute flex items-center left-0 gap-1 top-2/3">
                    {" "}
                    <FaAngleDoubleLeft /> تعديل
                  </h1>
                </Link>
              </div>
              <div className="text-end email relative w-full border-b-2 pb-2 border border-x-0 border-t-0">
                <h1 className="text-[#9796A1] text-xl">البريد الإلكتروني</h1>
                <h1 className=" mt-4 text-black text-2xl font-bold">
                  sawdd@gmail.com
                </h1>
                <Link href={"#"}>
                  {" "}
                  <h1 className="text-primaryColo font-normal text-[16px] underline absolute flex items-center left-16 gap-1 top-2/3">
                    {" "}
                    <FaAngleDoubleLeft />
                    تعديل
                  </h1>
                </Link>
                <Link href={"#"}>
                  {" "}
                  <h1 className="text-primaryColo font-normal text-[16px] underline absolute flex items-center left-0 gap-1 top-2/3">
                    {" "}
                    <FaAngleDoubleLeft />
                    إضافة
                  </h1>
                </Link>
              </div>
              <div className="text-end countary relative w-full border-b-2 pb-2 border border-x-0 border-t-0 ">
                <h1 className="text-end text-[#9796A1] text-xl">المدينة</h1>
                <h1 className=" mt-4 text-black text-2xl font-bold">سيئون</h1>
                <Link href={"#"}>
                  {" "}
                  <h1 className="text-primaryColo font-normal text-[16px] underline absolute flex items-center left-0 gap-1 top-2/3">
                    {" "}
                    <FaAngleDoubleLeft /> تعديل
                  </h1>
                </Link>
              </div>
              <div className="flex flex-col md:flex-row justify-end  gap-6 md:gap-16 me-6 md:me-0    mt-10">
                <ButtonRoundedPrimary
                  title={"التسجيل كمحل تجاري"}
                  urllink={"/"}
                />
                <ButtonRoundedPrimary
                  title={"التسجيل كمتجر الكتروني"}
                  urllink={"/"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
