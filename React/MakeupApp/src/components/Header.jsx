import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdContacts } from "react-icons/md";


const Header = () => {
  return (
    <>
      <div className="flex justify-between  text-black  bg-[#5C4B75] p-2 sticky top-0 z-20 ">
        <h3 className="text-3xl font-extrabold text-white">Makeup App</h3>
        <div className="p-2 flex gap-6">
          <Link to ={"/"} className=" text-black hover:text-white hover:font-medium flex gap-2 items-center "> <FaHome /> Home</Link>
          <Link to ={"/about"} className="text-black hover:text-white hover:font-medium flex gap-2 items-center"> <FcAbout />About</Link>
          <Link to ={"/product"} className="text-black hover:text-white hover:font-medium flex gap-2 items-center"> <MdProductionQuantityLimits /> Product</Link>
          <Link to ={"/contact"} className="text-black hover:text-white hover:font-medium flex gap-2 items-center"> <MdContacts /> Contact</Link>
          <Link to ={"/login"} className="text-black hover:text-white hover:font-medium flex gap-2 items-center">Login</Link>
          <Link to ={"/signup"} className="text-black hover:text-white hover:font-medium flex gap-2 items-center">SignUp</Link>
          
        </div>
      </div>
    </>
  );
};
export default Header;
