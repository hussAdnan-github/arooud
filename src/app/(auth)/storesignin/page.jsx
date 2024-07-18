"use client";
import ButtonRoundedPrimary from "@/components/ButtonRoundedPrimary";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import logo from "../../../../public/img/logo.png";
import Link from "next/link";
import BtnBack from "@/components/BtnBack";

import StoreIn from "@/components/form/StoreIn";
import TitleHeadRegiste from "@/components/TitleHeadRegiste";

export default function page() {
  return (
    <div className="login_user container m-auto mt-10">
      <div className="profile flex justify-between">
        <div className="profile_img_user flex gap-4 items-center">
          <div className="img_user w-8 h-8 bg-gray-400 rounded-full"></div>
          <div className="title_user">
            <h1>سالم سليم احمد</h1>
            <h1 className="text-gray-400">سيئون</h1>
          </div>
        </div>
        <Link href={"/"} className="img_logo">
          <Image src={logo} alt="logo" className="w-28" />
        </Link>
      </div>

      <div className="email_user mt-10">
        <div>
          <BtnBack />
        </div>

        <div className="form_user_login flex flex-col items-end">
          <TitleHeadRegiste
            title={"لا يوجد لديك حساب؟ سجل الآن"}
            description={
              "قم بالتسجيل حتى تتبع طلباتك وتصل بسهولة إلى قائمة مفضلاتك"
            }
          />
          <StoreIn />
        </div>
      </div>
    </div>
  );
}
