import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Navbar from "../NavBar/Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logout from "../../assets/logout.svg"
import user from "../../assets/user.svg"

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenu = () => {
        setMenuOpened(!menuOpened);
    };

  return (
    <div>
      <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
        <div className="px-4 flexBetween py-1 max-xs:px-2">
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
          <div className="flexBetween gap-x-1 sm:gap-x-2 bold-16">
            {!menuOpened ? (
              <MdMenu className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full " onClick={toggleMenu}/>
            ) : (
            <MdClose className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full " onClick={toggleMenu}/>
              )}
              <div className="flexBetween sm:gap-x-6">
                <NavLink to={"cart-page"} className={"flex"}><FaOpencart className="hover:text-secondary p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"/><span className="relative flexCenter w-5 h-5  bg-secondary text-white rounded-full medium-14 -top-2">0</span></NavLink>

                {/* logout */}
                {/* <NavLink to={"logout"} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}><img src={logout} alt="logout-Icon" height={19} width={19}/>Logout</NavLink> */}

                {/* login */}
                <NavLink to={"login"} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}><img src={user} alt="logout-Icon" height={19} width={19}/>Login</NavLink>

                
              </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
