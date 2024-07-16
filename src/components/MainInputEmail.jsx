
export default function MainInputEmail({ lable , title}) {
  return (
    <div className="mb-6">
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">{lable}</label>
            <input type="text" id="first_name" className="bg-gray-50 border md:h-14 md:text-xl md:font-semibold border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end" placeholder={title}required />
        </div>
  )
}
