import Link from "next/link";
import Dropdown from '../Dropdown';

export default function NavBar() {
  return (
    <div className="navbar mt-6">
        <div className="flex justify-between mx-11 items-center">
        <div>
                
                </div>
            <div  className=" nav_links flex gap-12">
                <h1 className="text-2xl font-bold">شركاء عروضنا</h1>
            <h1 className="text-2xl font-bold">عنا</h1>
            <h1 className="text-2xl font-bold">العروض</h1>
            <h1 className="text-2xl font-bold">الكوبونات</h1>
            <h1 className="text-2xl font-bold text-primaryColor">الرئيسية</h1>
            </div>
            <div className="mnue_dropdown">
        {/* <Dropdown /> */}
                
            </div>
            
        </div>
    </div>
  )
}
