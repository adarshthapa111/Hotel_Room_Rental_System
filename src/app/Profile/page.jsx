"use client";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { ref, get, orderByChild, equalTo } from "firebase/database";
import { useRouter } from "next/navigation";
import { signOut as firebaseSignOut } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const { user: currentUser } = UserAuth();
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        try {
          // Fetch user data from Realtime Database
          const dbRef = ref(db, `users/${currentUser.uid}`);
          const snapshot = await get(dbRef);

          if (snapshot.exists()) {
            setUserData(snapshot.val());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out ⇤",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await firebaseSignOut(auth);
          console.log("Sign out successful.");
          router.push("/");
          toast.success("Sucessfully Logout");
        } catch (error) {
          console.error("Error signing out:", error);
          setError(error.message);
        }
      }
    });
  };

  return (
    // <div className="bg-gray-100">
    //   <div className=" pt-24 p-2 min-h-screen max-w-6xl mx-auto ">
    //     {/* <h2 className="font-david-libre text-2xl font-bold xl:text-4xl p-4 text-center">
    //     Profile
    //   </h2> */}
    //     <div className="py-10 text-2xl font-light shadow-md rounded-md">
    //       {userData && (
    //         <div>
    //           <div>
    //             <p className="font-david-libre font-semibold text-2xl md:text-3xl lg:text-4xl text-center">
    //               {" "}
    //               Welcome Dear,{" "}
    //               <span className="text-orange-400">
    //                 {" "}
    //                 {userData.firstName} {userData.lastName}
    //               </span>
    //             </p>
    //           </div>
    //           <div className="p-10">
    //             <p className="font-david-libre">
    //               {" "}
    //               <span className="text-orange-400 "> Email:</span>{" "}
    //               {userData.email}
    //             </p>
    //           </div>
    //           <div className="md:flex justify-between p-4 md:px-10 space-x-4 capitalize mb-10 font-david-libre">
    //             <p>
    //               <span className="text-orange-400"> First Name:</span>{" "}
    //               {userData.firstName}
    //             </p>
    //             <p>
    //               <span className="text-orange-400 "> Last Name:</span>{" "}
    //               {userData.lastName}
    //             </p>
    //           </div>
    //           <div className="text-center">
    //             <motion.button
    //               whileHover={{ scale: 1.1 }}
    //               whileTap={{ scale: 0.9 }}
    //               className="text-white bg-orange-400 rounded-full font-david-libre w-36 p-2 text-lg shadow-lg shadow-gray-200 mr-2 mx-auto hover:font-semibold"
    //               onClick={handleSignOut}
    //             >
    //               Log Out
    //             </motion.button>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>

    <div className="w-full min-h-screen">
      {userData && (
        <>
          <section className="w-full bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
            <div className="container px-4 md:px-6  mx-auto max-w-7xl">
              <div className="max-w-2xl mx-auto text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-great-vibes">
                  Welcome,  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">{userData.firstName} {userData.lastName}</span> !
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                  Explore your profile and manage your account settings.
                </p>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-16 lg:py-20  mx-auto max-w-7xl font-great-vibes lg:text-2xl">
            <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">First Name</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">{userData.firstName}</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Last Name</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">{userData.lastName}</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {userData.email}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default page;
