import Image from "next/image";
import logo from "../../../../public/dashboard/logo.svg";
 
import twitter from "../../../../public/img/twitter.svg";
import facebook from "../../../../public/img/facebook.svg";
import instgram from "../../../../public/img/instgram.svg";
import Link from "next/link";

import Button from "../_components/Button";
import BtnBack from "@/components/BtnBack";
import ButtonBack from "../_components/ButtonBack";
export default function page() {
  return (
    <div className="login_code p-4 h-auto md:h-[660px]">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="img_login w-full flex flex-col justify-center items-center gap-y-20 p-14 md:p-0 mb-10 md:mb-0">
          <Image
            src={logo}
            className="  w-56 md:w-[300px]"
            height={356}
        alt=""
          />
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
        <ButtonBack/>

        </div>
            <h1 className="text-xl ">
              تم ارسال رمز التحقق الى{" "}
              <span className="text-2xl font-bold">بريدك الإلكتروني</span>
            </h1>
            <h1 className="text-[16px] text-[#7D8592] mt-3">
              youremail@gmail.com
            </h1>
            <h1 className="text-[16px] text-[#7D8592] mt-3">رمز التحقق </h1>

            <form
              action=""
              className="w-[404px] mt-4 flex flex-col  items-center"
            >
              <div className="flex space-x-2 rtl:space-x-reverse mb-8">
                <div>
                  <label for="code-1" className="sr-only">
                    First code
                  </label>
                  <input
                    type="text"
                    maxlength="1"
                    data-focus-input-init
                    data-focus-input-next="code-2"
                    id="code-1"
                    className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500      "
                    required
                  />
                </div>
                <div>
                  <label for="code-2" className="sr-only">
                    Second code
                  </label>
                  <input
                    type="text"
                    maxlength="1"
                    data-focus-input-init
                    data-focus-input-prev="code-1"
                    data-focus-input-next="code-3"
                    id="code-2"
                    className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500      "
                    required
                  />
                </div>
                <div>
                  <label for="code-3" className="sr-only">
                    Third code
                  </label>
                  <input
                    type="text"
                    maxlength="1"
                    data-focus-input-init
                    data-focus-input-prev="code-2"
                    data-focus-input-next="code-4"
                    id="code-3"
                    className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500      "
                    required
                  />
                </div>
                <div>
                  <label for="code-4" className="sr-only">
                    Fourth code
                  </label>
                  <input
                    type="text"
                    maxlength="1"
                    data-focus-input-init
                    data-focus-input-prev="code-3"
                    data-focus-input-next="code-5"
                    id="code-4"
                    className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500      "
                    required
                  />
                </div>
                <div>
                  <label for="code-5" className="sr-only">
                    Fifth code
                  </label>
                  <input
                    type="text"
                    maxlength="1"
                    data-focus-input-init
                    data-focus-input-prev="code-4"
                    data-focus-input-next="code-6"
                    id="code-5"
                    className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500      "
                    required
                  />
                </div>
                <div>
                  <label for="code-6" className="sr-only">
                    Sixth code
                  </label>
                  <input
                    type="text"
                    maxlength="1"
                    data-focus-input-init
                    data-focus-input-prev="code-5"
                    id="code-6"
                    className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500      "
                    required
                  />
                </div>
              </div>
              <div className="  mt-8">
                <button
                  type="submit"
                  className="bg-primaryColo  text-xl font-bold drop-shadow-lg text-center inline-block text-white w-44 h-12 rounded-xl py-2"
                >
                  تأكيد
                </button>
              </div>
             
            </form>
            <div className="mt-20 " >
                <h1 className="text-[#C8C9CC] ">حقوق الطبع والنشر@ eroud.com جميع الحقوق محفوظة</h1>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
