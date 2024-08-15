import Image from "next/image";
import logo from "../../../../public/dashboard/logo.svg";
import Bglogin from "../../../../public/dashboard/bg_login.svg";
import twitter from "../../../../public/img/twitter.svg";
import facebook from "../../../../public/img/facebook.svg";
import instgram from "../../../../public/img/instgram.svg";
import Link from "next/link";
import Button from "../_components/Button";
export default function page() {
  return (
    <div className="login_code p-4 h-auto md:h-[660px]">
      <div className="flex flex-col md:flex-row w-full h-full">
      <div className="img_login w-full flex flex-col justify-center items-center gap-y-20 p-14 md:p-0 mb-10 md:mb-0">
          <Image src={logo} className="  w-56 md:w-[300px]" height={356} alt=""/>
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
        <div className="info_login w-full mt-20">
          <div className="flex flex-col items-center">
            <h1 className="text-xl ">
              قم بتسجيل الدخول{" "}
              <span className="text-2xl font-bold">إلى منصة عروض</span>
            </h1>
            <form action="" className="w-[404px] mt-10">
              <div className=" text-end mb-10">
                <label
                  for="first_name"
                  className="block mb-2 text-[16px] me-4 text-[#9796A1] font-medium"
                >
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 h-12  border border-gray-300 text-gray-500 text-sm rounded-lg placeholder:text-[#7D8592] block w-full p-2.5   text-end"
                  placeholder="youremail@gmail.com"
                  required
                />
              </div>
              <div className="mb-4 text-end">
                <label
                  for="first_name"
                  className="block mb-2 text-sm me-4 text-gray-500 dark:text-white font-bold"
                >
                  كلمة المرور
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 h-12  border border-gray-300 text-gray-500 text-sm rounded-lg placeholder:text-[#7D8592] block w-full p-2.5   text-end"
                  placeholder="youremail@gmail.com"
                  required
                />
              </div>
              <div className="flex justify-between mt-6">
                <h1 className="text-[#9796A1] text-[16px]">
                  هل نسيت كلمة السر؟
                </h1>

                <div>
                  <label htmlFor="" className="me-3 text-[#9796A1] text-[16px]">
                    {" "}
                    تذكرنى
                  </label>

                  <input
                    id="default-checkbox"
                    checked
                    type="checkbox"
                    value=""
                    className="checkbok w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
              <div className="text-center mt-14">
                <Button title={"تسجيل الدخول"} urllink={"#"} />
                <Link href={"#"}>
                  <h1 className="text-primaryColo underline mt-4">ليس لديك حساب؟</h1>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
