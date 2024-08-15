import Image from "next/image";
 
import twitter from "../../public/img/twitter.svg";
import facebook from "../../public/img/facebook.svg";
import instgram from "../../public/img/instgram.svg";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer z-20 w-full mt-28 bg-white">
      <div className="footer_img">
        <div className="flex flex-col-reverse md:flex-row justify-around text-white items-start pt-8 pb-4 bg__fotter">
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="font-bold text-2xl text-white">تابعنا</p>
            <h1 className="text-xl text-white">
              يمكنك متابعتنا على منصات التواصل الإجتماعى
            </h1>
            <div className="flex items-center">
              <div className="flex gap-4 me-3">
                <Image src={facebook} width={20} alt="فيس بوك " className="ease-out duration-300 cursor-pointer hover:scale-125 "/>
                <Image src={instgram} width={20} alt="انستقرام " className="ease-out duration-300 cursor-pointer hover:scale-125"/>
                <Image src={twitter} width={20} alt="أكس" className="ease-out duration-300 cursor-pointer hover:scale-125"/>
              </div>
              <h1
                className="text-white text-xl"
                style={{ letterSpacing: "5px" }}
              >
                @eurud_yemen
              </h1>
            </div>
            <div className="flex gap-4">
              <div>
                <FaPhone className="text-[#FFDE17] text-2xl" />{" "}
              </div>
              <h1 className="font-bold text-2xl text-white">اتصل بنا</h1>
            </div>
            <h1 className="text-2xl text-white">+967 785×××××5</h1>
            <h1 className="text-2xl text-white">+967 785×××××5</h1>
          </div>
          <div className="mt-8 mb-6 md:mb-0">
            <h1 className="text-5xl text-center md:text-end mb-4 text-white">
              عروض في أي وقت
            </h1>
            <h1 className="text-5xl text-center md:text-end text-[#FFDE17]">
              !وأي مكان
            </h1>
          </div>
        </div>
      </div>
      <div className="footer_down">
        <footer className="bg-white  shadow dark:bg-primaryDark">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <ul className="flex flex-wrap items-center justify-between mt-3 text-sm font-medium text-[#C8C9CC] dark:text-gray-400 sm:mt-0">
              <li>
                <Link href="#" className="hover:underline me-0 md:me-6">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline me-0 md:me-6">
                  خريطة الموقع
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline me-0 md:me-6">
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
            <span className="text-sm text-[#C8C9CC] sm:text-center dark:text-gray-400">
              حقوق الطبع والنشر@ eroud.com جميع الحقوق محفوظة
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
