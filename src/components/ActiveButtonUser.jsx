
export default function ActiveButtonUser({title}) {
  return (
    <div className="cursor-pointer bg-primaryColo transition ease-in-out delay-150 hover:text-white  hover:-translate-y-1 hover:scale-105 hover:bg-primaryColo duration-30   inline-block text-white sm:w-32 w-64 text-xs md:text-xl md:w-[211px] h-[46px]  font-bold   text-center  py-2 rounded-lg">
      {title}
    </div>
  )
}
