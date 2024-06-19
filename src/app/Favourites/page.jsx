"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../Supabase/config";
import { motion } from "framer-motion";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";

const Favourites = () => {
  const [fetchError, setFetchError] = useState();
  const [bookings, setBookings] = useState();
  const { user: currentUser } = UserAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("Favourites")
          .select("*")
          .eq("UserId", currentUser.uid);
        if (error) {
          setBookings(null);
          setFetchError("Couldn't fetch the data!");
        }
        if (data) {
          setBookings(data);
          console.log("Data fetched successfully");
          setFetchError(null);
        }
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setFetchError("Unexpected error occurred");
      }
    };

    fetchData(); // Call fetchData function inside useEffect
  }, []);

  return (
    <>
      <motion.div
        className="py-12 p-8  bg-gray-100 min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.8 }}
      >
        {bookings && (
          <div className="container mx-auto px-4 md:px-6 ">
            <div className="mb-8 text-center">
              <h1 className="md:text-4xl xl:text-7xl text-center font-bold p-4 bg-gradient-to-r from-blue-500  to-purple-600 text-transparent bg-clip-text font-great-vibes">
                ♠︎ Favourites ♠︎{" "}
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {bookings.map((booking) => (
                <div
                  className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl p-4 bg-white"
                  key={booking.id}
                >
                  {console.log(booking.id)}
                  <Image
                    alt="Standard Room"
                    className="h-64 w-full object-cover rounded-t-lg"
                    height={400}
                    src={booking.ImageUrl}
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                  <div className="bg-white dark:bg-gray-950 pt-2">
                    {console.log(booking.ImageUrl)}
                    <h3 className="text-xl font-bold">{booking.HotelName}</h3>
                    {console.log(booking.HotelName)}
                    <p
                      className="text-gray-500"
                      style={{
                        maxHeight: "2.8em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {booking.Description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-semibold">
                        Rs.{booking.price}/night
                      </span>
                      <span className="text-lg font-semibold">
                        {booking.Location}
                      </span>
                    </div>
                    <div className="border-b border-gray-400 dark:border-gray-700 my-4" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-5 h-5 fill-yellow-500" />
                        <StarIcon className="w-5 h-5 fill-yellow-500" />
                        <StarIcon className="w-5 h-5 fill-yellow-500" />
                        <StarIcon className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                        <StarIcon className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                      </div>
                      <button
                        className="rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/80 focus:outline-none"
                        href="#"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default Favourites
