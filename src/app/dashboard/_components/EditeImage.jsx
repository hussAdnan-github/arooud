"use client";
import Image from "next/image";
import { FaAngleDoubleLeft } from "react-icons/fa";
import login from "../../../../public/img/login.png";
import { MdOutlineCameraAlt } from "react-icons/md";
import { useState } from "react";
export default function EditeImage(image) {
  const [previewImage, setPreviewImage] = useState("");
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className="EditeImage flex justify-center">
      <div className="relative w-full h-[100px] rounded-lg">
        <input id="file" type="file" onChange={handleFileChange} />
        <label htmlFor="file" className=" ">
          <div className="bg-black rounded-lg opacity-40 w-full h-full absolute z-10 cursor-pointer "></div>
          <Image
            src={previewImage ? previewImage : image}
            alt="Preview"
            width={464}
            height={233}
            priority
            className="rounded-lg w-full h-full border   object-contain"
          />
          <MdOutlineCameraAlt className="absolute top-[40%] left-[45%] cursor-pointer text-6xl text-white z-20" />
        </label>
      </div>
    </div>
  );
}
