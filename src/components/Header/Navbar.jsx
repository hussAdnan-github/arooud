import NavDropDown from "./NavDropDown";
import DarkMode from "../DarkMode";
import LinkNavbar from "./LinkNavbar";

export default function NavBar() {
  return (
    <div className="navbar mt-6">
      <div className="flex justify-between items-center mx-2 md:mx-20">
        <div>
          <DarkMode />
        </div>
        <LinkNavbar />
        <div>
          <NavDropDown />
        </div>
      </div>
    </div>
  );
}
