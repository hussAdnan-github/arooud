import NavBar from "./Navbar";
import NavbarSearch from "./NavbarSearch";

export default function Header() {
  return (
    <div className=" pt-6 pb-4 bg-white sticky  top-0 left-0 w-full dark:bg-primaryDark " style={{zIndex:'9999'}}>
        <NavbarSearch/>
        <NavBar/>
    </div>
  )
}
