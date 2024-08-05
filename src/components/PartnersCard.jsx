import Image from "next/image";

export default function PartnersCard({title , img}) {
  return (
    <div className="rounded-lg card_partenrs flex items-center flex-col  w-52">
        <div className=" bg-gray-200 rounded-3xl md:w-60 md:h-60 flex justify-center"><Image src={img}  alt="شركاء عروض" className="" width={170}/></div>
        <div className="  title_partents text-3xl mt-4 font-bold"><h1>{title}</h1> 
        </div>
    </div>
  )
}
