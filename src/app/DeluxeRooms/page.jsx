"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../Supabase/config";
import { motion } from "framer-motion";

const page = () => {
  const [fetchError, setFetchError] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [ratingsData, setRatingsData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const DeluxeRoomType = "deluxe";

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data: bookingsData, error: bookingsError } = await supabase
          .from("BookingForm")
          .select("*")
          .eq("RoomType", DeluxeRoomType);

        if (bookingsError) {
          setFetchError("Couldn't fetch the data!");
          setBookings([]);
          return;
        }

        setBookings(bookingsData);
        setFetchError(null);
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setFetchError("Unexpected error occurred");
      }
    };

    const fetchRatings = async () => {
      try {
        const { data: ratingsData, error: ratingsError } = await supabase
          .from("RatingAndReview")
          .select("*");

        if (ratingsError) {
          console.error("Couldn't fetch the ratings data!");
          return;
        }

        const ratingsMap = ratingsData.reduce((acc, rating) => {
          const hotelId = rating.HotelId;
          if (!acc[hotelId]) {
            acc[hotelId] = [];
          }
          acc[hotelId].push(rating.Rating);
          return acc;
        }, {});

        setRatingsData(ratingsMap);
      } catch (err) {
        console.error("Error fetching ratings data:", err.message);
      }
    };

    fetchBookings();
    fetchRatings();
  }, []);

  const calculateAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 0;
    const totalRating = ratings.reduce((acc, rating) => acc + rating, 0);
    return totalRating / ratings.length;
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage * itemsPerPage < bookings.length ? prevPage + 1 : prevPage
    );
    window.scrollTo(0, 0);
  };

  const startPage = (currentPage - 1) * itemsPerPage;
  const currentItems = bookings.slice(startPage, startPage + itemsPerPage);

  return (
    <>
      <motion.div
        className="py-12 p-8 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.8 }}
      >
        {bookings.length > 0 ? (
          <div className="container mx-auto px-4 md:px-6 ">
            <div className="mb-8 text-center">
              <h2 className="font-great-vibes tracking-wide text-3xl font-bold sm:text-4xl md:text-5xl ">
                 Our Deluxe Room Types
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl">
                Find the perfect room for your stay.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {currentItems.map((booking) => {
                const ratings = ratingsData[booking.id] || [];
                const averageRating = calculateAverageRating(ratings);

                return (
                  <div
                    className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl p-4 bg-white"
                    key={booking.id}
                  >
                    <Link
                      href={{
                        pathname: "Rooms/RoomDesc",
                        query: {
                          imageUrl: booking.ImageUrl,
                          hotelName: booking.HotelName,
                          description: booking.Description,
                          price: booking.Price,
                          location: booking.City,
                          NoOfRooms: booking.NumberOfRooms,
                          parking: booking.ParkingAvailable,
                          checkInDate: booking.CheckIn,
                          checkOutDate: booking.CheckOut,
                          roomType: booking.RoomType,
                          roomService: booking.RoomService,
                          NoOfBeds: booking.Beds,
                          Id: booking.id,
                        },
                      }}
                    >
                      <img
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
                        <h3 className="text-xl font-bold">{booking.HotelName}</h3>
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
                            Rs.{booking.Price}/night
                          </span>
                          <button
                            className="rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/80 focus:outline-none"
                            href="#"
                          >
                            Book Now
                          </button>
                        </div>
                        <div className="border-b border-gray-400 dark:border-gray-700 my-4" />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }, (_, index) => (
                              <StarIcon
                                key={index}
                                className={`w-5 h-5 ${
                                  index < Math.round(averageRating)
                                    ? "fill-yellow-500"
                                    : "fill-gray-300 dark:fill-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-gray-500 dark:text-gray-400">
                            {averageRating.toFixed(1)} ({ratings.length} reviews)
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between mt-8">
              <button
                className="px-4 py-2 mx-2 text-white bg-blue-600 rounded shadow-lg shadow-white disabled:bg-gray-300"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 mx-2 text-white bg-blue-600 rounded disabled:bg-gray-300"
                onClick={handleNextPage}
                disabled={currentPage * itemsPerPage >= bookings.length}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="container mx-auto px-4 md:px-6 text-center">
            <p className="mt-4 text-gray-500 md:text-xl">
              {fetchError ? fetchError : "No bookings available."}
            </p>
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

export default page;
