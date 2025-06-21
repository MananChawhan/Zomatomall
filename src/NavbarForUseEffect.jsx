import React from 'react';
import { IoStorefrontSharp } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits, MdOutlineInventory } from "react-icons/md";
import { Link } from 'react-router-dom';
import { BsClockHistory } from "react-icons/bs";
import { RiUserLocationLine } from "react-icons/ri";
import { CiSaveDown2 } from "react-icons/ci";
import { RxBlendingMode } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#1f1f1f] text-white px-6 py-4 shadow-lg">
      <div className="flex items-center gap-3 text-3xl font-bold tracking-widest">
        <IoStorefrontSharp className="text-yellow-400" />
        <Link to="/">UseEffect</Link>
      </div>

      <ul className="hidden md:flex items-center gap-10 text-lg font-semibold">
        <li className="flex items-center hover:text-pink-400 transition duration-300">
          <Link to="/clock"><BsClockHistory className='icon-[mdi-light--home] text-2xl'/></Link>
        </li>
        <li className="flex items-center hover:text-pink-400 transition duration-300">
          
          <Link to="/online"><RiUserLocationLine className='icon-[mdi-light--home] text-2xl'/></Link>
        
        </li>
        <li className="flex items-center hover:text-pink-400 transition duration-300">
          <div className='icon-[mdi-light--home] text-3xl'>
          <Link to="/autosaver"><CiSaveDown2 /></Link>
          </div>
        </li>
        <li className="flex items-center hover:text-pink-400 transition duration-300">
          
          <Link to="/autodark"><RxBlendingMode className='icon-[mdi-light--home] text-2xl'/></Link>
        
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
