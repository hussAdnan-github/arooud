import Image from "next/image";

export default function CardIcon({title , img}) {
  return (
    <div className="rounded-lg card_icon flex items-center flex-col bg-white w-full md:w-52 p-4 border shadow-md">
        <div className="img_cardIcon "><Image src={img}  alt="Card Icon"/></div>
        <div className="  title_cardIcon text-2xl mt-4 font-bold "><h1>{title}</h1> 
        
        </div>
    </div>
  )
}
