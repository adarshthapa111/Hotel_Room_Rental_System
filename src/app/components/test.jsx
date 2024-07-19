
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="w-full">
      <section className="relative h-[500px] overflow-hidden">
        <img src="/placeholder.svg" alt="Hotel exterior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Luxury Beachfront Resort</h1>
          <p className="mt-4 text-lg sm:text-xl">
            Experience the ultimate in relaxation and comfort at our world-class hotel.
          </p>
        </div>
      </section>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-muted p-6 sm:p-8">
              <h2 className="text-2xl font-bold">Book Your Stay</h2>
              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="check-in" className="mb-1 block text-sm font-medium">
                      Check-in
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="flex w-full items-center justify-between">
                          <span>04/01/2024</span>
                          <CalendarIcon className="h-5 w-5" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0">
                        <Calendar />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <label htmlFor="check-out" className="mb-1 block text-sm font-medium">
                      Check-out
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="flex w-full items-center justify-between">
                          <span>04/05/2024</span>
                          <CalendarIcon className="h-5 w-5" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0">
                        <Calendar />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div>
                  <label htmlFor="guests" className="mb-1 block text-sm font-medium">
                    Guests
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="2 adults" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 adult</SelectItem>
                      <SelectItem value="2">2 adults</SelectItem>
                      <SelectItem value="3">2 adults, 1 child</SelectItem>
                      <SelectItem value="4">2 adults, 2 children</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="room-type" className="mb-1 block text-sm font-medium">
                    Room Type
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Standard Room" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard Room</SelectItem>
                      <SelectItem value="deluxe">Deluxe Room</SelectItem>
                      <SelectItem value="suite">Suite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button size="lg" className="w-full">
                  Book Now
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold">About the Hotel</h2>
                <p className="mt-4 text-muted-foreground">
                  Our luxury beachfront resort offers the ultimate in relaxation and comfort. Enjoy stunning ocean
                  views, world- class amenities, and impeccable service during your stay.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Amenities</h2>
                <ul className="mt-4 grid grid-cols-2 gap-4 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <WifiIcon className="h-5 w-5" />
                    Free WiFi
                  </li>
                  <li className="flex items-center gap-2">
                    <PocketIcon className="h-5 w-5" />
                    Outdoor Pool
                  </li>
                  <li className="flex items-center gap-2">
                    <SpadeIcon className="h-5 w-5" />
                    Full-Service Spa
                  </li>
                  <li className="flex items-center gap-2">
                    <WeightIcon className="h-5 w-5" />
                    Fitness Center
                  </li>
                  <li className="flex items-center gap-2">
                    <MenuIcon className="h-5 w-5" />
                    On-Site Dining
                  </li>
                  <li className="flex items-center gap-2">
                    <ParkingMeterIcon className="h-5 w-5" />
                    Free Parking
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Room Types</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="text-xl font-bold">Standard Room</h3>
                    <p className="mt-2 text-muted-foreground">
                      Spacious room with a king-size bed, private balcony, and stunning ocean views.
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="text-xl font-bold">Deluxe Room</h3>
                    <p className="mt-2 text-muted-foreground">
                      Luxurious room with a private jacuzzi, separate living area, and panoramic ocean vistas.
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="text-xl font-bold">Suite</h3>
                    <p className="mt-2 text-muted-foreground">
                      Spacious suite with a separate bedroom, living room, and private terrace overlooking the beach.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Guest Reviews</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-muted-foreground">5 days ago</div>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-primary" />
                      </div>
                      <p className="mt-2 text-muted-foreground">
                        Absolutely amazing hotel! The staff was incredibly friendly and attentive, and the room was
                        spotless and luxurious. I can't wait to come back.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="font-medium">Jane Smith</div>
                        <div className="text-sm text-muted-foreground">2 weeks ago</div>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-muted" />
                      </div>
                      <p className="mt-2 text-muted-foreground">
                        The hotel was beautiful, but the service could have been a bit better. Overall, a great
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CalendarIcon(props) {
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
    </svg>
  )
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
  )
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
  )
}


function PocketIcon(props) {
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
      <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" />
      <polyline points="8 10 12 14 16 10" />
    </svg>
  )
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
  )
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
  )
}


function WeightIcon(props) {
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
      <circle cx="12" cy="5" r="3" />
      <path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />
    </svg>
  )
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
  )
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
  )
}