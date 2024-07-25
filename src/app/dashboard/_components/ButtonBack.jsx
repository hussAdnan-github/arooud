import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function ButtonBack() {
  const router = useRouter();

  return (
    <div className="btn_back flex items-center justify-end cursor-pointer"  onClick={()=>{router.back()}}>
      <h1 className="text-primaryColo font-bold ">العودة الى الخلف</h1>
      <FaArrowRightLong className="ms-4 text-primaryColo" />
    </div>
  );
}
