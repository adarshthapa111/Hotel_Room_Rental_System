"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { auth } from "../../../firebase";
import Swal from "sweetalert2";
import { signOut as firebaseSignOut } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileDropdown = ({ toggleDropdown }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out ⇤",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await firebaseSignOut(auth);
          console.log("Sign out successful.");
          router.push("/");
          toast.success("Successfully Logged Out");
          toggleDropdown(); // Close the dropdown after signing out
        } catch (error) {
          console.error("Error signing out:", error);
          setError(error.message);
        }
      }
    });
  };

  return (
    <div className="absolute right-0 mt-2 w-48 text-sm bg-white shadow-lg rounded-lg">
      <ul className="p-4">
        <Link href="/Profile">
          <li
            onClick={toggleDropdown}
            className={
              pathname === "/Profile"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg cursor-pointer p-2 text-white font-semibold mb-1"
                : "hover:bg-gray-200 p-2 mb-1 rounded-lg cursor-pointer"
            }
          >
            Profile
          </li>
        </Link>
        <Link href="/Favourites">
          <li
            onClick={toggleDropdown}
            className={
              pathname === "/Favourites"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg cursor-pointer p-2 text-white font-semibold mb-1"
                : "hover:bg-gray-200 p-2 mb-1 rounded-lg cursor-pointer"
            }
          >
            Favourites
          </li>
        </Link>
        <Link href="/AddHotel">
          <li
            onClick={toggleDropdown}
            className={
              pathname === "/AddHotel"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg cursor-pointer p-2 text-white font-semibold mb-1"
                : "hover:bg-gray-200 p-2 mb-1 rounded-lg cursor-pointer"
            }
          >
            Add Room
          </li>
        </Link>
        <Link href="/Customization">
          <li
            onClick={toggleDropdown}
            className={
              pathname === "/Customization"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg cursor-pointer p-2 text-white font-semibold mb-1"
                : "hover:bg-gray-200 p-2 mb-1 rounded-lg cursor-pointer"
            }
          >
            Customize
          </li>
        </Link>
        <Link href="/AccountSettings">
          <li
            onClick={toggleDropdown}
            className={
              pathname === "/AccountSettings"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg cursor-pointer p-2 text-white font-semibold mb-1"
                : "hover:bg-gray-200 p-2 mb-1 rounded-lg cursor-pointer"
            }
          >
            Settings
          </li>
        </Link>
        <li
          className="hover:bg-gray-200 p-2 mb-1 rounded-lg cursor-pointer"
          onClick={handleSignOut}
        >
          Log Out
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
