import { FaChevronDown } from "react-icons/fa";

export default function HeaderLine({title}) {
  return (
    <div className="header_line mt-20 flex justify-end items-end gap-6 md:gap-4 w-full">
          <FaChevronDown/>
        <h1 className="headerline_title">{title} 
        </h1>
    </div>
  )
}