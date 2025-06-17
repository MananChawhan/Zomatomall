import React from 'react';
import { IoStorefrontSharp } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits, MdOutlineInventory } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#1f1f1f] text-white px-6 py-4 shadow-lg">
      <div className="flex items-center gap-3 text-3xl font-bold tracking-widest">
        <IoStorefrontSharp className="text-yellow-400" />
        <Link to="/">ZomatoMall</Link>
      </div>

      <ul className="hidden md:flex items-center gap-10 text-lg font-semibold">
        <li className="flex items-center hover:text-pink-400 transition duration-300">
          <MdOutlineProductionQuantityLimits className="mr-2" />
          <Link to="/products">Products</Link>
        </li>
        <li className="flex items-center hover:text-pink-400 transition duration-300">
          <MdOutlineInventory className="mr-2" />
          <Link to="/categories">Add Seller</Link>
        </li>
        <li>
          <Link
            to="/login"
            className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-2xl shadow-md transition"
          >
            Login / Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
