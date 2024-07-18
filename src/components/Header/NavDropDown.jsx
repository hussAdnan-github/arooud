import { FaAngleDown } from "react-icons/fa6";

export default function NavbarDropdown() {



  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <div className="nav_dropdown hidden md:block">
      <div className="flex flex-col justify-center ">
        <div className="flex items-center justify-center">
          <div className=" relative inline-block text-left dropdown">
            <span className="rounded-md shadow-sm">
              <button
                className="hover:-translate-y-1 hover:scale-100   bg-gray-200 hover:bg-gray-100  inline-flex justify-center px-4 py-2 rounded-full w-48 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border  border-gray-300 hover:text-gray-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
                aria-controls="headlessui-menu-items-117"
              >
                <FaAngleDown className="mt-2 me-4 text-primaryColo" />

                <span className="text-xl font-bold navbar_down">
                  الفـــلــتـــــرة
                </span>
              </button>
            </span>
            <div
              className="fixed left-0 w-full opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
              style={{ zIndex: "99999999", top: "134px" }}
            >
              <div
                className="absolute right-0 w-full mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                aria-labelledby="headlessui-menu-button-1"
                id="headlessui-menu-items-117"
                role="menu"
              >
                <div className="tablels px-12 bg-[#F8F8F8]">
                  <div className="flex gap-2 py-8">
                    {/* Filter 3 */}
                    <div className="flex flex-col gap-9 items-end  flex-1 md:me-10">
                      <h1 className="text-2xl mb-1  underline underline-offset-8 decoration-[#DDDDDD] font-medium	">
                        الفلترة حسب السعر
                      </h1>
                      <div
                        className="filter_price grid md:grid-cols-2 text-[#7D7E80]"
                        style={{ direction: "rtl" }}
                      >
                        <div className="flex items-center">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="accent-primaryColo     me-2 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />

                          <h1 className="text-sm font-bold">مابين 5000 الف</h1>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="accent-primaryColo  me-2 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />

                          <h1 className="text-sm font-bold">اقل من 5000 الف</h1>
                        </div>
                        <div className="flex items-center mt-6">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="accent-primaryColo  me-2 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />

                          <h1 className="text-sm font-bold">اقل من 5000 الف</h1>
                        </div>
                      </div>

                      <h1 className="text-2xl  underline underline-offset-8 decoration-[#DDDDDD] font-medium	">
                        الفلترة حسب اقسام عروض
                      </h1>

                      <div
                        className="filter_work grid md:grid-cols-2 gap-4 text-[#7D7E80]"
                        style={{ direction: "rtl" }}
                      >
                        <div className="flex items-center">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="accent-primaryColo  me-2 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />

                          <h1 className="text-sm font-bold">مواقع عالمية</h1>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="accent-primaryColo  me-2 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />

                          <h1 className="text-sm font-bold">متجر الكتروني</h1>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="accent-primaryColo  me-2 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />

                          <h1 className="text-sm font-bold">مواقع عالمية</h1>
                        </div>
                      </div>
                    </div>

                    {/* Filter 2 */}
                    <div className="text-end me-2">
                      <h1 className=" text-2xl mb-8  underline underline-offset-8 decoration-[#DDDDDD] font-medium	">
                        الفلترة حسب الاقسام
                      </h1>
                      <div
                        className="filter_work grid md:grid-cols-3 gap-2 text-[#7D7E80]"
                        style={{ direction: "rtl" }}
                      >
                        <div
                          className="text-center border border-gray-500 w-40 overflow-hidden rounded-full h-10 flex justify-center items-center"
                          style={{
                            borderColor: generateRandomColor(),
                          }}
                        >
                          <h1>قسم السفر والسياحة</h1>
                        </div>

                        <div
                          className="text-center border border-gray-500 w-40 overflow-hidden rounded-full h-10 flex justify-center items-center"
                          style={{
                            borderColor: generateRandomColor(),
                          }}
                        >
                          <h1>قسم السفر والسياحة</h1>
                        </div>

                        <div
                          className="text-center border border-gray-500 w-40 overflow-hidden rounded-full h-10 flex justify-center items-center"
                          style={{
                            borderColor: generateRandomColor(),
                          }}
                        >
                          <h1>قسم السفر والسياحة</h1>
                        </div>

                        <div
                          className="text-center border border-gray-500 w-40 overflow-hidden rounded-full h-10 flex justify-center items-center"
                          style={{
                            borderColor: generateRandomColor(),
                          }}
                        >
                          <h1>قسم السفر والسياحة</h1>
                        </div>

                        <div
                          className="text-center border border-gray-500 w-40 overflow-hidden rounded-full h-10 flex justify-center items-center"
                          style={{
                            borderColor: generateRandomColor(),
                          }}
                        >
                          <h1>قسم السفر والسياحة</h1>
                        </div>

                        <div
                          className="text-center border border-gray-500 w-40 overflow-hidden rounded-full h-10 flex justify-center items-center"
                          style={{
                            borderColor: generateRandomColor(),
                          }}
                        >
                          <h1>قسم السفر والسياحة</h1>
                        </div>

                        <div
                          className="text-center border border-gray-500 w-40 overflow-hidden rounded-full h-10 flex justify-center items-center"
                          style={{
                            borderColor: generateRandomColor(),
                          }}
                        >
                          <h1>قسم السفر والسياحة</h1>
                        </div>

                        <div
                          className="text-center border border-gray-500 w-40 overflow-hidden rounded-full h-10 flex justify-center items-center"
                          style={{
                            borderColor: generateRandomColor(),
                          }}
                        >
                          <h1>قسم السفر والسياحة</h1>
                        </div>

                        <div
                          className="text-center border border-gray-500 w-40 overflow-hidden rounded-full h-10 flex justify-center items-center"
                          style={{
                            borderColor: generateRandomColor(),
                          }}
                        >
                          <h1>قسم السفر والسياحة</h1>
                        </div>

                        <div
                          className="text-center border border-gray-500 w-40 overflow-hidden rounded-full h-10 flex justify-center items-center"
                          style={{
                            borderColor: generateRandomColor(),
                          }}
                        >
                          <h1>قسم السفر والسياحة</h1>
                        </div>

                        <div
                          className="text-center border border-gray-500 w-40 overflow-hidden rounded-full h-10 flex justify-center items-center"
                          style={{
                            borderColor: generateRandomColor(),
                          }}
                        >
                          <h1>قسم السفر والسياحة</h1>
                        </div>
                      </div>
                    </div>

                    {/* Filter 1 */}
                    <div className="text-end">
                      <h1 className="  text-2xl mb-8  underline underline-offset-8 decoration-[#DDDDDD] font-medium	">
                        الفلترة حسب المنطقة
                      </h1>
                      <div
                        className="filter_countery grid md:grid-cols-3 gap-2 text-[#7D7E80]"
                        style={{ direction: "rtl" }}
                      >
                        <div className="text-center border border-gray-500 w-28 overflow-hidden rounded-full h-10 flex justify-center items-center">
                          <h1>تريم</h1>
                        </div>
                        <div className="text-center border border-gray-500 w-28 overflow-hidden rounded-full h-10 flex justify-center items-center">
                          <h1>تريم</h1>
                        </div>
                        <div className="text-center border border-gray-500 w-28 overflow-hidden rounded-full h-10 flex justify-center items-center">
                          <h1>تريم</h1>
                        </div>
                        <div className="text-center border border-gray-500 w-28 overflow-hidden rounded-full h-10 flex justify-center items-center">
                          <h1>تريم</h1>
                        </div>
                        <div className="text-center border border-gray-500 w-28 overflow-hidden rounded-full h-10 flex justify-center items-center">
                          <h1>تريم</h1>
                        </div>
                        <div className="text-center border border-gray-500 w-28 overflow-hidden rounded-full h-10 flex justify-center items-center">
                          <h1>تريم</h1>
                        </div>
                        <div className="text-center border border-gray-500 w-28 overflow-hidden rounded-full h-10 flex justify-center items-center">
                          <h1>تريم</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
