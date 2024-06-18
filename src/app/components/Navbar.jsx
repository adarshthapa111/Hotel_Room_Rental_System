// components/Navbar.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import ProfileDropdown from "../components/ProfileDropdown";
import { usePathname } from "next/navigation";
import { disableNavAndFoot } from "./DisableNavAndFoot";
import Image from "next/image";

const Navbar = () => {
  const { user } = UserAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const path = usePathname();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      {!disableNavAndFoot.includes(path) && (
        <nav className="bg-white shadow-md sticky top-0 w-full z-50">
          <div className="max-w-7xl mx-auto px-4 pr-6">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/">
                  <li className="flex-shrink-0 text-2xl font-bold font-great-vibes bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                    Book my Room
                  </li>
                </Link>
                <div className="hidden md:block">
                  <div className="ml-16">
                    <ul className=" flex items-baseline space-x-8">
                      <Link href="/">
                        <li
                          className={
                            pathname === "/"
                              ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-lg  px-3 py-2 text-sm font-semibold"
                              : "text-gray-700 hover:bg-gray-200 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                          }
                        >
                          Home
                        </li>
                      </Link>
                      <Link href="/Explore">
                        <li
                          className={
                            pathname === "/Explore"
                              ? "font-semibold bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-lg  px-3 py-2 text-sm"
                              : "text-gray-700 hover:bg-gray-200 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                          }
                        >
                          Explore
                        </li>
                      </Link>
                      <Link href="/Rooms">
                        <li
                          className={
                            pathname === "/Rooms"
                              ? "font-semibold bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-lg text-sm px-3 py-2"
                              : "text-gray-700 hover:bg-gray-200 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                          }
                        >
                          Discover
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {!user ? (
                    <Link href="/login">
                      <li className="bg-gradient-to-r from-blue-500 to-purple-400 text-white px-4 py-2  shadow-md shadow-purple-300 rounded-lg font-medium">
                        Login
                      </li>
                    </Link>
                  ) : (
                    <div className="relative">
                      <div
                        onClick={toggleDropdown}
                        className="cursor-pointer flex items-center space-x-2"
                      >
                        <Image
                          src="/Image/pp.png"
                          alt="Profile"
                          className="h-8 w-8 rounded-full"
                          height={40}
                          width={40}
                        />
                      </div>
                      {showDropdown && (
                        <ProfileDropdown
                          setShowDropdown={setShowDropdown}
                          toggleDropdown={toggleDropdown}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
              {/* dropdown for small screen  */}

              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="bg-gray-900 text-white inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Icon when menu is closed. */}
                  {!showDropdown ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {showDropdown && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/">
                  <li className="text-gray-700 hover:bg-gray-200 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </li>
                </Link>
                <Link href="/AddHotel">
                  <li className="text-gray-700 hover:bg-gray-200 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                    Add Rooms
                  </li>
                </Link>
                <Link href="/Rooms">
                  <li className="text-gray-700 hover:bg-gray-200 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                    Discover
                  </li>
                </Link>
                {!user ? (
                  <Link href="/login">
                    <li className="bg-gradient-to-r from-blue-500 to-purple-400 text-white block px-4 py-2 rounded-l-full shadow-md">
                      Login
                    </li>
                  </Link>
                ) : (
                  <ProfileDropdown />
                )}
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
