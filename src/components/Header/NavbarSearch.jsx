import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import logo from '../../../public/img/logo.png'

import SearchBar from '../SearchBar';
import Dropdown from '../Dropdown';

export default function NavbarSearch() {
  return (
    <div className='navbar_top flex justify-between mx-10'>
      <div>
        <Dropdown />
      </div>
    <div className='nav_search_categories w-2/3'>
   
    <SearchBar />

    </div>
    <div className='nav_logo'>
     <Link href={'/'} class="">
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
