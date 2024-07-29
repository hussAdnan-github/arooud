import Image from "next/image";
import gools from '../../public/img/gools.svg'
import lamp from '../../public/img/lamp.svg'
import message from '../../public/img/message.svg'

export default function CardAbout() {
  return (
    <div className="card_about">
        
        <div className="my-10 py-12 flex flex-col-reverse   bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full items-center  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="px-8 md:px-20 text-end flex flex-col items-center md:items-end  p-4 leading-normal">
                <h5 className="text-[64px] text-primaryColo md:mb-2 text-primaryColor font-bold tracking-tight dark:text-white mb-10">الهدف</h5>
                <p className="mb-3 text-[32px] font-light text-center md:text-end  ">حن صديق ساطع. مورد موثوق للادخار. أيقونة تضمن أنك ستحصل على قيمة أكبر مقابل نقودك. نجمع الناس مع العلامات التجارية التي تهتم بإضافة قيمة ومكافأة عملائها. نذهب إلى أبعد من ذلك بحثًا عن وفورات أكبر وعروض جديدة وطرق فريدة لمساعدتك في الاحتفاظ بأكبر قدر ممكن من المال في محفظتك.</p>
            </div>
            <Image className="w-2/3 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg md:me-14" src={gools} alt="card about gools" />
        </div>
        
        <div className=" my-10 py-12 flex items-center flex-col-reverse bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="px-8 md:px-20 text-center md:text-end flex flex-col items-center md:items-end  p-4 leading-normal">
                <h5 className="text-[64px] text-primaryColo md:mb-2 text-primaryColor font-bold tracking-tight dark:text-white mb-10">الفكرة</h5>
                <p className="mb-3 text-[32px] font-light  ">حن صديق ساطع. مورد موثوق للادخار. أيقونة تضمن أنك ستحصل على قيمة أكبر مقابل نقودك. نجمع الناس مع العلامات التجارية التي تهتم بإضافة قيمة ومكافأة عملائها. نذهب إلى أبعد من ذلك بحثًا عن وفورات أكبر وعروض جديدة وطرق فريدة لمساعدتك في الاحتفاظ بأكبر قدر ممكن من المال في محفظتك.</p>
            </div>
            <Image className="w-2/3 rounded-t-lg h-96  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg  md:me-14" src={lamp} alt="card about gools" />
        </div>
      
        <div className=" my-10 items-center py-12 flex flex-col-reverse bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="px-8 md:px-20 text-center md:text-end flex flex-col items-center md:items-end  p-4 leading-normal">
                <h5 className="text-[64px] text-primaryColo md:mb-2 text-primaryColor font-bold tracking-tight dark:text-white mb-10">الرسالة</h5>
                <p className="mb-3 text-[32px] font-light  ">حن صديق ساطع. مورد موثوق للادخار. أيقونة تضمن أنك ستحصل على قيمة أكبر مقابل نقودك. نجمع الناس مع العلامات التجارية التي تهتم بإضافة قيمة ومكافأة عملائها. نذهب إلى أبعد من ذلك بحثًا عن وفورات أكبر وعروض جديدة وطرق فريدة لمساعدتك في الاحتفاظ بأكبر قدر ممكن من المال في محفظتك.</p>
            </div>
            <Image className="w-2/3 rounded-t-lg h-96  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg  md:me-14" src={message} alt="card about gools" />
        </div>
      
        <div className=" my-10 items-center py-12 flex flex-col-reverse bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="px-8 md:px-20 text-center md:text-end flex flex-col items-center md:items-end  p-4 leading-normal">
                <h5 className="text-[64px] text-primaryColo md:mb-2 text-primaryColor font-bold tracking-tight dark:text-white mb-10">الرؤية</h5>
                <p className="mb-3 text-[32px] font-light  ">حن صديق ساطع. مورد موثوق للادخار. أيقونة تضمن أنك ستحصل على قيمة أكبر مقابل نقودك. نجمع الناس مع العلامات التجارية التي تهتم بإضافة قيمة ومكافأة عملائها. نذهب إلى أبعد من ذلك بحثًا عن وفورات أكبر وعروض جديدة وطرق فريدة لمساعدتك في الاحتفاظ بأكبر قدر ممكن من المال في محفظتك.</p>
            </div>
            <Image className="w-2/3 rounded-t-lg h-96  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg  md:me-14" src={lamp} alt="card about gools" />
        </div>
      
     

    </div>
  )
}
