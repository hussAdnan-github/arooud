
export default function MainInput({ lable , title}) {
  return (
    <div className="mb-6">
            <label for="first_name" className="font-normal  block mb-2 text-sm md:text-[16px] text-[#9796A1] me-4 dark:text-white">{lable}</label>
            <input type="text" id="first_name" className="bg-gray-50 border md:h-14 md:text-xl md:font-semibold border-[##DADADA] text-gray-500  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#DADADA] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end" placeholder={title}required />
        </div>
  )
}
