import Image from "next/image";

export default function CardIcon({title , img}) {
  return (
    <div className="card_categries rounded-lg card_icon flex items-center flex-col bg-white dark:bg-socondaryDark dark:border-socondaryDark w-full md:w-52 p-4 border shadow-md">
        <div className="img_cardIcon"><Image src={img} className="icon_categries w-28 h-28 "  alt="صورة القسم" width={100} height={100}/></div>
        <div className="title_cardIcon text-2xl mt-4 font-bold "><h1 className="dark:text-white">{title}</h1> 
        </div>
    </div>
  )
}
