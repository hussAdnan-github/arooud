import Link from "next/link";
import React from "react";
import Image from "next/image";
// import { motion } from 'framer-motion';
import SearchBar from "../SearchBar";
import NavbarDropdown from "./NavbarDropdown";
import Logo from "./Logo";

export default function NavbarSearch() {
  return (
    <div className="navbar_top flex justify-between mx-2 md:mx-10 items-center">
      <div>
        <NavbarDropdown />
      </div>
      <div className="nav_search_categories flex-1">
        <SearchBar />
      </div>
      <Logo/>
    </div>
  );
}
