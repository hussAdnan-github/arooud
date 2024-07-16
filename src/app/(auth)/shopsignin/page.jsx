import ButtonRoundedPrimary from "@/components/ButtonRoundedPrimary";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import logo from '../../../../public/img/logo.png'
import Link from "next/link";
import BtnBack from "@/components/btnBack";
import MainInput from "@/components/MainInput";
import TitleHeadRegiste from "@/components/TitleHeadRegiste";
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



      
  
 
    
    <div className="email_user mt-10">
    <Link href={'/'} className="flex items-center gap-3  mb-6 sm:mb-0">
       <FaChevronLeft className="text-sm" />
       <BtnBack/>
       </Link>
      <div className="form_user_login flex flex-col items-end">
      <TitleHeadRegiste title={'لا يوجد لديك حساب؟ سجل الآن'} description={'قم بالتسجيل حتى تتبع طلباتك وتصل بسهولة إلى قائمة مفضلاتك'}/>

        <form className="md:w-1/2 w-full text-end mt-6">

        <MainInput lable={'اسم المحل'} title={'sawdd'}/>
        <MainInput lable={'مجال عمل المحل التجاري'} title={'عطور'}/>
        <MainInput lable={'موقع المحل '} title={'عطور'}/>
        <MainInput lable={'حسابات التواصل '} title={'@sdaff'}/>
       
   
        
       
        
   <div className="flex justify-end gap-16 mt-12">
   <Link href={'/shopsignup'} type="submit" className="text-white bg-primaryColo transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-30 text-[16px] font-bold text-center inline-block w-60 md:w-[230px] rounded-full py-2">
   
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
