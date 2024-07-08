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
          
       <div className="flex items-center gap-3 mb-6 sm:mb-0">
       <FaChevronLeft className="text-sm" />

      <Link href={'/'}>
      <h1 className="font-bold">رجوع الى الخلف 
      </h1>
      </Link>
       </div>
       
    
  
    </div>

    <div className="email_user flex justify-between items-center md:items-start mt-10 flex-col md:flex-row">
      <div className="img_ligin_user w-full flex justify-center">
         <Image src={login} className="w-4/5 md:w-3/4"/>
      </div>

      <div className="form_user_login text-end mt-10 flex flex-col w-4/5">
        <div className="text_ligin">
        <h1 className="mb-4 text-2xl font-bold">تم إرسال الرمز إلى بريدك الإلكتروني</h1>
        <p className="" style={{fontSize:"14px"}}>قم بالتحقق من بريدك الإلكتروني ( تنتهي صلاحية الرمز بعد ٢٤ ساعة )</p>
        </div>
        <form className="flex flex-col items-end mt-10">
    <div className="flex space-x-2 rtl:space-x-reverse mb-8">
        <div>
            <label for="code-1" className="sr-only">First code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-next="code-2" id="code-1" className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-2" className="sr-only">Second code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-1" data-focus-input-next="code-3" id="code-2" className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-3" className="sr-only">Third code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-2" data-focus-input-next="code-4" id="code-3" className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-4" className="sr-only">Fourth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-3" data-focus-input-next="code-5" id="code-4" className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-5" className="sr-only">Fifth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-4" data-focus-input-next="code-6" id="code-5" className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-6" className="sr-only">Sixth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-5" id="code-6" className="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
    </div>
   <div className="flex justify-end gap-8">
   <ButtonRoundedPrimary title={'تـأكيـد' } urllink={'/'}/>
   </div>
        </form>
      </div>
    </div>
    </div>
  )
}
