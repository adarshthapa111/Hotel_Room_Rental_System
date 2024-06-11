"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { disableNavAndFoot } from "./DisableNavAndFoot";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname()
  return (
    <>
      {!disableNavAndFoot.includes(path) && (
        <motion.div>
          <footer className=" text-black py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                  <p className="mb-2">123 Main Street, Anytown USA</p>
                  <p className="mb-2">Phone: (123) 456-7890</p>
                  <p className="mb-2">Email: info@hotelname.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link className=" hover:text-white" href="#">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className=" hover:text-white" href="#">
                        Rooms
                      </Link>
                    </li>
                    <li>
                      <Link className=" hover:text-white" href="#">
                        Amenities
                      </Link>
                    </li>
                    <li>
                      <Link className=" hover:text-white" href="#">
                        About Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Policies</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link className="text-gray-800" href="#">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="text-gray-800" href="#">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link className="text-gray-800" href="#">
                        Cancellation Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="max-w-7xl border-gray-500 mt-6" />
              <div className="mt-8 text-center text-gray-800">
                © 2024 Hotel Name. All rights reserved.
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </>
  );
};

export default Footer;
