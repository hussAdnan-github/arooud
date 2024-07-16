import { FaChevronDown } from "react-icons/fa";

export default function HeaderLine({title}) {
  return (
    <div className="header_line my-20 flex justify-end items-end gap-4 w-full">
          <FaChevronDown/>
        <h1 className="headerline_title">{title} 
        </h1>
    </div>
  )
}