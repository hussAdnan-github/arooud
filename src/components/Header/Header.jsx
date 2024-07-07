import NavBar from "./Navbar";
import NavbarSearch from "./NavbarSearch";

export default function Header() {
  return (
    <div className="pt-6 pb-10 bg-white">
        <NavbarSearch/>
        <NavBar/>
    </div>
  )
}
