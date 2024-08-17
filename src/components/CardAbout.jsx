import Image from "next/image";
export default async function CardAbout() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/places/arewe/"
  );
  const about = await response.json();

  return (
    <div className="card_about">
      {/*  
        
    
      
        <div className=" my-10 items-center py-12 flex flex-col-reverse bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="px-8 md:px-20 text-center md:text-end flex flex-col items-center md:items-end  p-4 leading-normal">
                <h5 className="text-[64px] text-primaryColo md:mb-2 text-primaryColor font-bold tracking-tight dark:text-white mb-10">الرؤية</h5>
                <p className="mb-3 text-black dark:text-white text-[32px] font-light  ">حن صديق ساطع. مورد موثوق للادخار. أيقونة تضمن أنك ستحصل على قيمة أكبر مقابل نقودك. نجمع الناس مع العلامات التجارية التي تهتم بإضافة قيمة ومكافأة عملائها. نذهب إلى أبعد من ذلك بحثًا عن وفورات أكبر وعروض جديدة وطرق فريدة لمساعدتك في الاحتفاظ بأكبر قدر ممكن من المال في محفظتك.</p>
            </div>
            <Image className="w-2/3 rounded-t-lg h-96  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg  md:me-14" src={lamp} alt="رؤية الشركة" />
        </div>
      
      */}

      {about.map((item) => (
        <div key={item.id}>
          <div className="my-10 lg:h-96 py-4 flex flex-col-reverse lg:justify-between  bg-white border border-gray-200 dark:border-socondaryDark dark:bg-socondaryDark rounded-lg shadow lg:flex-row lg:w-full items-center  hover:bg-gray-100   ">
            <div className="px-8 md:px-20 text-end flex flex-col items-center md:items-end  p-4 leading-normal flex-1">
              <h5 className="text-[64px] text-primaryColo md:mb-2 text-primaryColor font-bold tracking-tight dark:text-white mb-10">
                الهدف
              </h5>
              <p className="mb-3 text-black dark:text-white text-[32px] font-light text-center md:text-end  ">
                {item.goal_ar}
              </p>
            </div>
            <Image
              className="w-2/3 rounded-t-lg h-96 md:h-80 md:w-80 md:rounded-none md:rounded-s-lg md:me-14"
              src={item.image_goal}
              alt="من نحن : هدف شركة عروض"
              width={300}
              height={300}
            />
          </div>

          <div className="my-10 lg:h-96 py-4 flex flex-col-reverse lg:justify-between  bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:w-full items-center  dark:border-socondaryDark dark:bg-socondaryDark">
            <div className="px-8 md:px-20 text-end flex flex-col items-center md:items-end  p-4 leading-normal flex-1">
              <h5 className="text-[64px] text-primaryColo md:mb-2 text-primaryColor font-bold tracking-tight dark:text-white mb-10">
                الفكرة
              </h5>
              <p className="mb-3 text-black dark:text-white text-[32px] font-light text-center md:text-end  ">
                {item.idea_ar}
              </p>
            </div>
            <Image
              className="w-2/3 rounded-t-lg h-96 md:h-80 md:w-80 md:rounded-none md:rounded-s-lg md:me-14"
              src={item.image_idea}
              alt="من نحن : فكرة شركة عروض"
              width={300}
              height={300}
            />
          </div>
          <div className="my-10 lg:h-96 py-4 flex flex-col-reverse lg:justify-between  bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:w-full items-center  dark:border-socondaryDark dark:bg-socondaryDark">
            <div className="px-8 md:px-20 text-end flex flex-col items-center md:items-end  p-4 leading-normal flex-1">
              <h5 className="text-[64px] text-primaryColo md:mb-2 text-primaryColor font-bold tracking-tight dark:text-white mb-10">
                الرسالة
              </h5>
              <p className="mb-3 text-black dark:text-white text-[32px] font-light text-center md:text-end  ">
                {item.message_ar}
              </p>
            </div>
            <Image
              className="w-2/3 rounded-t-lg h-96 md:h-80 md:w-80 md:rounded-none md:rounded-s-lg md:me-14"
              src={item.image_message}
              alt="من نحن : رسالة شركة عروض"
              width={300}
              height={300}
            />
          </div>
          <div className="my-10 lg:h-96 py-4 flex flex-col-reverse lg:justify-between  bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:w-full items-center  dark:border-socondaryDark dark:bg-socondaryDark">
            <div className="px-8 md:px-20 text-end flex flex-col items-center md:items-end  p-4 leading-normal flex-1">
              <h5 className="text-[64px] text-primaryColo md:mb-2 text-primaryColor font-bold tracking-tight dark:text-white mb-10">
                الرؤية
              </h5>
              <p className="mb-3 text-black dark:text-white text-[32px] font-light text-center md:text-end  ">
                {item.vision_ar}
              </p>
            </div>
            <Image
              className="w-2/3 rounded-t-lg h-96 md:h-80 md:w-80 md:rounded-none md:rounded-s-lg md:me-14"
              src={item.image_vision}
              alt="من نحن : رئية شركة عروض"
              width={300}
              height={300}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
