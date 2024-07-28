"use client";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export default function Password() {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="mb-4 flex items-center">
      <div>
        {showPassword ? (
          <FaRegEyeSlash
            className="text-3xl cursor-pointer"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <FaRegEye
            className="text-3xl cursor-pointer"
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>

      <input
        type={showPassword ? "password" : "text"}
        id="first_name"
        className="bg-gray-50 border md:h-14 md:text-xl md:font-semibold border-[##DADADA] text-gray-500  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-[#DADADA] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end"
        placeholder="password"
        required
      />
    </div>
  );
}
