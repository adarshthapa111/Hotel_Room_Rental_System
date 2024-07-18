"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { supabase } from "../../Supabase/config";
import { UserAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import RatingAndReview from "../../components/RatingAndReview";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import Link from "next/link";

const RoomDesc = () => {
  const params = useSearchParams();
  const [imageUrl, setImageUrl] = useState("");
  const [NumberOfRooms, setNoOfRooms] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [parking, setParking] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomService, setRoomService] = useState("");
  const [noOfBeds, setNoOfBeds] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);

  const { user: currentUser } = UserAuth();

  useEffect(() => {
    if (params) {
      const imageUrl = params.get("imageUrl") || "defaultImageUrl";
      const NumberOfRooms = params.get("NoOfRooms") || "defaultNumberOfRooms";
      const hotelName = params.get("hotelName") || "Default Hotel Name";
      const description =
        params.get("description") ||
        "Hotel is an iconic heritage hotel located in Kathmandu, Nepal. Renowned for its unique blend of traditional Nepali architecture and modern luxury, Dwarika's Hotel offers an unparalleled cultural experience that reflects the rich history and craftsmanship of the region.";
      const location = params.get("location") || "Kathmandu";
      const price = params.get("price") || "8000";
      const parking = params.get("parking") || "Available";
      const checkInDate = params.get("checkInDate") || "2024-07-04";
      const checkOutDate = params.get("checkOutDate") || "2024-08-04";
      const roomType = params.get("roomType") || "Deluxe";
      const roomService = params.get("roomService") || "Available";
      const noOfBeds = params.get("NoOfBeds") || "4";
      const hotelId = params.get("Id") || "Default Hotel Id";

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

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkInDate || !checkOutDate) {
      alert("Please select check-in and check-out dates.");
      return;
    }
    alert(
      `Check-in: ${checkInDate.toLocaleDateString()} | Check-out: ${checkOutDate.toLocaleDateString()} | Guests: ${guests}`
    );
    // Here you can add further logic to submit the booking details
  };

  const handleFavourite = async () => {
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
      <section className="relative bg-muted p-4 sm:p-6 max-w-7xl lg:p-4 mx-auto">
        <div className="grid gap-2 sm:grid-cols-4">
          <Link
            href="#"
            className="relative col-span-2 row-span-2 overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl sm:rounded-l-xl"
            prefetch={false}
          >
            <Image
              src={imageUrl}
              alt="Living room"
              className="object-cover w-full h-full aspect-square"
              height={400}
              width={600}
            />
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-tl-xl"
            prefetch={false}
          >
            <Image
              src="/Image/background.webp"
              alt="Living room"
              className="object-cover w-full h-full aspect-square"
              height={400}
              width={400}
            />
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-tr-xl"
            prefetch={false}
          >
            <Image
              src="/Image/bg1.jpg"
              alt="Fireplace"
              className="object-cover w-full h-full aspect-square"
              height={400}
              width={400}
            />
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-bl-xl"
            prefetch={false}
          >
            <Image
              src="/Image/99.jpg"
              alt="Bathroom"
              className="object-cover w-full h-full aspect-square"
              height={400}
              width={400}
            />
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-br-xl"
            prefetch={false}
          >
            <Image
              src="/Image/bg-7.jpeg"
              alt="Bedroom"
              className="object-cover w-full h-full aspect-square"
              height={400}
              width={400}
            />
          </Link>
        </div>
        <Link href="/ImageGallery">
          <button className="absolute gap-1 bottom-6 right-6 flex items-center bg-gray-100 p-2 rounded-md shadow-sm">
            <GripIcon className="w-4 h-4" />
            Show all photos
          </button>
        </Link>
      </section>
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          <div>
            <h1 className="text-3xl font-bold">{hotelName}</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-justify">
              {description}
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
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
            </div>
            <div className="mt-4 space-y-2 md:flex space-x-2">
              <button
                className="w-full text-center bg-gradient-to-r from-blue-500 p-4 rounded-md font-semibold text-white shadow-lg shadow-gray-200 to-purple-500"
                onClick={handleFavourite}
              >
                Add to favourites{" "}
              </button>
            </div>
          </div>
        </div>

        {/* Form  */}
        <div className="grid gap-6 p-4 sm:p-6 lg:p-8">
          <div className="border border-gray-300 rounded-lg p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">
                Rs.{price}{" "}
                <span className="text-sm font-normal text-gray-500">
                  / night
                </span>
              </h2>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="check-in" className="text-sm font-medium">
                      Check-in
                    </label>
                    <DatePicker
                      selected={checkInDate}
                      onChange={handleCheckInDateChange}
                      selectsStart
                      startDate={checkInDate}
                      endDate={checkOutDate}
                      className="w-full border border-gray-300 rounded-lg p-3"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="check-out" className="text-sm font-medium">
                      Check-out
                    </label>
                    <DatePicker
                      selected={checkOutDate}
                      onChange={handleCheckOutDateChange}
                      selectsEnd
                      startDate={checkInDate}
                      endDate={checkOutDate}
                      minDate={checkInDate}
                      className="w-full border border-gray-300 rounded-lg p-3"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="guests" className="text-sm font-medium">
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-3"
                      style={{
                        paddingRight: "2.5rem", // Adjust padding to accommodate the custom arrow
                        boxSizing: "border-box",
                        background: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"%3E%3Cpath d="M7 10l5 5 5-5z"%3E%3C/path%3E%3C/svg%3E') no-repeat right 0.75rem center`,
                        backgroundSize: "1rem",
                        WebkitAppearance: "none",
                        appearance: "none",
                        boxSizing: "border-box",
                      }}
                    >
                      <option value="1">1 adult</option>
                      <option value="2">2 adults</option>
                      <option value="3">2 adults + 1 child</option>
                      <option value="4">Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full h-12 bg-gray-800 text-white font-bold rounded-lg"
                  >
                    Reserve
                  </button>
                  <div className="text-sm text-center text-gray-500">
                    You won&apos;t be charged yet
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl font-playfair">
            Amenities
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            <div className="flex items-center gap-3">
              <Image
                src="/Image/wifi.png"
                height={40}
                width={40}
                className="h-6 w-6 text-primary"
              />
              <span>Wifi</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Image/cooking.png"
                height={40}
                width={40}
                className="h-6 w-6 text-primary"
              />
              <span>Kitchen</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Image/fireplace.png"
                height={40}
                width={40}
                className="h-6 w-6 text-primary"
              />
              <span>Fireplace</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Image/parking.png"
                height={40}
                width={40}
                className="h-6 w-6 text-primary"
              />
              <span>Parking</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Image/bath.png"
                height={40}
                width={40}
                className="h-6 w-6 text-primary"
              />
              <span>Hot Tub</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Image/mountain.png"
                height={40}
                width={40}
                className="h-6 w-6 text-primary"
              />
              <span>Mountain View</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Image/balcony.png"
                height={40}
                width={40}
                className="h-6 w-6 text-primary"
              />
              <span>Balcony</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Image/washer.png"
                height={40}
                width={40}
                className="h-6 w-6 text-primary"
              />
              <span>Washer/Dryer</span>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto grid md:grid-cols-2">
        <div className="grid md:row-start-auto gap-8">
          <div className="flex flex-col gap-1 md:hidden">
            <h2 className="text-2xl font-semibold">
              Home in Santa Cruz, California, United States
            </h2>
            <p className="text-gray-500">
              2 guests · 1 bedroom · 1 bed · 1 bath · Wifi · Kitchen
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 sm:p-6 relative flex items-center gap-6">
            <AwardIcon className="w-10 h-10" />
            <div className="flex-1 font-semibold max-w-[16rem] hidden sm:flex lg:hidden">
              One of the most loved homes on Airbnb, according to guests.
            </div>
            <div className="flex items-center gap-6 ml-auto">
              <div className="flex flex-col gap-1 text-center">
                <div className="text-2xl font-semibold tracking-tighter">
                  4.93
                </div>
                <div className="flex items-center gap-1">
                  <StarIcon className="w-2.5 h-2.5 fill-current text-primary" />
                  <StarIcon className="w-2.5 h-2.5 fill-current text-primary" />
                  <StarIcon className="w-2.5 h-2.5 fill-current text-primary" />
                  <StarIcon className="w-2.5 h-2.5 fill-current text-primary" />
                  <StarIcon className="w-2.5 h-2.5" />
                </div>
              </div>
              <hr className="h-9" />
              <div className="flex flex-col gap-0.5 text-center">
                <div className="text-2xl font-semibold tracking-tighter">
                  745
                </div>
                <div className="text-xs font-semibold underline">Reviews</div>
              </div>
            </div>
            <Link href="#" className="absolute inset-0" prefetch={false}>
              <span className="sr-only">View reviews</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-12 h-12">
              <div className="w-10 h-10 border rounded-full overflow-hidden">
                <img
                  src="/placeholder-user.jpg"
                  alt="Host Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Hosted by Catherine</div>
              <div className="text-xs text-gray-500">
                Joined in 2010 · Superhost
              </div>
            </div>
          </div>
          <hr className="border-t border-gray-300 my-6" />
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-12 h-12">
              <CalendarCheckIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">
                Free cancellation for 48 hours
              </div>
              <div className="text-xs text-gray-500">
                Get a full refund if you change your mind.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-12 h-12">
              <MedalIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Catherine is a Superhost</div>
              <div className="text-xs text-gray-500">
                Superhosts are experienced, highly rated hosts.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-12 h-12">
              <MapPinIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Great location</div>
              <div className="text-xs text-gray-500">
                100% of recent guests gave the location a 5-star rating.
              </div>
            </div>
          </div>
          <hr className="border-t border-gray-300 my-6" />
          <div className="prose">
            <p>
              Welcome to our serene mountain retreat! Nestled amidst the
              tranquil beauty of the mountains, this cozy home is your perfect
              getaway for relaxation and adventure.
            </p>
            <p>
              Wake up to breathtaking vistas from every window. Enjoy your
              morning coffee on the balcony, taking in the serene landscape.
              This mountain haven is perfect for families, friends, and couples
              seeking a blend of adventure and relaxation. Book your stay and
              experience the magic of the mountains!
            </p>
            <div className="relative">
              <button
                type="button"
                className="font-semibold flex items-center gap-1 absolute bottom-0 left-0 transform transition-transform"
                style={{ marginBottom: "-1.5rem" }}
              >
                Show more
                <ChevronRightIcon className="w-4 h-4 transition-transform" />
              </button>
            </div>
          </div>
          <hr className="border-t border-gray-300 my-8" />
        </div>
      </section>
      <RatingAndReview hotelId={hotelId} />
    </>
  );
};

function CalendarCheckIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}
function MedalIcon(props) {
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
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function AwardIcon(props) {
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
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

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

const RoomDescWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RoomDesc />
    </Suspense>
  );
};

function GripIcon(props) {
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
      <circle cx="12" cy="5" r="1" />
      <circle cx="19" cy="5" r="1" />
      <circle cx="5" cy="5" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="19" r="1" />
      <circle cx="19" cy="19" r="1" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  );
}

function Calendar({ onSelectDate }) {
  return (
    <div>
      <p className="text-center text-sm text-gray-500">Calendar Component</p>
      <button
        onClick={() => onSelectDate("5/2/2024")}
        className="block w-full mt-2 bg-blue-100 text-blue-700 p-2 rounded"
      >
        Select Date
      </button>
    </div>
  );
}
export default RoomDescWrapper;
