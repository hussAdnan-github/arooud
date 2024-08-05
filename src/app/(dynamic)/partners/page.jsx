// copy
import Header from "@/components/Header/Header";
import Image from "next/image";
import mainpartent from "../../../../public/img/mainpartent.svg";
import CADpatents from "../../../../public/img/CADpatents.svg";
import MainTitle from "@/components/MainTitle";
import { IoLocationOutline } from "react-icons/io5";
 
import HeaderText from "@/components/HeaderText";
import { LuPhone } from "react-icons/lu";
import SliderOfferDetailes from "@/components/SliderOfferDetailes";

export default function Partners() {
  return (
    <div className="main_partners">
      <Header />
      <div className="partents_mainImg mt-24">
        <Image src={mainpartent} className="w-full" height={450} />
      </div>
      <div className="title_partenrs text-end mt-10 m-auto container">
        <div className="mb-6">
          <MainTitle title={"محلات صدى الرنين"} />
        </div>
        <p className="description_partenrs text-3xl font-light	">
          حن صديق ساطع. مورد موثوق للادخار. أيقونة تضمن أنك ستحصل على قيمة أكبر
          مقابل نقودك. نجمع الناس مع العلامات التجارية التي تهتم بإضافة قيمة
          ومكافأة عملائها. نذهب إلى أبعد من ذلك بحثًا عن وفورات أكبر وعروض جديدة
          وطرق فريدة لمساعدتك في الاحتفاظ بأكبر قدر ممكن من المال في محفظتك.
        </p>
      </div>

      <div className="flex gap-28 items-center justify-end mt-16 container">
        <div className="partents-connect_phone  ">
          <div className="partents_located flex gap-4 items-center">
            <div className="text-end ">
              <h1 className="text-primaryColo font-medium text-3xl">
                يرجى التواصل
              </h1>
              <h1 className="text-3xl font-light	mt-2">+967 785×××××5</h1>
            </div>
            <LuPhone className="text-primaryColo  text-4xl  " />
          </div>
        </div>
        <div className="partents_located flex items-center gap-4">
          <div className="text-end ">
            <h1 className="text-primaryColo font-medium text-3xl">
              صدى الرنين
            </h1>
            <h1 className="text-3xl font-light	mt-2">اليمن - حضرموت - المكلا</h1>
          </div>
          <IoLocationOutline className="text-primaryColo  text-4xl" />
        </div>
        <div className="bg-[#F4F4F4] w-44 h-44 flex justify-center items-center rounded-lg">
          <Image className="h-auto" src={CADpatents} width={125} />
        </div>
      </div>

      <div className="container">
        <div className="mt-44 mb-16">
          <HeaderText titel={"عروض محلات صدى الرنين"} />
        </div>
        <SliderOfferDetailes />
      </div>
    </div>
  );
}
