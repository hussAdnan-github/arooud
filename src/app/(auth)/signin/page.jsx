import ActiveButtonUser from "@/components/ActiveButtonUser";
import NonActiveButtonUser from "@/components/NonActiveButtonUser";
import login from "../../../../public/img/login.png";
import facebook from "../../../../public/img/facebook.png";
import google from "../../../../public/img/google.png";
import Image from "next/image";
import Link from "next/link";
import BtnBack from "@/components/BtnBack";
import TitleHeadRegiste from "@/components/TitleHeadRegiste";
import Login from "@/components/form/Login";
export default function page() {
  return (
    <div className="login_user container m-auto ">
      <div className="flex justify-between flex-col md:flex-row items-center mt-12 taps_user">
        <div className=""> 
          <BtnBack />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4 ">
          <Link href={"/websitesignin"} div>
            <NonActiveButtonUser title={"التسجيل كمتجر إلكتروني"} />
          </Link>
          <Link href={"/shopsignin"}>
            <NonActiveButtonUser title={"التسجيل كمحل تجاري"} />
          </Link>
          <Link href={"/signin"}>
            <ActiveButtonUser title={"التسجيل كمستخدم"} />
          </Link>
        </div>
      </div>

      <div className="email_user flex justify-between mt-12   items-center md:items-start  flex-col md:flex-row">
        <div className="img_ligin_user w-full flex justify-center">
          <Image src={login} className="w-4/5 md:w-3/4" alt="صورة التسجيل"/>
        </div>

        <div className="form_user_login text-end flex flex-col w-full mt-8 md:mt-0 md:w-4/5 ">
          <TitleHeadRegiste
            title={"لديك حساب؟ سجل الدخول"}
            description={
              "قم بالتسجيل الدخول حتى تتبع طلباتك وتصل بسهولة إلى قائمة مفضلاتك"
            }
          />
          <Login />
          <div className="media_user flex justify-end gap-4 mt-4">
            <div className="border h-9 px-4 md:w-36 border-gray-400 rounded-xl flex items-center gap-4">
              <Image src={google} width={24} height={24} alt="قوقل"/>{" "}
              <h1 className="text-xs">Facebook</h1>
            </div>
            <div className="border h-9 px-4 md:w-36 border-gray-400 rounded-xl flex items-center gap-4">
              <Image src={facebook} width={24} height={24} alt="فيس بوك"/>{" "}
              <h1 className="text-xs">Facebook</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
