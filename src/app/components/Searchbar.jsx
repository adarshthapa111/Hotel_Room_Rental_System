import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

export default function Component() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <>
      <h1 className="text-xl font-semibold font-playfair md:text-3xl lg:text-5xl">
        Explore the world with us
      </h1>
      <div className="bg-white shadow-lg rounded-lg border p-6  max-w-5xl mx-auto my-8">
        <form className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="destination"
              className="text-sm font-medium text-gray-700"
            >
              Destination
            </label>
            <input
              id="destination"
              type="text"
              placeholder="Where are you going?"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500  border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="check-in"
              className="text-sm font-medium text-gray-700"
            >
              Check-in
            </label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Select date"
              className="w-full p-2 border rounded-md  border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="check-out"
              className="text-sm font-medium text-gray-700"
            >
              Check-out
            </label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Select date"
              className="w-full p-2 border rounded-md border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="guests"
              className="text-sm font-medium text-gray-700"
            >
              Guests
            </label>
            <select
              id="guests"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500  border-gray-400"
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
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="5">5+ guests</option>
            </select>
          </div>
          <div className="flex items-end flex-1">
            <button
              type="submit"
              className="flex items-center justify-center w-full p-2.5 font-medium font-playfair tracking-wider bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md hover:bg-blue-600 shadow-md shadow-gray-400 border-2 border-gray-50"
            >
              <Image src="/Image/search_img.png" className="h-5 w-5 mr-4" height={40} width={40}/>
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function CalendarDaysIcon(props) {
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
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
