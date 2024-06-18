"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { supabase } from "../../Supabase/config";
import { UserAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import RatingAndReview from "../../components/RatingAndReview";

const Page = () => {
  const params = useSearchParams();

  const [imageUrl, setImageUrl] = useState("");
  const [NumberOfRooms, setNoOfRooms] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [parking, setParking] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomType, setRoomType] = useState();
  const [roomService, setRoomService] = useState();
  const [noOfBeds, setNoOfBeds] = useState();
  const [hotelId, setHotelId] = useState();

  const { user: currentUser } = UserAuth();

  useEffect(() => {
    if (params) {
      const imageUrl = params.get("imageUrl");
      const NumberOfRooms = params.get("NoOfRooms");
      const hotelName = params.get("hotelName");
      const description = params.get("description");
      const location = params.get("location");
      const price = params.get("price");
      const parking = params.get("parking");
      const checkInDate = params.get("checkInDate");
      const checkOutDate = params.get("checkOutDate");
      const roomType = params.get("roomType");
      const roomService = params.get("roomService");
      const noOfBeds = params.get("NoOfBeds");
      const hotelId = params.get("Id");

      setImageUrl(imageUrl);
      setNoOfRooms(NumberOfRooms);
      setHotelName(hotelName);
      setDescription(description);
      setPrice(price);
      setLocation(location);
      setParking(parking);
      setCheckInDate(checkInDate);
      setCheckOutDate(checkOutDate);
      setRoomType(roomType);
      setRoomService(roomService);
      setNoOfBeds(noOfBeds);
      setHotelId(hotelId);
    }
  }, [params]);

  // Handeling Favourite

  const handleFavourite = async () => {
    // Show confirmation dialog

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to add this to your favourites?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, add it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      try {
        const { data: existingData, error: fetchError } = await supabase
          .from("Favourites")
          .select("*")
          .eq("UserId", currentUser.uid)
          .eq("id", hotelId);

        if (existingData.length > 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You have already added this hotel to your favourites!",
          });
        } else {
          // Proceed with the insertion if the user confirms
          const { data, error } = await supabase.from("Favourites").insert([
            {
              id: hotelId,
              UserId: currentUser.uid,
              ImageUrl: imageUrl,
              HotelName: hotelName,
              Location: location,
              price: price,
            },
          ]);

          if (error) {
            throw error;
          }

          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Favourite added successfully!",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error inserting data: " + error.message,
        });
        console.error("Error inserting data:", error);
      }
    } else {
      Swal.fire({
        icon: "info",
        title: "Cancelled",
        text: "Your action was cancelled!",
      });
    }
  };

  return (
    <>
      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <Image
            alt="Hotel Image"
            className="w-full h-full object-cover rounded-lg"
            height={400}
            src={imageUrl}
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
        </div>
        <div className="grid gap-6">
          <div>
            {" "}
            {/* Ensure each element in the map has a unique key */}
            <h1 className="text-3xl font-bold">{hotelName}</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-justify">
              {description}
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div>
                <div className="text-gray-500 dark:text-gray-600 text-md font-medium">
                  Price
                </div>
                <div className="text-2xl font-bold">{price} / night</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-md font-medium">
                  Rooms
                </div>
                <div className="text-2xl font-bold">{NumberOfRooms} rooms</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-md font-medium">
                  Location
                </div>
                <div className="text-2xl font-bold">{location}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-md font-medium">
                  Room Type
                </div>
                <div className="text-2xl font-bold">{roomType}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-md font-medium">
                  Room Service
                </div>
                <div className="text-2xl font-bold">{roomService}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-md font-medium">
                  Number of Beds
                </div>
                <div className="text-2xl font-bold">{noOfBeds}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-md font-medium">
                  Parking
                </div>
                <div className="text-2xl capitalize font-bold">{parking}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-md font-medium">
                  Check In Date
                </div>
                <div className="text-2xl capitalize font-bold">
                  {checkInDate}
                </div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400 text-md font-medium">
                  Check Out Date
                </div>
                <div className="text-2xl capitalize font-bold">
                  {checkOutDate}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                className="w-full text-center bg-gradient-to-r from-blue-500 p-4 rounded-full font-semibold text-white shadow-lg shadow-gray-200 to-purple-500"
                onClick={handleFavourite}
              >
                Add to favourites{" "}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <RatingAndReview hotelId={hotelId} />
    </>
  );
};

function StarIcon({ className, ...props }) {
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
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default Page;
