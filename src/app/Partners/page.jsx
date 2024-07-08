import Header from "@/components/Header/Header";
import Image from "next/image";
import mainpartent from '../../../public/img/mainpartent.svg'
import CADpatents from '../../../public/img/CADpatents.svg'
import MainTitle from "@/components/MainTitle";
import { IoLocationOutline } from "react-icons/io5";
import SliderCategries from "@/components/SliderCategries";
import SlideOffer from "@/components/SlideOffer";
import HeaderText from "@/components/HeaderText";

export default function Partners() {
  return (
    <div className="main_partners">
    <Header />
    <div className="partents_mainImg mt-24">
        <Image src={mainpartent} className="w-full" height={450}/>
    </div>
    <div className="title_partenrs text-end mt-10 m-auto container">
      <div className="mb-6">

      <MainTitle title={'محلات صدى الرنين'} />

      </div>
      <p className="description_partenrs text-3xl">حن صديق ساطع. مورد موثوق للادخار. أيقونة تضمن أنك ستحصل على قيمة أكبر مقابل نقودك. نجمع الناس مع العلامات التجارية التي تهتم بإضافة قيمة ومكافأة عملائها. نذهب إلى أبعد من ذلك بحثًا عن وفورات أكبر وعروض جديدة وطرق فريدة لمساعدتك في الاحتفاظ بأكبر قدر ممكن من المال في محفظتك.</p>
    </div>

    <div className="flex gap-28 items-center justify-end mt-16 container">
       
      <div className="partents-connect">
                <div className="partents_located flex gap-4 items-center">
                <div className="text-end ">
                <h1 className="text-primaryColo font-bold text-2xl">يرجى التواصل</h1>
                <h1 className="text-2xl">+967 785×××××5</h1>
                </div>
            <IoLocationOutline className="text-primaryColor text-xl"/>
                  </div>
                </div>
                <div className="partents_located flex items-center gap-4">
                <div className="text-end ">
                <h1 className="text-primaryColo font-bold text-2xl">صدى الرنين</h1>
                <h1 className="text-2xl">اليمن - حضرموت - المكلا</h1>
                </div>
            <IoLocationOutline className="text-primaryColo  text-xl"/>
                </div>  
                <div>
                  <Image src={CADpatents} />
                </div>
      </div>
     
     <div className="container">
     <div className="mt-44 mb-16">
    <HeaderText titel={"عروض محلات صدى الرنين"}/> 
  </div>
     <SlideOffer />
     </div>

    </div>
  )
}
