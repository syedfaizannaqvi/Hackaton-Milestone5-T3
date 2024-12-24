"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaHeart,
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full mx-auto">
      {/* Top bar */}
      <div className="bg-gray-100 mx-auto p-2">
        <div className=" justify-between hidden md:flex w-[85vw] mx-auto items-center">
          <div className="flex items-center gap-2 p-1">
            <Image src={"/nikeguy.svg"} alt="logo" width={24} height={24} />
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs">
            <Link href="/about" className="hover:text-red-500">
              Find a Store <span className="text-sm">|</span>
            </Link>
            <Link href="/about" className="hover:text-red-500">
              Help <span className="text-sm">|</span>
            </Link>
            <Link href="/signup" className="hover:text-red-500">
              Join Us <span className="text-sm">|</span>
            </Link>
            <Link href="/signin" className="hover:text-red-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="w-[85vw] mx-auto flex justify-between items-center my-4">
        <div className="flex items-center gap-2">
          <Image src={"/nike.svg"} alt="logo" width={60} height={20} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-base font-medium">
          <Link href="/product" className="hover:text-gray-500">
            New & Featured
          </Link>
          <Link href="/product" className="hover:text-gray-500">
            Men
          </Link>
          <Link href="/product" className="hover:text-gray-500">
            Women
          </Link>
          <Link href="/product" className="hover:text-gray-500">
            Kids
          </Link>
          <Link href="/product" className="hover:text-gray-500">
            Sale
          </Link>
          <Link href="/product" className="hover:text-gray-500">
            SNKRS
          </Link>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-full">
            <FaSearch className="text-sm font-light hover:text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 border-none outline-none w-[180px] lg:w-[200px]"
            />
          </div>
          <div className="flex items-center gap-2">
            <Link href="/cart" className="relative">
              <FaShoppingBag className="text-sm hover:text-gray-500 w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <FaHeart className="text-sm hover:text-gray-500 w-4 h-4" />
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? (
                <FaTimes className="text-sm text-gray-500" />
              ) : (
                <FaBars className="text-sm text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed right-0 top-[4.5rem] bg-white rounded-lg shadow-lg w-48 z-50">
          <div className="flex flex-col items-start gap-4 p-4 text-base">
            <Link href="/" className="hover:text-gray-500 w-full">
              New & Featured
            </Link>
            <Link href="/" className="hover:text-gray-500 w-full">
              Men
            </Link>
            <Link href="/" className="hover:text-gray-500 w-full">
              Women
            </Link>
            <Link href="/" className="hover:text-gray-500 w-full">
              Kids
            </Link>
            <Link href="/" className="hover:text-gray-500 w-full">
              Sale
            </Link>
            <Link href="/" className="hover:text-gray-500 w-full">
              SNKRS
            </Link>
            <div className="flex flex-col items-start gap-4 text-sm mt-2 border-t w-full pt-4">
              <Link href="/" className="hover:text-red-500 w-full">
                Find a Store
              </Link>
              <Link href="/" className="hover:text-red-500 w-full">
                Help
              </Link>
              <Link href="/" className="hover:text-red-500 w-full">
                Join Us
              </Link>
              <Link href="/" className="hover:text-red-500 w-full">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;