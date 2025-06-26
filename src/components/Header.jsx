import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Search Box */}
        <div className="hidden md:flex bg-gray-100 rounded items-center px-3 py-2 w-[360px]">
          <IoSearchOutline size={20} className="text-gray-500" />
          <input
            type="text"
            className="outline-none pl-2 w-full text-base bg-transparent"
            placeholder="Search"
          />
        </div>
        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-6 text-base font-medium text-gray-700">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
          <li className="cursor-pointer hover:text-blue-600">Contact Us</li>
          <li className="cursor-pointer hover:text-blue-600">Blog</li>
        </ul>

        {/* Desktop Icons */}
        <nav className="hidden lg:flex gap-4 items-center">
          <FaRegHeart className="cursor-pointer hover:text-red-500" size={22} />
          <BsCart3 className="cursor-pointer hover:text-green-600" size={22} />
          <FiUser className="cursor-pointer hover:text-gray-700" size={22} />
        </nav>

        {/* Burger Icon for < lg */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (shown when < lg) */}
      {menuOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 border-t">
          <div className="flex md:hidden lg:hidden bg-gray-100 rounded items-center px-3 py-2 my-3">
            <IoSearchOutline size={20} className="text-gray-500" />
            <input
              type="text"
              className="outline-none pl-2 w-full text-base bg-transparent"
              placeholder="Search"
            />
          </div>
          <ul className="flex flex-col gap-3 text-base font-medium text-gray-700">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">About</li>
            <li className="cursor-pointer hover:text-blue-600">Contact Us</li>
            <li className="cursor-pointer hover:text-blue-600">Blog</li>
          </ul>
          <nav className="flex gap-4 items-center mt-4">
            <FaRegHeart
              className="cursor-pointer hover:text-red-500"
              size={22}
            />
            <BsCart3
              className="cursor-pointer hover:text-green-600"
              size={22}
            />
            <FiUser className="cursor-pointer hover:text-gray-700" size={22} />
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
