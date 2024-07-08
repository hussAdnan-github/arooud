import NavBar from "./Navbar";
import NavbarSearch from "./NavbarSearch";

export default function Header() {
  return (
    <div className="pt-6 pb-10 bg-white sticky  top-0 left-0 w-full" style={{zIndex:'99999999'}}>
        <NavbarSearch/>
        <NavBar/>
    </div>
  )
}
