import Image from "next/image";
import logo from "../../../public/img/logo.png";
import { RxEnter } from "react-icons/rx";
import { BiSolidDiscount } from "react-icons/bi";
import { CgTimelapse } from "react-icons/cg";
import { MdDiscount } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function page() {
  return (
    <div className="card_coupon">
      <div className="flex justify-between ">
        <div className="price_card_coupon w-full flex flex-col items-end  me-10 ">
          <div className="  px-28 mt-24">
            <h1 className="text-xl  text-end font-bold">
              كوبون من محلات صدى الرنين للهواتف الذكية وجميع مستلازمات الجوال
            </h1>
          </div>
          <div className="flex items-center mt-12  gap-4">
            <div className="">
              <h1 className="text-xl">
                قسيمة بقيمة <span>100</span> ريال{" "}
              </h1>
              <h1 className="text-xl text-end">من متجر شي ان</h1>
            </div>

            <BiSolidDiscount className=" text-4xl rotate-90 text-gray-400" />
          </div>
          <div className="flex items-center gap-10 mt-6">
            <div className="flex items-center justify-end gap-4 ">
              <div>
                <h1 className="text-xl text-gray-400">صلاحية الكوبون</h1>
                <h1 className="text-xl text-end text-gray-400">2024/22/2</h1>
              </div>

              <CgTimelapse className=" text-4xl text-gray-400" />
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-xl text-gray-400">
                عدد استخدام القسيمة <span>1</span>
              </h1>

              <MdDiscount className=" text-4xl  text-gray-400" />
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-xl">شروط استخدام الكوبون</h1>
          </div>
          <div className="flex justify-between w-full px-10 items-center mt-24">
            <div>parcooode</div>
            <div className="flex     gap-2 ps-10 items-center">
              <BsTwitterX className="text-xl text-primaryColo" />
              <FaInstagram className="text-xl text-primaryColo" />
              <FaYoutube className="text-xl text-primaryColo" />
              <FaSnapchatGhost className="text-xl text-primaryColo" />
              <FaTiktok className="text-xl text-primaryColo" />
              <h1 className="text-2xl">3urud.com</h1>
            </div>
          </div>
        </div>
        <div
          className="details_card_coupon items-center w-full    border-l-4 border-primaryColo border-dashed mt-10 relative"
          style={{ display: "flex", flexDirection: "column" }}
        > 
        <h1>في حال تغيير او تعديل على  القسيمة تلغى القسيمة</h1>
          <div className="card_coupon_logo w-[260px] ">
            <Image src={logo} alt="Logo" className="w-full" height={100} />
          </div>
          <h1 className="text-[80px] inline-block font-bold  ">خصم خاص</h1>

          <div>
            <h1 className="text-9xl  font-bold text-primaryColo px-16 py-2 inline-block pb-7 rounded-3xl text-center">
              10%
            </h1>
            <div></div>
          </div>
          <div className="flex items-center gap-3  mt-20 ">
            <RxEnter className="text-primaryColo text-2xl" />

            <h1 className="text-2xl">3urud.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
