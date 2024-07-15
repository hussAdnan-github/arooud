export default function ButtonRoundedSocendary({title}) {
  return (
    <button type="submit" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-30 hover:bg-primaryColo hover:text-white hover:border-0 hover:font-bold border border-gray-400 text-gray-400 inline-block w-48 rounded-full py-2">
      {title}
    </button>
  )
}
