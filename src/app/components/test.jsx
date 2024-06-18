/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mOxdd4r0oRP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default function Component() {
  return (
    <main className="flex flex-col">
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          alt="Hotel Hero"
          className="absolute inset-0 h-full w-full object-cover object-center"
          height={1080}
          src="/placeholder.svg"
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width={1920}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 h-full w-full flex flex-col items-center justify-center gap-6 px-4 md:px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Discover Your Dream Getaway
          </h1>
          <p className="text-lg text-white md:text-xl lg:text-2xl">
            Find the perfect hotel room for your next vacation.
          </p>
          <form className="w-full max-w-xl">
            <div className="flex rounded-lg bg-white shadow-lg">
              <Input
                className="flex-1 rounded-l-lg px-4 py-3 text-sm focus:outline-none"
                placeholder="Search by location, date, or room type"
                type="text"
              />
              <Button
                className="rounded-r-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/80 focus:outline-none"
                type="submit"
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-4">
              <WifiIcon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Free WiFi</h3>
              <p className="text-gray-500 text-center">
                Stay connected with high-speed internet access in all rooms.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <ParkingMeterIcon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Free Parking</h3>
              <p className="text-gray-500 text-center">
                Complimentary parking for all guests.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <SpadeIcon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Spa & Wellness</h3>
              <p className="text-gray-500 text-center">
                Relax and rejuvenate at our on-site spa.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <MenuIcon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Dining Options</h3>
              <p className="text-gray-500 text-center">
                Enjoy a variety of dining experiences at our hotel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Explore Our Room Types
            </h2>
            <p className="mt-4 text-gray-500 md:text-xl">
              Find the perfect room for your stay.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <Link className="block" href="#">
                <Image
                  alt="Standard Room"
                  className="h-64 w-full object-cover"
                  height={400}
                  src="/placeholder.svg"
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
                      className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/80 focus:outline-none"
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
                  src="/placeholder.svg"
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
                    <Button
                      className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/80 focus:outline-none"
                      href="#"
                    >
                      Book Now
                    </Button>
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
                  src="/placeholder.svg"
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
                      className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/80 focus:outline-none"
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
      <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              What Our Guests Say
            </h2>
            <p className="mt-4 text-gray-500 md:text-xl">
              Read reviews from our satisfied customers.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
              <div className="flex items-center gap-4">
                {/* <Avatar className="border w-12 h-12">
                  <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar> */}
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-gray-500 text-sm">New York, USA</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-3 h-3 fill-primary" />
                    <StarIcon className="w-3 h-3 fill-primary" />
                    <StarIcon className="w-3 h-3 fill-primary" />
                    <StarIcon className="w-3 h-3 fill-primary" />
                    <StarIcon className="w-3 h-3 fill-primary" />
                  </div>
                  <span>1 week ago</span>
                </div>
                <p className="mt-4 text-gray-500">
                  The hotel was amazing! The room was clean and comfortable, and
                  the staff was incredibly friendly and helpful. I would
                  definitely stay here again.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
              <div className="flex items-center gap-4">
                {/* <Avatar className="border w-12 h-12">
                  <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar> */}
                <div>
                  <h4 className="font-semibold">Jane Smith</h4>
                  <p className="text-gray-500 text-sm">London, UK</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-3 h-3 fill-primary" />
                    <StarIcon className="w-3 h-3 fill-primary" />
                    <StarIcon className="w-3 h-3 fill-primary" />
                    <StarIcon className="w-3 h-3 fill-primary" />
                    <StarIcon className="w-3 h-3 fill-primary" />
                  </div>
                  <span>2 weeks ago</span>
                </div>
                <p className="mt-4 text-gray-500">
                  I had a wonderful stay at this hotel. The amenities were
                  top-notch, and the staff went above and beyond to make my
                  experience exceptional.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
              <div className="flex items-center gap-4">
                {/* <Avatar className="border w-12 h-12">
                  <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar> */}
                <div>
                  <h4 className="font-semibold">Michael Johnson</h4>
                  <p className="text-gray-500 text-sm">San Francisco, USA</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-3 h-3 fill-primary" />
                    <StarIcon className="w-3 h-3 fill-primary" />
                    <StarIcon className="w-3 h-3 fill-primary" />
                    <StarIcon className="w-3 h-3 fill-primary" />
                    <StarIcon className="w-3 h-3 fill-primary" />
                  </div>
                  <span>3 weeks ago</span>
                </div>
                <p className="mt-4 text-gray-500">
                  I had an amazing stay at this hotel. The location was perfect,
                  and the room was incredibly comfortable. I would highly
                  recommend this place to anyone visiting the area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Book Your Stay Today
          </h2>
          <p className="mt-4 md:text-xl">
            Experience the best of our hotel and make your vacation
            unforgettable.
          </p>
          <div className="mt-8">
            <Button
              className="rounded-md bg-white px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-gray-200 focus:outline-none"
              href="#"
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function ParkingMeterIcon(props) {
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
      <path d="M9 9a3 3 0 1 1 6 0" />
      <path d="M12 12v3" />
      <path d="M11 15h2" />
      <path d="M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3" />
      <path d="M12 19v3" />
    </svg>
  );
}

function SpadeIcon(props) {
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
      <path d="M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z" />
      <path d="M12 18v4" />
    </svg>
  );
}

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

function WifiIcon(props) {
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
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  );
}
