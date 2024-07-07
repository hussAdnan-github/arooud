import ActiveButtonUser from "@/components/ActiveButtonUser";
import ButtonRoundedPrimary from "@/components/ButtonRoundedPrimary";
import NonActiveButtonUser from "@/components/NonActiveButtonUser";
import login from '../../../../public/img/login.png'
import facebook from '../../../../public/img/facebook.png'
import google from '../../../../public/img/google.png'
import Image from "next/image";
import ButtonRoundedSocendary from "@/components/ButtonRoundedSocendary";
import { FaChevronLeft } from "react-icons/fa";
import logo from '../../../../public/img/logo.png'
import Link from "next/link";


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
        <div className="img_logo">
        <Image src={logo} alt="logo" className="w-28"/>
        </div>
        </div> 
       <Link href={'/'} className="flex items-center gap-3 mt-16 mb-6 sm:mb-0">
       <FaChevronLeft className="text-sm" />
       <h1 className="font-bold">رجوع الى الخلف 
       </h1>
       </Link>
  
 
    
    <div className="email_user">
     
      <div className="form_user_login flex flex-col items-end">
        <div className="text_ligin text-end">
        <h1 className="mb-4 text-2xl font-bold">لا يوجد لديك حساب؟ سجل الآن</h1>
        <p className="mb-3" style={{fontSize:"14px"}}>قم بالتسجيل الدخول حتى تتبع طلباتك وتصل بسهولة إلى قائمة مفضلاتك.</p>
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
   <ButtonRoundedPrimary title={'سجيل محل جديد'} urllink={'/shopsignup'}/>
   <ButtonRoundedPrimary title={'التسجيل'} urllink={'/'}/>
   </div>
        </form>
      </div>
    </div>
    </div>
  )
}
