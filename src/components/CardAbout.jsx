import Image from "next/image";
import gools from '../../public/img/gools.svg'
import lamp from '../../public/img/lamp.svg'

export default function CardAbout() {
  return (
    <div className="card_about">
        
        <div class="flex bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full py-12  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="px-24 text-end flex flex-col items-end  p-4 leading-normal">
                <h5 class="text-6xl mb-2 text-primaryColor font-bold tracking-tight dark:text-white">الهدف</h5>
                <p class="mb-3 text-3xl font-normal text-gray-600 dark:text-gray-400 ">حن صديق ساطع. مورد موثوق للادخار. أيقونة تضمن أنك ستحصل على قيمة أكبر مقابل نقودك. نجمع الناس مع العلامات التجارية التي تهتم بإضافة قيمة ومكافأة عملائها. نذهب إلى أبعد من ذلك بحثًا عن وفورات أكبر وعروض جديدة وطرق فريدة لمساعدتك في الاحتفاظ بأكبر قدر ممكن من المال في محفظتك.</p>
            </div>
            <Image class="w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg me-14" src={gools} alt="card about gools" />

        </div>
        
        <div class="flex mt-16 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full py-12  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="px-24 text-end flex flex-col items-end  p-4 leading-normal">
                <h5 class="text-6xl mb-2 text-primaryColor font-bold tracking-tight dark:text-white">الفكرة</h5>
                <p class="mb-3 text-3xl font-normal text-gray-600 dark:text-gray-400 ">حن صديق ساطع. مورد موثوق للادخار. أيقونة تضمن أنك ستحصل على قيمة أكبر مقابل نقودك. نجمع الناس مع العلامات التجارية التي تهتم بإضافة قيمة ومكافأة عملائها. نذهب إلى أبعد من ذلك بحثًا عن وفورات أكبر وعروض جديدة وطرق فريدة لمساعدتك في الاحتفاظ بأكبر قدر ممكن من المال في محفظتك.</p>
            </div>
            <Image class="w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg me-14" src={lamp} alt="card about gools" />

        </div>
        

    </div>
  )
}
