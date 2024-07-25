import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import logo from '../../../public/img/logo.png'
// import { motion } from 'framer-motion';
import SearchBar from '../SearchBar';
import NavbarDropdown from './NavbarDropdown';

export default function NavbarSearch() {
  return (
    <div className='navbar_top flex justify-between mx-2 md:mx-10 items-center'>
      <div>
        <NavbarDropdown />
      </div>
    <div className='nav_search_categories flex-1'>
   
    <SearchBar />

    </div>
    <div className='nav_logo' >
     <Link href={'/'} className="">
 <Image
src={logo}
alt="Logo"
width={159} height={60}/>
      </Link>
    </div> 
    </div>
  )
}
