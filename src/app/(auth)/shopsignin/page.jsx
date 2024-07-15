import ButtonRoundedPrimary from "@/components/ButtonRoundedPrimary";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import logo from '../../../../public/img/logo.png'
import Link from "next/link";
import BtnBack from "@/components/btnBack";
export default function page() {
  return (
    <div className="login_user container m-auto mt-10">
       <div className="profile flex justify-between">
        <div className="profile_img_user flex gap-4 items-center">
        <div className="img_user w-8 h-8 bg-gray-400 rounded-full">

</div>
          <div className="title_user">
            <h1>سالم سليم احمد</h1>
            <h1 className="text-gray-400">سيئون</h1>
          </div>
         
        </div>
        <Link href={'/'} className="img_logo">
        <Image src={logo} alt="logo" className="w-28"/>
        </Link>
        </div> 
       <Link href={'/'} className="flex items-center gap-3 mt-16 mb-6 sm:mb-0">
       <FaChevronLeft className="text-sm" />
       <BtnBack/>
       </Link>
  
 
    
    <div className="email_user">
     
      <div className="form_user_login flex flex-col items-end">
        <div className="text_ligin text-end">
        <h1 className="mb-4 text-2xl font-bold">لا يوجد لديك حساب؟ سجل الآن</h1>
        <p className="mb-3" style={{fontSize:"14px"}}>قم بالتسجيل حتى تتبع طلباتك وتصل بسهولة إلى قائمة مفضلاتك</p>
        </div>
        <form className="md:w-1/2 w-full text-end">

        <div className="mb-4">
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">أسـم المحل</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end" placeholder="حسيننن" required />
        </div>
       
        <div className="mb-4">
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">مجال عمل المحل التجاري</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end" placeholder="حسيننن" required />
        </div>
        <div className="mb-4">
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">موقع المحل</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end" placeholder="حسيننن" required />
        </div>
        
        <div className="mb-4">
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">حساب التـواصل</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end" placeholder="حسيننن" required />
        </div>
        
   <div className="flex justify-end gap-16 mt-12">
   <Link href={'/shopsignup'} type="submit" className="text-white bg-primaryColo transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-30 text-xl font-bold text-center inline-block w-60 md:w-48 rounded-full py-2">
   سجيل محل جديد
    </Link  >
   <ButtonRoundedPrimary title={'التسجيل'} urllink={'/'}/>
   </div>
        </form>
      </div>
    </div>
    </div>
  )
}
