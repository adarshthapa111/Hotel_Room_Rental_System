"use client";

import Link from "next/link";

export default function ImageGallery() {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="relative group">
          <Link href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              alt="Gallery Image"
              width={300}
              height={300}
              className="w-full h-[300px] object-cover rounded-lg transition-all duration-300 group-hover:opacity-80"
            />
          </Link>
          <Link
            href="/Rooms"
            className="absolute top-4 left-4 inline-flex items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
          >
            <button className="mr-2 bg-gray-800 text-white p-2 flex items-center space-x-2 rounded-md font-playfair shadow-md shadow-gray-400 border-2 border-gray-50 justify-center">
              <ChevronLeftIcon className="w-4 h-4 mr-2" />
              Back
            </button>
          </Link>
        </div>
        <Link href="#" className="relative group" prefetch={false}>
          <img
            src="/placeholder.svg"
            alt="Gallery Image"
            width={300}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg transition-all duration-300 group-hover:opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ZoomInIcon className="w-8 h-8 text-white" />
          </div>
        </Link>
        <Link href="#" className="relative group" prefetch={false}>
          <img
            src="/placeholder.svg"
            alt="Gallery Image"
            width={300}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg transition-all duration-300 group-hover:opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ZoomInIcon className="w-8 h-8 text-white" />
          </div>
        </Link>
        <Link href="#" className="relative group" prefetch={false}>
          <img
            src="/placeholder.svg"
            alt="Gallery Image"
            width={300}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg transition-all duration-300 group-hover:opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ZoomInIcon className="w-8 h-8 text-white" />
          </div>
        </Link>
        <Link href="#" className="relative group" prefetch={false}>
          <img
            src="/placeholder.svg"
            alt="Gallery Image"
            width={300}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg transition-all duration-300 group-hover:opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ZoomInIcon className="w-8 h-8 text-white" />
          </div>
        </Link>
        <Link href="#" className="relative group" prefetch={false}>
          <img
            src="/placeholder.svg"
            alt="Gallery Image"
            width={300}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg transition-all duration-300 group-hover:opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ZoomInIcon className="w-8 h-8 text-white" />
          </div>
        </Link>
        <Link href="#" className="relative group" prefetch={false}>
          <img
            src="/placeholder.svg"
            alt="Gallery Image"
            width={300}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg transition-all duration-300 group-hover:opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ZoomInIcon className="w-8 h-8 text-white" />
          </div>
        </Link>
        <Link href="#" className="relative group" prefetch={false}>
          <img
            src="/placeholder.svg"
            alt="Gallery Image"
            width={300}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg transition-all duration-300 group-hover:opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ZoomInIcon className="w-8 h-8 text-white" />
          </div>
        </Link>
      </div>
      <div className="flex justify-between mt-8 ">
        <button className="mr-2 bg-gray-800 text-white p-2 flex items-center space-x-2 rounded-md font-playfair shadow-md shadow-gray-400 border-2 border-gray-50 justify-center">
          <ChevronLeftIcon className="w-4 h-4" />
          Previous
        </button>
        <button className="mr-2 bg-gray-800 text-white p-2 flex items-center space-x-2 px-4 rounded-md font-playfair shadow-md shadow-gray-400 border-2 border-gray-50 justify-center">
          Next
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
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

function ZoomInIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="11" x2="11" y1="8" y2="14" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </svg>
  );
}
