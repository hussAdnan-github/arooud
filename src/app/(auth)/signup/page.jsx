import ActiveButtonUser from "@/components/ActiveButtonUser";
import NonActiveButtonUser from "@/components/NonActiveButtonUser";
import login from "../../../../public/img/login.png";
import Image from "next/image";
import Link from "next/link";
import BtnBack from "@/components/BtnBack";
import TitleHeadRegiste from "@/components/TitleHeadRegiste";

import Sigin from "@/components/form/Sigin";
export default function page() {
  return (
    <div className="login_user container m-auto">
      <div className="flex justify-between flex-col sm:flex-row items-center mt-12 taps_user">
        <div>
          <div className="">
            <BtnBack />
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row gap-3">
          <Link href={"/websitesignin"} div>
            <NonActiveButtonUser title={"التسجيل كمتجر إلكتروني"} />
          </Link>
          <Link href={"/marketsignin"}>
            <NonActiveButtonUser title={"التسجيل كمحل تجاري"} />
          </Link>
          <Link href={"/signin"}>
            <ActiveButtonUser title={"التسجيل كمستخدم"} />
          </Link>
        </div>
      </div>

      <div className="email_user flex justify-between items-center md:items-start mt-12 flex-col md:flex-row">
        <div className="img_ligin_user w-full flex justify-center">
          <Image src={login} className="w-4/5 md:w-3/4" alt="شعار عروض" />
        </div>
        <div className="form_user_login text-end flex flex-col mt-8 md:mt-0 w-full md:w-4/5">
          <TitleHeadRegiste
            title={"لا يوجد لديك حساب؟ سجل الآن"}
            description={
              "قم بالتسجيل حتى تتبع طلباتك وتصل بسهولة إلى قائمة مفضلاتك"
            }
          />

          <Sigin />
        </div>
      </div>
    </div>
  );
}
