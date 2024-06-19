"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Explore = () => {
  return (
    <>
      <motion.div
        className="min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.8 }}
      >
        <section className="pt-12 md:pt-16 ">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 text-center">
              <h2 className="font-great-vibes tracking-wide text-3xl font-bold sm:text-4xl md:text-5xl">
                Explore Our Room Types
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl">
                Find the perfect room for your stay.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                <Link className="block" href="StanderdRooms">
                  <Image
                    alt="Standard Room"
                    className="h-64 w-full object-cover"
                    height={400}
                    src="/Image/standerd_room.jpg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="bg-white p-4 dark:bg-gray-950">
                    <h3 className="text-xl font-bold">Standard Room</h3>
                    <p className="text-gray-500">
                      Comfortable and cozy room with a queen-size bed.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-semibold">
                        Rs.1000-10000/night
                      </span>
                      <button
                        className="rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/80 focus:outline-none"
                        href="#"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                <Link className="block" href="/DeluxeRooms">
                  <Image
                    alt="Deluxe Room"
                    className="h-64 w-full object-cover"
                    height={400}
                    src="/Image/deluxe_room.jpg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="bg-white p-4 dark:bg-gray-950">
                    <h3 className="text-xl font-bold">Deluxe Room</h3>
                    <p className="text-gray-500">
                      Spacious room with a king-size bed and city view.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-semibold">
                        Rs.11000-20000/night
                      </span>
                      <button
                        className="bg-gray-800 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/80 focus:outline-none"
                        href="#"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                <Link className="block" href="SuiteRooms">
                  <Image
                    alt="Suite"
                    className="h-64 w-full object-cover"
                    height={400}
                    src="/Image/suite_room.jpg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="bg-white p-4 dark:bg-gray-950">
                    <h3 className="text-xl font-bold">Suite</h3>
                    <p className="text-gray-500">
                      Luxurious suite with a separate living area and balcony.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-semibold">
                        {"<"} 20000/night
                      </span>
                      <button
                        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/80 focus:outline-none bg-gray-800"
                        href="#"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                <Link className="block" href="#">
                  <Image
                    alt="Standard Room"
                    className="h-64 w-full object-cover"
                    height={400}
                    src="/Image/standerd_room.jpg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="bg-white p-4 dark:bg-gray-950">
                    <h3 className="text-xl font-bold">Standard Room</h3>
                    <p className="text-gray-500">
                      Comfortable and cozy room with a queen-size bed.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-semibold">$99/night</span>
                      <button
                        className="rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/80 focus:outline-none"
                        href="#"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                <Link className="block" href="#">
                  <Image
                    alt="Deluxe Room"
                    className="h-64 w-full object-cover"
                    height={400}
                    src="/Image/deluxe_room.jpg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="bg-white p-4 dark:bg-gray-950">
                    <h3 className="text-xl font-bold">Deluxe Room</h3>
                    <p className="text-gray-500">
                      Spacious room with a king-size bed and city view.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-semibold">$149/night</span>
                      <button
                        className="bg-gray-800 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/80 focus:outline-none"
                        href="#"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                <Link className="block" href="#">
                  <Image
                    alt="Suite"
                    className="h-64 w-full object-cover"
                    height={400}
                    src="/Image/suite_room.jpg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="bg-white p-4 dark:bg-gray-950">
                    <h3 className="text-xl font-bold">Suite</h3>
                    <p className="text-gray-500">
                      Luxurious suite with a separate living area and balcony.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-semibold">$249/night</span>
                      <button
                        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/80 focus:outline-none bg-gray-800"
                        href="#"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Explore;
