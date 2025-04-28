import { DarkMode } from "./Darkmode";
import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import { Popcorn } from 'lucide-react';
import { SlackerFont } from "@/utils/fonts";
import SearchBar from "./Search";


const Navbar = () => {
  return (
    <nav>
      <div className={`flex flex-col justify-between items-center ${SlackerFont.variable}`}>
        <div className="flex w-full text-4xl font-heading font-bold text-[#09090B] py-4 bg-[#F0B000] pl-4">
          <h1>CORNHUB</h1>
          <Popcorn />
        </div>
        
        <div className="container flex flex-col justify-between py-8 sm:flex-row sm:items-center gap-4 mx-auto
      ">
          {/* Logo */}
          <Logo />
          {/* Search */}
          < SearchBar />
          {/* DarkMode & Profile */}
          <div className="flex gap-4">
            <DarkMode />
            <DropdownListMenu />
          </div>
        </div>
      </div>

    </nav>
  );
};
export default Navbar;