export default function NonActiveButtonUser({ title }) {
  return (
    <div className="transition ease-in-out delay-150 hover:text-white   w-64 text-xl md:w-[211px] h-[46px]  font-medium text-center  py-2 rounded-lg   hover:-translate-y-1 hover:scale-105 hover:bg-primaryColo duration-30 bg-grayColor inline-block text-black ">
      {title}
    </div>
  );
}
