import ActiveButtonUser from "@/components/ActiveButtonUser";
import ButtonRoundedPrimary from "@/components/ButtonRoundedPrimary";
import NonActiveButtonUser from "@/components/NonActiveButtonUser";
import login from '../../../../public/img/login.png'
import facebook from '../../../../public/img/facebook.png'
import google from '../../../../public/img/google.png'
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import BtnBack from "@/components/BtnBack";
import TitleHeadRegiste from "@/components/TitleHeadRegiste";
export default function page() {
  return (
    <div className="login_user container m-auto ">
      <div className="flex justify-between flex-col sm:flex-row items-center mt-12 taps_user">
         <div >
       <Link href={'/'} className="flex items-center gap-3 mb-6 sm:mb-0">
       <FaChevronLeft className="text-sm" />

       <BtnBack/>

       </Link>
      </div>
     <div className="flex flex-col sm:flex-row gap-4 ">
     <Link href={'/storesignin'}div>
      <NonActiveButtonUser title={'التسجيل كمتجر إلكتروني'}/>
      </ Link>
      <Link href={'/shopsignin'}>
      <NonActiveButtonUser title={'التسجيل كمحل تجاري'}/>
      </Link>
      <Link href={'/login'}>
      <ActiveButtonUser title={'التسجيل كمستخدم'}/>
      </Link>
     
     </div>
  
    </div>

    <div className="email_user flex justify-between mt-8   items-center md:items-start  flex-col md:flex-row">
      <div className="img_ligin_user w-full flex justify-center">
         <Image src={login} className="w-4/5 md:w-3/4"/>
      </div>

      <div className="form_user_login text-end flex flex-col w-4/5">
        <TitleHeadRegiste title={'لديك حساب؟ سجل الدخول'} description={'قم بالتسجيل الدخول حتى تتبع طلباتك وتصل بسهولة إلى قائمة مفضلاتك'}/>
        <form>

    
    <div className="mb-8 flex flex-col items-end ">
        <label for="email" className="block mb-2 text-[16px]  font-medium text-[#9796A1] dark:text-white me-4">البريد الإلكتروني او رقم الهاتف</label>
        <input type="email" id="email" className="md:h-14 md:text-[17px] border-[##DADADA]  placeholder-[#DADADA] bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end" placeholder="husseb@gia.com" required />
    </div> 
  
   <div className="flex justify-end gap-8">
   <Link href={'/signup'} type="submit" className=" text-center font-bold transition ease-in-out delay-150  hover:scale-105  duration-30 hover:bg-primaryColo hover:text-white hover:border-white md:w-[230px] hover:font-bold border border-gray-400 text-gray-400 inline-block w-48 rounded-full py-2">
     تسجــيل جديد
    </Link>
   <ButtonRoundedPrimary title={'إرسال'} urllink={'/'}/>
   </div>
   <h1 className="text-[#9796A1] text-[16px] font-normal	 mt-10">أو سجل عبر حساباتك على منصات التواصل الإجتماعي </h1>
        </form>

        <div className="media_user flex justify-end gap-4 mt-4">
        <div className="border h-9 px-4 md:w-36 border-gray-400 rounded-xl flex items-center gap-4">
          <Image src={google} width={24} height={24}/> <h1 className="text-xs">Facebook</h1>
          </div>
          <div className="border h-9 px-4 md:w-36 border-gray-400 rounded-xl flex items-center gap-4">
          <Image src={facebook} width={24} height={24}/> <h1 className="text-xs">Facebook</h1>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}
