"use client";
import React, { useState } from "react";
import { supabase } from "../Supabase/config";
import { motion } from "framer-motion";
import { UserAuth } from "../context/AuthContext";
const Page = () => {
  
  const [hotelName, setHotelName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState("");
  const [image, setImage] = useState(null);
  const [city, setCity] = useState("");
  const [roomType, setRoomType] = useState("");
  const [numberOfBeds, setNumberOfBeds] = useState("");
  const [parkingAvailable, setParkingAvailable] = useState("");
  const [roomService, setRoomService] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");

  const { user:currentUser } = UserAuth();
  // {console.log(currentUser.uid)}
  // const userId = currentUser.uid;
  if(currentUser){
    console.log(currentUser.uid)
  }else{
    console.log("user is not logged in ")
  }


  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = null;
      if (image) {
        const { data: storageData, error: storageError } =
          await supabase.storage
            .from("images")
            .upload(`public/${Date.now()}_${image.name}`, image);

        if (storageError) {
          throw storageError;
        }

        imageUrl = `https://rhsstlvilixunvtghzca.supabase.co/storage/v1/object/public/images/${storageData.path}`;
      }

      const { data, error } = await supabase.from("BookingForm").insert([
        {
          HotelName: hotelName,
          NumberOfRooms: rooms,
          Description: description,
          Price: price,
          ImageUrl: imageUrl,
          City: city,
          RoomType: roomType,
          Beds: numberOfBeds,
          ParkingAvailable: parkingAvailable,
          RoomService: roomService,
          CheckIn: checkInTime,
          CheckOut: checkOutTime,
          UserId: currentUser.uid
        },
      ]);

      if (error) {
        throw error;
      }

      // Reset form fields
      setHotelName("");
      setDescription("");
      setPrice("");
      setRooms("");
      setImage(null);
      setCity("");
      setRoomType("");
      setNumberOfBeds("");
      setParkingAvailable("");
      setRoomService("");
      setCheckInTime("");
      setCheckOutTime("");

      alert("Data uploaded successfully");
    } catch (err) {
      console.log(err, "Error!!");
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };
  const todayDate = getTodayDate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.8 }}
    >
        
      <section className="w-full py-12 md:py-24 lg:py-14 bg-gray-50">

        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-great-vibes bg-gradient-to-r from-purple-600 via-blue-600 to to-pink-600 text-transparent bg-clip-text font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Add your Hotel Room
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400 md:text-xl">
                Fill out the form below to add a new hotel room to our platform.
              </p>
            </div>
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Hotel Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter hotel name"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                    value={hotelName}
                    onChange={(e) => setHotelName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="city" className="text-sm font-medium">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Enter city"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="price" className="text-sm font-medium">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    placeholder="Enter price per night"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="rooms" className="text-sm font-medium">
                    Number of Rooms
                  </label>
                  <input
                    type="number"
                    id="rooms"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    placeholder="Enter number of rooms"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="grid gap-2">
                  <label htmlFor="room-type" className="text-sm font-medium">
                    Room Type
                  </label>
                  <div className="relative">
                    <select
                      id="room-type"
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                    >
                      <option value="" disabled>
                        Select room type
                      </option>
                      <option value="standard">Standard</option>
                      <option value="deluxe">Deluxe</option>
                      <option value="suite">Suite</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="beds" className="text-sm font-medium">
                    Number of Beds
                  </label>
                  <input
                    type="number"
                    id="beds"
                    placeholder="Enter number of beds"
                    value={numberOfBeds}
                    onChange={(e) => setNumberOfBeds(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="parking" className="text-sm font-medium">
                    Parking
                  </label>
                  <div className="relative">
                    <select
                      id="parking"
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                      value={parkingAvailable}
                      onChange={(e) => setParkingAvailable(e.target.value)}
                    >
                      <option value="" disabled>
                        Select parking availability
                      </option>
                      <option value="available">Available</option>
                      <option value="not-available">Not Available</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="room-service" className="text-sm font-medium">
                    Room Service
                  </label>
                  <div className="relative">
                    <select
                      id="room-service"
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                      value={roomService}
                      onChange={(e) => setRoomService(e.target.value)}
                    >
                      <option value="" disabled>
                        Select room service availability
                      </option>
                      <option value="available">Available</option>
                      <option value="not-available">Not Available</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="check-in" className="text-sm font-medium">
                    Check-in
                  </label>
                  <input
                    type="date"
                    id="check-in"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                    value={checkInTime}
                    min={todayDate}
                    onChange={(e) => setCheckInTime(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="check-out" className="text-sm font-medium">
                    Check-out
                  </label>
                  <input
                    type="date"
                    id="check-out"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                    value={checkOutTime}
                    min={checkInTime || todayDate}
                    onChange={(e) => setCheckOutTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Enter a description of the hotel"
                  className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="image" className="text-sm font-medium">
                  Hotel Image
                </label>
                <div className="flex items-center justify-center rounded-md border-2 border-dashed border-gray-300 px-6 py-12 transition-colors hover:border-primary hover:bg-gray-100 dark:border-gray-700 dark:hover:border-primary dark:hover:bg-gray-800">
                  <div className="text-center">
                    <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-50">
                      Drop files to upload
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      or click to select a file
                    </p>
                    <input
                      type="file"
                      id="image"
                      className="p-2"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary text-white bg-gray-900 font-medium py-3 px-6 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-primary-dark dark:hover:bg-primary-light"
                >
                  Upload this rooom
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}
export default Page;
