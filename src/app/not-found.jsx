import Image from "next/image";
import Link from "next/link";
import logo from '../../public/img/logo.png'

export default function page() {
  return (
    <div className="h-[600px] w-full flex flex-col justify-center items-center">
      <Link href={"/"} className="">
        <Image src={logo} alt="Logo" width={400} height={300} />
      </Link>
      <h1 className="text-8xl text-primaryColo">الصفحة غير موجوده</h1>
    </div>
  );
}
