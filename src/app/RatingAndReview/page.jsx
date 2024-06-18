"use client";

// import { useState } from "react";
// import { supabase } from "../Supabase/config";
// import { toast } from "react-toastify";
// import { db } from "../../../firebase";
// import { UserAuth } from "../context/AuthContext";
// import { ref, get } from "firebase/database";
// import Image from "next/image";

// const ReviewAndRating = () => {
//   //Use state management
//   const [rating, setRating] = useState("");
//   const [title, setTitle] = useState("");
//   const [review, setReview] = useState("");
//   const [currentPage, setCurrentPage] = useState("");
//   const { user: currentUser } = UserAuth();
//   //On Submit data...
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     let firstName, lastName;

//     try {
//       const userInfo = ref(db, `users/${currentUser.uid}`);
//       const userSnapshot = await get(userInfo);
//       const userData = userSnapshot.val();
//       firstName = userData.firstName;
//       lastName = userData.lastName;
//     } catch {
//       console.log("Error Fetching firstname and last name!!!");
//     }
//     const { data, error } = await supabase.from("RatingAndReview").insert([
//       {
//         Rating: rating,
//         Review: review,
//         Title: title,
//         // HotelId:
//         FirstName: firstName,
//         LastName: lastName,
//       },
//     ]);
//     if (error) {
//       console.log("Error inserting data", error);
//     } else {
//       toast.success("Review has been added sucessfully!");
//       setRating(5);
//       setTitle("");
//       setReview("");
//     }
//   };

//   return (
//     <div>
//       <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
//         <div className="grid gap-12">
//           <div className="grid gap-6">
//             <div className="grid gap-2">
//               <h2 className="text-2xl font-bold font-great-vibes">
//                 Submit a Review
//               </h2>
//               <p className="text-gray-500 dark:text-gray-400">
//                 Share your experience and help others make informed decisions.
//               </p>
//             </div>
//             <div className="bg-white rounded-lg shadow-md shadow-gray-300 p-6">
//               <form className="grid gap-6" onSubmit={handleSubmit}>
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div className="grid gap-2">
//                     <label htmlFor="rating" className="font-medium">
//                       Rating
//                     </label>
//                     <div id="rating" className="space-y-2">
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="radio"
//                           name="rating"
//                           value="5"
//                           id="rating-5"
//                           defaultChecked
//                           className=""
//                           onChange={(e) => setRating(Number(e.target.value))}
//                         />
//                         <label
//                           htmlFor="rating-5"
//                           className="flex items-center gap-1 cursor-pointer"
//                         >
//                           {Array.from({ length: 5 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-5 h-5 fill-current text-gray-900"
//                             />
//                           ))}
//                         </label>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="radio"
//                           name="rating"
//                           value="4"
//                           id="rating-4"
//                           className=""
//                           onChange={(e) => setRating(Number(e.target.value))}
//                         />
//                         <label
//                           htmlFor="rating-4"
//                           className="flex items-center gap-1 cursor-pointer"
//                         >
//                           {Array.from({ length: 4 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-5 h-5 fill-current text-gray-900"
//                             />
//                           ))}
//                           <StarIcon className="w-5 h-5 fill-current text-gray-300" />
//                         </label>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="radio"
//                           name="rating"
//                           value="3"
//                           id="rating-3"
//                           className=""
//                           onChange={(e) => setRating(Number(e.target.value))}
//                         />
//                         <label
//                           htmlFor="rating-3"
//                           className="flex items-center gap-1 cursor-pointer"
//                         >
//                           {Array.from({ length: 3 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-5 h-5 fill-current text-gray-900"
//                             />
//                           ))}
//                           {Array.from({ length: 2 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-5 h-5 fill-current text-gray-300"
//                             />
//                           ))}
//                         </label>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="radio"
//                           name="rating"
//                           value="2"
//                           id="rating-2"
//                           className=""
//                           onChange={(e) => setRating(Number(e.target.value))}
//                         />
//                         <label
//                           htmlFor="rating-2"
//                           className="flex items-center gap-1 cursor-pointer"
//                         >
//                           {Array.from({ length: 2 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-5 h-5 fill-current text-gray-900"
//                             />
//                           ))}
//                           {Array.from({ length: 3 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-5 h-5 fill-current text-gray-300"
//                             />
//                           ))}
//                         </label>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="radio"
//                           name="rating"
//                           value="1"
//                           id="rating-1"
//                           className="text-gray-900"
//                           onChange={(e) => setRating(Number(e.target.value))}
//                         />
//                         <label
//                           htmlFor="rating-1"
//                           className="flex items-center gap-1 cursor-pointer"
//                         >
//                           <StarIcon className="w-5 h-5 fill-current text-gray-900" />
//                           {Array.from({ length: 4 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-5 h-5 fill-current text-gray-300"
//                             />
//                           ))}
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="grid gap-2">
//                     <label htmlFor="title" className="font-medium">
//                       Review Title
//                     </label>
//                     <input
//                       type="text"
//                       id="title"
//                       placeholder="Enter a title for your review"
//                       className="block w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300 focus:border-indigo-300"
//                       value={title}
//                       onChange={(e) => setTitle(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="grid gap-2">
//                   <label htmlFor="review" className="font-medium">
//                     Review
//                   </label>
//                   <textarea
//                     id="review"
//                     placeholder="Share your thoughts and experiences"
//                     rows={4}
//                     value={review}
//                     className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300 focus:border-indigo-300"
//                     onChange={(e) => setReview(e.target.value)}
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
//                 >
//                   Submit Review
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div className="grid gap-6">
//             <div className="grid gap-2">
//               <h2 className="text-2xl font-bold">All Reviews</h2>
//               <p className="text-gray-500 dark:text-gray-400">
//                 See what other travelers have to say about their stay.
//               </p>
//             </div>
//             <div className="grid gap-4">
//               {/* <div className="flex items-center justify-between">
//                                 <div className="relative inline-block">
//                                     <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:ring focus:ring-opacity-50 focus:ring-indigo-300">
//                                         <ListOrderedIcon className="w-4 h-4 mr-2" />
//                                         Sort by
//                                     </button>
//                                     <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
//                                         <div className="py-1">
//                                             <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 Newest
//                                             </button>
//                                             <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 Oldest
//                                             </button>
//                                             <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 Highest Rating
//                                             </button>
//                                             <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 Lowest Rating
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="relative inline-block">
//                                     <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:ring focus:ring-opacity-50 focus:ring-indigo-300">
//                                         <FilterIcon className="w-4 h-4 mr-2" />
//                                         Filter
//                                     </button>
//                                     <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
//                                         <div className="py-1">
//                                             <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 <input type="checkbox" className="mr-2" />5 Stars
//                                             </div>
//                                             <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 <input type="checkbox" className="mr-2" />4 Stars
//                                             </div>
//                                             <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 <input type="checkbox" className="mr-2" />3 Stars
//                                             </div>
//                                             <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 <input type="checkbox" className="mr-2" />2 Stars
//                                             </div>
//                                             <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 <input type="checkbox" className="mr-2" />1 Star
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div> */}
//               <div className="grid gap-6">
//                 <div className="grid gap-4">
//                   <div className="flex items-start gap-4">
//                     <div className="relative w-12 h-12 overflow-hidden bg-gray-200 rounded-full border">
//                       <Image
//                         src="/placeholder.svg"
//                         alt="@username"
//                         className="w-full  h-10"
//                       />
//                       <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-gray-700">
//                         JD
//                       </div>
//                     </div>
//                     <div className="grid gap-2">
//                       <div className="flex items-center gap-2">
//                         <div className="font-medium">John Doe</div>
//                         <div className="flex items-center gap-0.5 text-xs">
//                           {Array.from({ length: 4 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-4 h-4 fill-current text-yellow-500"
//                             />
//                           ))}
//                           <StarIcon className="w-4 h-4 fill-current text-gray-300" />
//                         </div>
//                       </div>
//                       <h3 className="text-lg font-semibold">Excellent stay!</h3>
//                       <p className="text-gray-500 dark:text-gray-400">
//                         The hotel was clean, the staff was friendly, and the
//                         location was perfect. I would definitely stay here
//                         again.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// function FilterIcon(props) {
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
//       <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
//     </svg>
//   );
// }

// function ListOrderedIcon(props) {
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
//       <line x1="10" x2="21" y1="6" y2="6" />
//       <line x1="10" x2="21" y1="12" y2="12" />
//       <line x1="10" x2="21" y1="18" y2="18" />
//       <path d="M4 6h1v4" />
//       <path d="M4 10h2" />
//       <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
//     </svg>
//   );
// }

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

// export default ReviewAndRating;
import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { toast } from "react-toastify";
import { db } from "../../../firebase";
import { UserAuth } from "../context/AuthContext";
import { supabase } from "../Supabase/config";
import Image from "next/image";

const RatingAndReview = () => {
  const [rating, setRating] = useState("");
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const { user: currentUser } = UserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let firstName = "";
    let lastName = "";

    try {
      const userInfo = ref(db, `users/${currentUser.uid}`);
      const userSnapshot = await get(userInfo);
      const userData = userSnapshot.val();
      firstName = userData.firstName;
      lastName = userData.lastName;
    } catch (error) {
      console.log("Error fetching firstname and last name:", error);
      return;
    }

    try {
      const { data, error } = await supabase.from("RatingAndReview").insert([
        {
          Rating: rating,
          Review: review,
          Title: title,
          FirstName: firstName,
          LastName: lastName,
        },
      ]);

      if (error) {
        console.error("Error inserting data", error);
        return;
      }

      toast.success("Review has been added successfully!");
      setRating("");
      setTitle("");
      setReview("");
    } catch (error) {
      console.error("Error inserting review:", error);
    }
  };

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-12">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold font-great-vibes">
                Submit a Review
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Share your experience and help others make informed decisions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md shadow-gray-300 p-6">
              <form className="grid gap-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="rating" className="font-medium">
                      Rating
                    </label>
                    <div id="rating" className="space-y-2">
                      {[5, 4, 3, 2, 1].map((value) => (
                        <div key={value} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="rating"
                            value={value}
                            id={`rating-${value}`}
                            onChange={(e) => setRating(Number(e.target.value))}
                          />
                          <label
                            htmlFor={`rating-${value}`}
                            className="flex items-center gap-1 cursor-pointer"
                          >
                            {[...Array(value)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className="w-5 h-5 fill-current text-yellow-500"
                              />
                            ))}
                            {[...Array(5 - value)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className="w-5 h-5 fill-current text-gray-300"
                              />
                            ))}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="title" className="font-medium">
                      Review Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      placeholder="Enter a title for your review"
                      className="block w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300 focus:border-indigo-300"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="review" className="font-medium">
                    Review
                  </label>
                  <textarea
                    id="review"
                    placeholder="Share your thoughts and experiences"
                    rows={4}
                    value={review}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300 focus:border-indigo-300"
                    onChange={(e) => setReview(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">All Reviews</h2>
              <p className="text-gray-500 dark:text-gray-400">
                See what other travelers have to say about their stay.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 overflow-hidden bg-gray-200 rounded-full border">
                  <Image
                    src="/placeholder.svg"
                    alt="@username"
                    className="w-full  h-10"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-gray-700">
                    JD
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">John Doe</div>
                    <div className="flex items-center gap-0.5 text-xs">
                      {[...Array(4)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="w-4 h-4 fill-current text-yellow-500"
                        />
                      ))}
                      <StarIcon className="w-4 h-4 fill-current text-gray-300" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">Excellent stay!</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    The hotel was clean, the staff was friendly, and the
                    location was perfect. I would definitely stay here again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default RatingAndReview;
