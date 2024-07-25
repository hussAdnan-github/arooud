import Link from "next/link";

export default function Button({title , urllink}) {
  return (
    <Link href={urllink} className="bg-primaryColo  text-xl font-bold text-center inline-block text-white w-56 h-12 rounded-full py-2">
      {title}
    </Link >
  )
}
