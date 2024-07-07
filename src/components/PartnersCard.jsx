import Image from "next/image";

export default function PartnersCard({title , img}) {
  return (
    <div className="rounded-lg card_icon flex items-center flex-col  w-52">
        <div className="img_cardIcon bg-gray-200 rounded-3xl w-48 text-center"><Image src={img}  alt="Card Icon" className=" w-full"/></div>
        <div className="  title_cardIcon text-2xl mt-4 font-bold"><h1>{title}</h1> 
        </div>
    </div>
  )
}
