import Image from "next/image";
import logo from "../../../../public/dashboard/logo.svg";
import Bglogin from "../../../../public/dashboard/bg_login.svg";
import twitter from "../../../../public/img/twitter.svg";
import facebook from "../../../../public/img/facebook.svg";
import instgram from "../../../../public/img/instgram.svg";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

import Button from "../_components/Button";
import BtnBack from "@/components/BtnBack";
import ButtonBack from "../_components/ButtonBack";
export default function page() {
  return (
    <div className="login_code p-4 h-auto md:h-[660px]">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="img_login w-full flex flex-col justify-center items-center gap-y-20 p-14 md:p-0 mb-10 md:mb-0">
          <Image src={logo} className="  w-56 md:w-[300px]" height={356} />
          <div className="flex w-full items-center justify-center ">
            <div className="flex gap-2 me-2">
              <Image src={facebook} width={20} alt="twintter imgae" />
              <Image src={instgram} width={20} alt="twintter imgae" />
              <Image src={twitter} width={20} alt="twintter imgae" />
            </div>
            <h1
              className="text-white text-[16px]"
              style={{ letterSpacing: "3px" }}
            >
              @eurud_yemen
            </h1>
          </div>
        </div>
        <div className="info_login w-full">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="mb-10">
              <ButtonBack />
            </div>
            <h1 className="text-xl text-center">
              <span className="text-2xl font-bold">لإسترداد حسابك</span>
              <br />
              ادخل بريدك الالكتروني{" "}
            </h1>
            <form action="" className="w-full mt-4 flex flex-col  items-center">
              <div className=" text-end mb-10 w-full px-28">
                <label
                  for="first_name"
                  className="block mb-2 text-[16px] me-4 text-[#9796A1] font-medium"
                >
                  البريد الالكتروني{" "}
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 h-12  border border-gray-300 text-gray-500 text-sm rounded-lg placeholder:text-[#7D8592] block w-full p-2.5   text-end"
                  placeholder="youremail@gmail.com"
                  required
                />
              </div>
              <div className="  mt-8">
                <button
                  type="submit"
                  className="bg-primaryColo justify-center gap-x-3 flex items-center text-xl font-bold drop-shadow-lg text-center   text-white w-44 h-12 rounded-xl py-2"
                >
                  <FaArrowLeftLong className="mt-2"/>

                  <h1 className="text-white">التالي</h1>
                </button>
              </div>
            </form>
            <div className="mt-10 ">
              <h1 className="text-primaryColo underline ">ليس لديك حساب؟ </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
