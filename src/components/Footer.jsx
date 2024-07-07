import Image from 'next/image'
import footer from '../../public/img/footer.svg'
import twitter from "../../public/img/twitter.svg";
import facebook from "../../public/img/facebook.svg";
import instgram from "../../public/img/instgram.svg";
import { FaPhone } from "react-icons/fa6";


export default function Footer() {
  return (
    <div className="footer z-20 w-full mt-24">
           <div className='footer_img'>
           <div className="flex justify-around text-white items-start pt-8 pb-4">
               <div className='flex flex-col items-end gap-4'>
                <p className='font-bold text-2xl'>تابعنا</p>
                <h1 className='text-xl'>يمكنك متابعتنا على منصات التواصل الإجتماعى</h1>
                <div className='flex items-center'>
                <div className='flex'>
                    <Image src={facebook} width={30} alt='twintter imgae'/>
                    <Image src={instgram} width={30} alt='twintter imgae'/>
                    <Image src={twitter} width={30} alt='twintter imgae'/>
                </div>
                <h1 className='text-white text-xl' style={{letterSpacing:"5px"}}>@eurud_yemen</h1>
             
                </div>
                <div className='flex gap-4'>
                <div><FaPhone className='text-[#FFDE17] text-2xl'/>  </div>
                    <h1 className='font-bold'>اتصل بنا</h1>
                </div>
                <h1 className='text-xl'>+967 785×××××5</h1>
                <h1 className='text-xl'>+967 785×××××5</h1>
               </div>
               <div className='mt-8'>
                <h1 className='text-5xl text-end'>عروض في أي وقت</h1>
                <h1 className='text-5xl text-end text-[#FFDE17]'>وأي مكان</h1>
               </div>
               </div>
           </div>
           <div className="footer_down">
            

<footer class="bg-white rounded-lg shadow dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
     
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">سياسة الخصوصية</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">خريطة الموقع</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">الشروط والأحكام</a>
        </li>
    </ul>
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">حقوق الطبع والنشر@ eroud.com جميع الحقوق محفوظة.
    </span>
    </div>
</footer>

           </div>
    </div>
  )
}
