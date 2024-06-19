"use client";

import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";
import { ref, get } from "firebase/database";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { auth, db } from "../../../firebase";
import { toast } from "react-toastify";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = UserAuth();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      console.log("Logging in with email and password...");
      await logIn(email, password);

      const userRef = ref(db, `users/${auth.currentUser.uid}`);
      const snapshot = await get(userRef);
      const userData = snapshot.val();

      if (userData && userData.role) {
        toast.success("Logged in successfully!");
        router.push(userData.role === "admin" ? "/Admin" : "/");
      } else {
        router.push("/");
        toast.success("Logged In sucessfully");
      }

      console.log("Logged in successfully!");
    } catch (err) {
      console.log("Error logging in:", err);
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      router.push("/");
      toast.success("Logged In sucessfully");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <motion.div
        className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8 bg-gray-100"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm font-great-vibes">
          <Link href="/">
            <li className="flex-shrink-0 text-3xl text-center font-bold font-great-vibes bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Book my Room
            </li>
          </Link>
          <h2 className="mt-2 p-4 text-center font-extrabold leading-9 tracking-tight text-gray-900 font-david-libre text-lg">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Sign In
            </span>{" "}
            To Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text ">
              Account
            </span>
            {error && (
              <p className="text-sm bg-red-500 text-white p-3 rounded-xl m-2">
                {error}
              </p>
            )}
          </h2>
        </div>

        <div className="min-h-full md:bg-white md:rounded-lg md:p-10 md:shadow-md md:border md:border-gray-100 md:max-w-lg w-full sm:max-w-sm">
          <div className="sm:mx-auto sm:w-full">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  📩 Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your gmail..."
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    🔐 Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password.."
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                  />
                </div>

                <div className="flex justify-between py-2">
                  <div className="flex items-center space-x-4 pl-2">
                    <input
                      className="w-4 h-4"
                      type="checkbox"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                    />
                    <p className="text-sm">Show password</p>
                  </div>
                  <div className="text-sm mt-2">
                    <Link href="/ForgotPass">
                      <p className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot Password?
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>

              <div className=" flex justify-cente items-center">
                <hr className="w-full border-gray-300" />
                <span className="w-full px-2">Or continue with</span>
                <hr className="w-full border-gray-300" />
              </div>

              <div className="">
                <button
                  className="flex flex-1 border border-gray-400 space-x-2 py-2 px-4 rounded-xl items-center justify-center w-full "
                  onClick={handleGoogleSignIn}
                >
                  <Image
                    src="/Image/google.png"
                    alt="Google image"
                    className="h-8 w-8"
                    height={80} // Required property
                    width={40} // Required property
                  />
                  <span>Sign in with Google</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <p className="mt-10 text-center text-md text-gray-500">
            New Member?{" "}
            <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              <Link href="/Signup">Register</Link>
            </a>
          </p>
        </div>
      </motion.div>{" "}
    </>
  );
};

export default Login
