import ActiveButtonUser from "@/components/ActiveButtonUser";
import ButtonRoundedPrimary from "@/components/ButtonRoundedPrimary";
import NonActiveButtonUser from "@/components/NonActiveButtonUser";
import login from '../../../../public/img/login.png'
import facebook from '../../../../public/img/facebook.png'
import google from '../../../../public/img/google.png'
import Image from "next/image";
import ButtonRoundedSocendary from "@/components/ButtonRoundedSocendary";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";

export default function page() {
  return (
    <div className="login_user container m-auto">
      <div className="flex justify-between flex-col sm:flex-row items-center mt-12 taps_user">
         <div >
       <div className="flex items-center gap-3 mb-6 sm:mb-0">
       <FaChevronLeft className="text-sm" />

    <Link href={'/'} >
    <h1 className="font-bold">رجوع الى الخلف 
    </h1></Link>
       </div>
      </div>
     <div className="flex flex-col sm:flex-row gap-3">
     <div>
      <NonActiveButtonUser title={'التسجيل كمتجر إلكتروني'}/>
      </div>
      <div>
      <NonActiveButtonUser title={'التسجيل كمتجر إلكتروني'}/>
      </div>
      <div>
      <ActiveButtonUser title={'تسجيل دخول'}/>
      </div>
     
     </div>
  
    </div>

    <div className="email_user flex justify-between items-center md:items-start mt-10 flex-col md:flex-row">
      <div className="img_ligin_user w-full flex justify-center">
         <Image src={login} className="w-4/5 md:w-3/4"/>
      </div>

      <div className="form_user_login text-end  flex flex-col w-4/5">
        <div className="text_ligin">
        <p className="font-bold" style={{fontSize:"14px"}}>قم بالتسجيل حتى تتبع طلباتك وتصل بسهولة إلى قائمة مفضلاتك.</p>
        </div>
        <form>

<div className="mb-2">
    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">الاسم</label>
    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end" placeholder="حسيننن" required />
</div>
<div className="mb-2 flex flex-col items-end ">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">البريد الإلكتروني او رقم الهاتف</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end" placeholder="husseb@gia.com" required />
</div> 
<div>
    <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
    <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end" placeholder="Flowbite" required />
</div>  
<div className="flex justify-end gap-8 mt-4">
<ButtonRoundedPrimary title={'أرســال'}/>
</div>
</form>

        <div className="media_user flex justify-end gap-4 mt-4">
          <div className="border h-9 px-4 border-gray-400 rounded-2xl flex items-center gap-4">
          <Image src={facebook} width={24} height={24}/> <h1 className="text-xs">Facebook</h1>
          </div>
          <div className="border h-9 px-4 border-gray-400 rounded-2xl flex items-center gap-4">
          <Image src={google} width={24} height={24}/> <h1 className="text-xs">Facebook</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
