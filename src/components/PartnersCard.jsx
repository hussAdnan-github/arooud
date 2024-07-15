import Image from "next/image";

export default function PartnersCard({title , img}) {
  return (
    <div className="rounded-lg card_partenrs flex items-center flex-col  w-52">
        <div className=" bg-gray-200 rounded-3xl w-48 text-center"><Image src={img}  alt="img_partents Card Icon" className=" w-full"/></div>
        <div className="  title_partents text-2xl mt-4 font-bold"><h1>{title}</h1> 
        </div>
    </div>
  )
}
