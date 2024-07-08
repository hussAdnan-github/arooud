import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import logo from '../../../public/img/logo.png'

import SearchBar from '../SearchBar';
import Dropdown from '../Dropdown';

export default function NavbarSearch() {
  return (
    <div className='navbar_top flex justify-between mx-2 md:mx-10 items-center'>
      <div>
        <Dropdown />
      </div>
    <div className='nav_search_categories'>
   
    <SearchBar />

    </div>
    <div className='nav_logo'>
     <Link href={'/'} className="">
 <Image
src={logo}
alt="Logo"
className='w-36'
/>
      </Link>
    </div> 
    </div>
  )
}
