export default function MainDropDown({ title }) {
  return (
    <div className="main_Dropdown">
      <div className="flex items-center justify-center p-4">
        <div className=" relative inline-block text-left dropdown">
          <span className="rounded-md shadow-sm">
            <button
              className="inline-flex md:w-40 bg-transparent text-[#9C9D9F] justify-center w-52 px-3   py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-primaryColo active:bg-gray-50 active:text-gray-800"
              type="button"
              aria-haspopup="true"
              aria-expanded="true"
              aria-controls="headlessui-menu-items-117"
            >
              <svg
                className="w-5 h-5 ml-2 mr-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>

              <span>{title}</span>
            </button>
          </span>
          <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
            <div
              className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              aria-labelledby="headlessui-menu-button-1"
              id="headlessui-menu-items-117"
              role="menu"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
