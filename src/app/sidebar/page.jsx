import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/img/logo.png'
import { FaUserEdit } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaFolderPlus } from "react-icons/fa";
import { BsShieldFill } from "react-icons/bs";
import { GoPasskeyFill } from "react-icons/go";

export default function SideBar() {
    return (
      <div className="sidebar">
       <div class="flex flex-col items-center w-52 overflow-hidden text-gray-700 bg-white rounded fixed top-3 right-4" style={{height:'96%'}}>
          <Link class="flex items-center w-full px-3 mt-3" href="#">
            <Image src={logo} alt="logo"/>
          </Link>
          <div class="w-full px-2">
              <div class="flex flex-col items-center w-full mt-3 border-t border-gray-300 ">
                  <a class="active flex flex-row-reverse justify-start items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" href="#">
                  <FaUserEdit className="ms-6" />

                      <span class="ml-2 text-sm font-medium">Dasboard</span>
                  </a>
                  <a class="flex flex-row-reverse items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" href="#">
                  <RiDiscountPercentFill />

                      <span class="ml-2 text-sm font-medium">Search</span>
                  </a>
                  <a class="flex flex-row-reverse items-center w-full h-12 px-3 mt-2 bg-gray-300 rounded" href="#">
                  <FaFolderPlus />

                      <span class="ml-2 text-sm font-medium">Insights</span>
                  </a>
                  <a class="flex flex-row-reverse items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" href="#">
                  <BsShieldFill />

                      <span class="ml-2 text-sm font-medium">Docs</span>
                      
                  </a>
                  <a class="flex flex-row-reverse items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" href="#">
                  <GoPasskeyFill />

                      <span class="ml-2 text-sm font-medium">Docs</span>
                      
                  </a>
              </div>
           
          </div>
          <a class="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300" href="#">
              <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="ml-2 text-sm font-medium">Account</span>
          </a>
      </div>
       </div>
    )
  }
  