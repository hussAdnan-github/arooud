import ActiveButtonUser from "@/components/ActiveButtonUser";
import ButtonRoundedPrimary from "@/components/ButtonRoundedPrimary";
import NonActiveButtonUser from "@/components/NonActiveButtonUser";
import ButtonRoundedSocendary from "@/components/ButtonRoundedSocendary";
import { FaChevronLeft } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link";
import BtnBack from "@/components/btnBack";
import TitleHeadRegiste from "@/components/TitleHeadRegiste";
import MainInput from "@/components/MainInput";

export default function page() {
  return (
    <div className="login_user container m-auto">
      <div className="flex justify-between flex-col sm:flex-row items-center mt-12 taps_user">
         <div >
       <div className="flex items-center gap-3 mb-6 sm:mb-0">
       <FaChevronLeft className="text-sm" />

      <div className="cursor-pointer">
       <BtnBack/>

      </div>
       </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
     <Link href={'/storesignin'}div>
      <NonActiveButtonUser title={'التسجيل كمتجر إلكتروني'}/>
      </ Link>
      <Link href={'/shopsignin'}>
      <ActiveButtonUser title={'التسجيل كمحل تجاري'}/>
      </Link>
      <Link href={'/login'}>
      <NonActiveButtonUser title={'التسجيل كمستخدم'}/>
      </Link>
     
     </div>
  
    </div>

    <div className="email_user mt-10">
     
      <div className="form_user_login flex flex-col items-end">
  <TitleHeadRegiste title={'لا يوجد لديك حساب؟ سجل الآن'} description={'قم بالتسجيل حتى تتبع طلباتك وتصل بسهولة إلى قائمة مفضلاتك'}/>
        <form className="w-[543px] text-end ">

        <div className="mb-4">
       <label for="first_name" className="font-normal  block mb-2 text-sm md:text-[16px] text-[#9796A1] me-4 dark:text-white ">صورة الشعار</label>

       <label className="block mb-2 text-sm font-medium update_img text-[#9796A1]  dark:text-white" for="file_input"> <FaCircleChevronLeft className="text-[#9796A1] text-xl"/>إضافة صورة شعار المحل

       </label>
        <input className="  text-endblock w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

       </div>
     
       <MainInput lable={'اسم المحل'} title={'صدى الرنين'}/>

        <div className="mb-4">
          <label for="message" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">نبذة عن المحل</label>
          <textarea id="message" rows="4" className="resize-none text-end md:text-xl block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="سيؤؤؤؤن" required></textarea>
        </div>
        <MainInput lable={'أسـم المسجل'} title={'حسيننن'}/>
        <MainInput lable={'مجال عمل المحل التجاري'} title={'حسيننن'}/>

        <div className="mb-8 flex flex-col items-end ">
        <label for="email" className="font-normal  block mb-2 text-sm md:text-[16px] text-[#9796A1] me-4 dark:text-white">البريد الإلكتروني </label>
        <input type="email" id="email" className="md:h-14 md:text-[17px] border-[##DADADA]  placeholder-[#DADADA] bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end" placeholder="husseb@gia.com" required />
    </div> 
  
        <div className="mb-4">
            <label for="phone" className="font-normal  block mb-2 text-sm md:text-[16px] text-[#9796A1] me-4 dark:text-white">رقم الهاتف</label>
            <input type="tel" id="phone" className="bg-gray-50 md:h-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+967" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div className="mb-4">
            <label for="company" className="font-normal  block mb-2 text-sm md:text-[16px] text-[#9796A1] me-4 dark:text-white">المدينة</label>
            <Select className="bg-white">
      <SelectTrigger className="w-full md:h-14 text-[#9796A1] border-[#DADADA] md:text-xl">
        <SelectValue placeholder=" سيؤن" className="font-bold " />
      </SelectTrigger>
      <SelectContent className='bg-white text-[#9796A1]'style={{zIndex:'99999'}}>
        <SelectGroup className="">
        <SelectItem value="all" className='flex w-full justify-end text-[#9796A1]'>سيؤؤؤؤن  </SelectItem>
          <SelectItem value="est" className='flex w-full justify-end '>يشسيشسيشسي  </SelectItem>
          <SelectItem value="cst" className='flex w-full justify-end '>شسيسشيسشيسشي  </SelectItem>
        </SelectGroup>
      </SelectContent>
  </Select>  
  
   </div>  

          <MainInput lable={'موقع المحل'} title={'sawdd'}/>
          <MainInput lable={'رابط حساب منصة اكس'} title={'sawdd'}/>
          <MainInput lable={'رابط حساب الانستقرام'} title={'sawdd'}/>
          <MainInput lable={'رابط حساب آخر'} title={'sawdd'}/>

   
   <div className="flex justify-end gap-8 mt-10">
   <ButtonRoundedPrimary title={'إرســال'} urllink={'/'}/>
   </div>
        </form>
      </div>
    </div>
    </div>
  )
}
