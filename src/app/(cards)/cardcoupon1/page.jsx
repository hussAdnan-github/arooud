import Image from "next/image";
import logo from "../../../../public/img/logo.png";
import { RxEnter } from "react-icons/rx";
import { BiSolidDiscount } from "react-icons/bi";
import { CgTimelapse } from "react-icons/cg";
import { MdDiscount } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import code from "../../../..//public/img/code.png";

export default function page() {
  return (
    <div className="card_coupon_two mt-20">
      <div className="flex flex-col-reverse md:flex-row justify-between h-auto md:h-[460px]">
        <div className="price_card_coupon w-full flex flex-col items-center md:items-end  me-10 relative  ">
          <div className="flex gap-4 px-2 md:px-8 mt-14 ">
            <h1 className="text-2xl  md:text-end font-bold px-0 md:px-10 text-center">
              كوبون من محلات صدى الرنين للهواتف الذكية وجميع مستلازمات الجوال
            </h1>
          </div>
          <div className="flex items-center  mt-10 gap-4">
            <div className="">
              <h1 className="text-xl">
                قسيمة بقيمة <span>100</span> ريال{" "}
              </h1>
              <h1 className="text-xl text-end">من متجر شي ان</h1>
            </div>

            <BiSolidDiscount className=" text-4xl rotate-90 text-gray-400" />
          </div>
          <div className="flex md:flex-row flex-col justify-center md:justify-end w-full items-center gap-10 mt-8 md:mt-4">
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
          <div className="mt-8 md:mt-2">
            <h1 className="text-xl">شروط استخدام الكوبون</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center mt-10 md:mt-0 justify-between w-full ps-0 md:ps-24 md:items-end static md:absolute  bottom-0">
            <Image
              src={code}
              alt="رمز باركود"
              className="ms-10 md:ms-20 "
              width={100}
              height={100}
            />

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
          className="details_card_coupon items-center w-full md:w-[85%] gap-2 relative border-l-2 md:border-primaryColo border-dashed pt-10"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1 className="absolute top-[50%] -right-40 text-gray-300 -rotate-90 text-xl">
            في حال تغيير او تعديل على القسيمة تلغى القسيمة
          </h1>
          <div className="card_coupon_logo w-[260px] ">
            <Image src={logo} alt="شعار عروض" className="w-full " height={100} />
          </div>
          <h1 className="text-[80px] leading-none	 inline-block font-bold  ">
            خصم خاص
          </h1>

          <div>
            <h1 className="text-9xl leading-none	  font-bold text-primaryColo px-16 py-2 inline-block pb-7 rounded-3xl text-center">
              10%
            </h1>
            <div></div>
          </div>
          <div className="flex items-center  gap-3 absolute bottom-0">
            <RxEnter className="text-primaryColo text-2xl" />

            <h1 className="text-2xl">3urud.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
