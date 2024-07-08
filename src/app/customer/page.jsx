import Image from "next/image";
import logo from '../../../public/img/logo.png'
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { FaCircleChevronLeft } from "react-icons/fa6";
import ButtonRoundedPrimary from "@/components/ButtonRoundedPrimary";
import login from '../../../public/img/login.png'



export default function page() {
  return (
    <div className="customer container m-auto mt-10">
      
      <div className="profile flex justify-between mb-20">
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

      <div className="cutomer_info">
        <div className="flex flex-row justify-between">
        <div className="flex flex-col items-center">
        <div className="customer_img  h-96 w-96 object-cover">
            <Image src={login } alt="asdasd" className="rounded-full w-full h-full border border-black object-contain"/>
          </div>
        <div>
         <Link href={'#'}> <h1 className="text-primaryColo underline mt-10 text-xl font-bold"> تعديل</h1></Link>
         </div>           
        </div>
          <div className="cutomer_data"style={{width:'45%'}}>
          <div className=" flex flex-col items-end gap-8 me-32 mt-12">
          <div className="text-end name relative w-full">
          <h1>الاسم</h1>
          <h1 className="text-black text-xl font-bold mt-4">سالم سليم احمد</h1>
          <Link href={'#'}> <h1 className="text-primaryColo font-bold underline absolute left-6 top-2/4"> تعديل</h1></Link>

          </div>
         <div className="text-end email relative w-full">
         <h1>البريد الإلكتروني</h1>
         <h1 className=" mt-4 text-black text-xl font-bold">sawdd@gmail.com</h1>
         <Link href={'#'}> <h1 className="text-primaryColo font-bold underline absolute left-6 top-2/4"> تعديل</h1></Link>

         </div>
        <div className="text-end countary relative w-full ">
              <h1 className="text-end">المدينة</h1>
            <h1 className=" mt-4 text-black text-xl font-bold">سيئون</h1>
          <Link href={'#'}> <h1 className="text-primaryColo font-bold underline absolute left-6 top-2/4"> تعديل</h1></Link>

        </div>
        <div className="flex justify-end gap-16 me-10 mt-10">
   <ButtonRoundedPrimary title={'التسجيل كمحل تجاري'} urllink={'/'}/>
   <ButtonRoundedPrimary title={'التسجيل كمتجر الكتروني'} urllink={'/'}/>
   </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}
