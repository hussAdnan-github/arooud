import Link from "next/link";

export default function SubmitRoundedPrimary({title}) {
  return (
    <button type="submit" className="bg-primaryColor text-center inline-block text-white w-48 rounded-full py-2">
      {title}
    </button >
  )
}
