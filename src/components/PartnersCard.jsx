import Image from "next/image";

export default function PartnersCard({title , img}) {
  return (
    <div className="rounded-lg card_partenrs flex items-center flex-col  w-52">
        <div className=" bg-gray-200 dark:bg-socondaryDark rounded-3xl w-64 h-64 flex items-center justify-center"><Image src={img}  alt="شركاء عروض" className="md:w-44 md:h-44 " width={170} height={170}/></div>
        <div className="  title_partents text-3xl mt-4 font-bold text-black dark:text-white">{title} 
        </div>
    </div>
  )
}
