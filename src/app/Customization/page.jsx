// "use client";
// import { useEffect, useState } from "react";
// import { supabase } from "../Supabase/config";
// import { UserAuth } from "../context/AuthContext";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Swal from "sweetalert2";
// const page = () => {
//   const [customizations, setCustomizations] = useState();
//   const [fetchError, setFetchError] = useState();
//   const [editMode, setEditMode] = useState();
//   const { user: currentUser } = UserAuth();

//   useEffect(() => {
//     // if (!currentUser || !currentUser.uid) return;
//     const fetchData = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("BookingForm")
//           .select("*")
//           .eq("UserId", currentUser.uid);

//         if (error) {
//           console.log(error, "Error fetching data");
//           setFetchError(error);
//           setCustomizations(null);
//         }
//         if (data) {
//           setFetchError(null);
//           setCustomizations(data);
//         }
//       } catch {
//         console.log("Error fetching data!!");
//       }
//     };
//     fetchData();
//   });

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         const { data, error } = await supabase
//           .from("BookingForm")
//           .delete()
//           .eq("id", id);
//         if (error) {
//           console.log(error, "Error Deleting!!!!!");
//           Swal.fire(
//             "Error!",
//             "There was a problem deleting the booking.",
//             "error"
//           );
//           return;
//         }
//         setCustomizations(
//           customizations.filter((booking) => booking.id !== id)
//         );
//         Swal.fire("Deleted!", "Your booking has been deleted.", "success");
//       } catch (error) {
//         console.log(error, "Error Deleting!!!!!!!!!!");
//         Swal.fire(
//           "Error!",
//           "There was a problem deleting the booking.",
//           "error"
//         );
//       }
//     }
//   };

//   const handleEdit = () =>{

//   }

//   return (
//     <>
//       <motion.div
//         className="py-12 p-8  bg-gray-100"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, x: -20 }}
//         transition={{ duration: 0.8 }}
//       >
//         {customizations && (
//           <div className="container mx-auto px-4 md:px-6 min-h-screen">
//             <div className="mb-8 text-center">
//               <h2 className="font-great-vibes tracking-wide text-3xl font-bold sm:text-4xl md:text-5xl">
//                 Customize Your Room
//               </h2>
//               <p className="mt-4 text-gray-500 md:text-xl">
//                 Find the perfect room for your stay.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//               {customizations.map((booking) => (
//                 <div
//                   className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl p-4 bg-white"
//                   key={booking.id}
//                 >
//                   {console.log(booking.id)}
//                   <Link
//                     href={{
//                       pathname: "Rooms/RoomDesc",
//                       query: {
//                         imageUrl: booking.ImageUrl,
//                         hotelName: booking.HotelName,
//                         description: booking.Description,
//                         price: booking.Price,
//                         location: booking.City,
//                         NoOfRooms: booking.NumberOfRooms,
//                         parking: booking.ParkingAvailable,
//                         checkInDate: booking.CheckIn,
//                         checkOutDate: booking.CheckOut,
//                         roomType: booking.RoomType,
//                         roomService: booking.RoomService,
//                         NoOfBeds: booking.Beds,
//                         Id: booking.id,
//                       },
//                     }}
//                   >
//                     <img
//                       alt="Standard Room"
//                       className="h-64 w-full object-cover rounded-t-lg"
//                       height={400}
//                       src={booking.ImageUrl}
//                       style={{
//                         aspectRatio: "600/400",
//                         objectFit: "cover",
//                       }}
//                       width={600}
//                     />
//                   </Link>
//                   <div className="bg-white dark:bg-gray-950 pt-2">
//                     {console.log(booking.ImageUrl)}
//                     <h3 className="text-xl font-bold">{booking.HotelName}</h3>
//                     {console.log(booking.HotelName)}
//                     <p
//                       className="text-gray-500"
//                       style={{
//                         maxHeight: "2.8em",
//                         overflow: "hidden",
//                         textOverflow: "ellipsis",
//                         display: "-webkit-box",
//                         WebkitLineClamp: "2",
//                         WebkitBoxOrient: "vertical",
//                       }}
//                     >
//                       {booking.Description}
//                     </p>

//                     <div className="mt-4 flex items-center justify-between">
//                       <span className="text-lg font-semibold">
//                         Rs.{booking.Price}/night
//                       </span>
//                       <div className="flex space-x-6 ">
//                         <div onClick={()=>handleEdit(booking.id)}>
//                           <img src="/img/iEdit.png" alt="" className="h-8 cursor-pointer" />
//                         </div>
//                         <div onClick={() => handleDelete(booking.id)}>
//                           <img src="/img/iDelete.png" alt="" className="h-8 cursor-pointer" />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="border-b border-gray-400 dark:border-gray-700 my-4" />
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-1">
//                         <StarIcon className="w-5 h-5 fill-yellow-500" />
//                         <StarIcon className="w-5 h-5 fill-yellow-500" />
//                         <StarIcon className="w-5 h-5 fill-yellow-500" />
//                         <StarIcon className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
//                         <StarIcon className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
//                       </div>
//                       <span className="text-gray-500 dark:text-gray-400">
//                         4.3 (123 reviews)
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </motion.div>
//     </>
//   );
// };

// function StarIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   );
// }

// export default page;

"use client";
import { useEffect, useState } from "react";
import { supabase } from "../Supabase/config";
import { UserAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import Link from "next/link";
import Swal from "sweetalert2";

const page = () => {
  const [customizations, setCustomizations] = useState([]);
  const [fetchError, setFetchError] = useState();
  const { user: currentUser } = UserAuth();
  const [editMode, setEditMode] = useState(false);
  const [editBooking, setEditBooking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("BookingForm")
          .select("*")
          .eq("UserId", currentUser.uid);

        if (error) {
          console.log(error, "Error fetching data");
          setFetchError(error);
          setCustomizations([]);
        } else {
          setFetchError(null);
          setCustomizations(data);
        }
      } catch {
        console.log("Error fetching data!!");
      }
    };
    fetchData();
  }, [currentUser]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const { error } = await supabase
          .from("BookingForm")
          .delete()
          .eq("id", id);

        if (error) {
          console.log(error, "Error Deleting!!!!!");
          Swal.fire("Error!", "There was a problem deleting the booking.", "error");
          return;
        }

        setCustomizations(customizations.filter((booking) => booking.id !== id));
        Swal.fire("Deleted!", "Your booking has been deleted.", "success");
      } catch (error) {
        console.log(error, "Error Deleting!!!!!!!!!!");
        Swal.fire("Error!", "There was a problem deleting the booking.", "error");
      }
    }
  };

  const handleEdit = (booking) => {
    setEditMode(true);
    setEditBooking(booking);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const { id, ImageUrl, HotelName, Description, Price, City, NumberOfRooms, ParkingAvailable, CheckIn, CheckOut, RoomType, RoomService, Beds } = editBooking;

    try {
      const { error } = await supabase
        .from("BookingForm")
        .update({
          ImageUrl,
          HotelName,
          Description,
          Price,
          City,
          NumberOfRooms,
          ParkingAvailable,
          CheckIn,
          CheckOut,
          RoomType,
          RoomService,
          Beds
        })
        .eq("id", id);

      if (error) {
        console.log(error, "Error updating data");
        Swal.fire("Error!", "There was a problem updating the booking.", "error");
        return;
      }

      setCustomizations(customizations.map((booking) => (booking.id === id ? editBooking : booking)));
      setEditMode(false);
      setEditBooking(null);
      Swal.fire("Updated!", "Your booking has been updated.", "success");
    } catch (error) {
      console.log(error, "Error updating data!!!!!!!!!!");
      Swal.fire("Error!", "There was a problem updating the booking.", "error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBooking({ ...editBooking, [name]: value });
  };

  return (
    <>
      <motion.div
        className="py-12 p-8 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.8 }}
      >
        {customizations.length > 0 && (
          <div className="container mx-auto px-4 md:px-6 min-h-screen">
            <div className="mb-8 text-center">
              <h2 className="font-great-vibes tracking-wide text-3xl font-bold sm:text-4xl md:text-5xl">
                Customize Your Room
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl">
                Find the perfect room for your stay.
              </p>
            </div>

            {editMode ? (
              <form onSubmit={handleEditSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Edit Booking</h3>
                <div className="grid gap-4">
                  <input
                    type="text"
                    name="HotelName"
                    value={editBooking.HotelName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Hotel Name"
                  />
                  <input
                    type="text"
                    name="Description"
                    value={editBooking.Description}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Description"
                  />
                  <input
                    type="number"
                    name="Price"
                    value={editBooking.Price}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Price"
                  />
                  <input
                    type="text"
                    name="City"
                    value={editBooking.City}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="City"
                  />
                  <input
                    type="number"
                    name="NumberOfRooms"
                    value={editBooking.NumberOfRooms}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Number of Rooms"
                  />
                  <input
                    type="text"
                    name="ParkingAvailable"
                    value={editBooking.ParkingAvailable}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Parking Available"
                  />
                  <input
                    type="date"
                    name="CheckIn"
                    value={editBooking.CheckIn}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Check In Date"
                  />
                  <input
                    type="date"
                    name="CheckOut"
                    value={editBooking.CheckOut}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Check Out Date"
                  />
                  <input
                    type="text"
                    name="RoomType"
                    value={editBooking.RoomType}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Room Type"
                  />
                  <input
                    type="text"
                    name="RoomService"
                    value={editBooking.RoomService}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Room Service"
                  />
                  <input
                    type="number"
                    name="Beds"
                    value={editBooking.Beds}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Number of Beds"
                  />
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {customizations.map((booking) => (
                  <div
                    className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl p-4 bg-white"
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
                        style={{ aspectRatio: "600/400", objectFit: "cover" }}
                        width={600}
                      />
                    </Link>
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
                        <div className="flex space-x-6 ">
                          <div onClick={() => handleEdit(booking)}>
                            <img src="/img/iEdit.png" alt="" className="h-8 cursor-pointer" />
                          </div>
                          <div onClick={() => handleDelete(booking.id)}>
                            <img src="/img/iDelete.png" alt="" className="h-8 cursor-pointer" />
                          </div>
                        </div>
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
                        <span className="text-gray-500 dark:text-gray-400">
                          4.3 (123 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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

