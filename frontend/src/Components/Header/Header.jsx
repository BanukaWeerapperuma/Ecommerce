import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Navbar from "../NavBar/Navbar";

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(true);

  return (
    <div>
      <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
        <div className="px-4 flexBetween py-3 max-xs:px-2">
          {/* logo */}
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="w-[66px] h-[88px]" />
            </Link>
          </div>
          {/* navbar desktop */}
          <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}/>
           {/*navbar mobile  */}
           <Navbar
  containerStyles={`${
    menuOpened
      ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
      : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
  }`}
/>

          {/* buttons */}
          <div>
            
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
