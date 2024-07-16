import Link from "next/link";

export default function ButtonRounded({title , urllink}) {
  return (
    <button type="submit" className="text-white bg-primaryColo transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-30 text-[16px] font-bold text-center inline-block w-60 md:w-[230px] rounded-full py-2">
       {title}
    </button >
  )
}
