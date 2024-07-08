import Image from "next/image";
import gools from '../../public/img/gools.svg'
import lamp from '../../public/img/lamp.svg'

export default function CardAbout() {
  return (
    <div className="card_about">
        
        <div className="my-10 py-12 flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="px-8 md:px-24 text-end flex flex-col items-center md:items-end  p-4 leading-normal">
                <h5 className="text-6xl mb-2 text-primaryColor font-bold tracking-tight dark:text-white">الهدف</h5>
                <p className="mb-3 text-3xl font-normal text-gray-600 dark:text-gray-400 ">حن صديق ساطع. مورد موثوق للادخار. أيقونة تضمن أنك ستحصل على قيمة أكبر مقابل نقودك. نجمع الناس مع العلامات التجارية التي تهتم بإضافة قيمة ومكافأة عملائها. نذهب إلى أبعد من ذلك بحثًا عن وفورات أكبر وعروض جديدة وطرق فريدة لمساعدتك في الاحتفاظ بأكبر قدر ممكن من المال في محفظتك.</p>
            </div>
            <Image className="w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg me-14" src={gools} alt="card about gools" />
        </div>
        
        <div className=" my-10 py-12 flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="px-8 md:px-24 text-end flex flex-col items-center md:items-end  p-4 leading-normal">
                <h5 className="text-6xl mb-2 text-primaryColor font-bold tracking-tight dark:text-white">الهدف</h5>
                <p className="mb-3 text-3xl font-normal text-gray-600 dark:text-gray-400 ">حن صديق ساطع. مورد موثوق للادخار. أيقونة تضمن أنك ستحصل على قيمة أكبر مقابل نقودك. نجمع الناس مع العلامات التجارية التي تهتم بإضافة قيمة ومكافأة عملائها. نذهب إلى أبعد من ذلك بحثًا عن وفورات أكبر وعروض جديدة وطرق فريدة لمساعدتك في الاحتفاظ بأكبر قدر ممكن من المال في محفظتك.</p>
            </div>
            <Image className="w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg me-14" src={lamp} alt="card about gools" />
        </div>
        <div className=" my-10 py-12 flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="px-8 md:px-24 text-end flex flex-col items-center md:items-end  p-4 leading-normal">
                <h5 className="text-6xl mb-2 text-primaryColor font-bold tracking-tight dark:text-white">الهدف</h5>
                <p className="mb-3 text-3xl font-normal text-gray-600 dark:text-gray-400 ">حن صديق ساطع. مورد موثوق للادخار. أيقونة تضمن أنك ستحصل على قيمة أكبر مقابل نقودك. نجمع الناس مع العلامات التجارية التي تهتم بإضافة قيمة ومكافأة عملائها. نذهب إلى أبعد من ذلك بحثًا عن وفورات أكبر وعروض جديدة وطرق فريدة لمساعدتك في الاحتفاظ بأكبر قدر ممكن من المال في محفظتك.</p>
            </div>
            <Image className="w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg me-14" src={lamp} alt="card about gools" />
        </div>
        <div className=" my-10 py-12 flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="px-8 md:px-24 text-end flex flex-col items-center md:items-end  p-4 leading-normal">
                <h5 className="text-6xl mb-2 text-primaryColor font-bold tracking-tight dark:text-white">الهدف</h5>
                <p className="mb-3 text-3xl font-normal text-gray-600 dark:text-gray-400 ">حن صديق ساطع. مورد موثوق للادخار. أيقونة تضمن أنك ستحصل على قيمة أكبر مقابل نقودك. نجمع الناس مع العلامات التجارية التي تهتم بإضافة قيمة ومكافأة عملائها. نذهب إلى أبعد من ذلك بحثًا عن وفورات أكبر وعروض جديدة وطرق فريدة لمساعدتك في الاحتفاظ بأكبر قدر ممكن من المال في محفظتك.</p>
            </div>
            <Image className="w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg me-14" src={lamp} alt="card about gools" />
        </div>
        
     

    </div>
  )
}
