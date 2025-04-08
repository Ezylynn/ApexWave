import React, { useState } from "react";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  auth,
  googleProvider,
  facebookProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "../firebase/config";

import { doc, setDoc, addDoc, getDoc} from "firebase/firestore";
import { db } from "../firebase/config";


import {
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";



function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);



  const [displayName, setDisplayName] = useState(""); // Thêm tên hiển thị
  const [error, setError] = useState("");

  const navigate = useNavigate()
  
    // const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  // 🔹 Handle Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const additionalUserInfo = result.additionalUserInfo;

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      // ✅ User already exists, don't overwrite
      navigate("/");

    } else {
      // 🗓️ Create formatted creation date
      const dateObj = new Date();
      const creationDate = `${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/` +
                           `${dateObj.getDate().toString().padStart(2, '0')}/` +
                           `${dateObj.getFullYear()}`;

      // 🔹 Save to "users" collection
      await setDoc(userRef, {
        displayName: user.displayName || "",
        email: user.email,
        photoURL: user.photoURL || "",
        uid: user.uid,
        providerId: additionalUserInfo?.providerId || "google",
        dateCreated: creationDate,
      });

      // 🔹 Save to "users_Profile" collection
      await setDoc(doc(db, "users_Profile", user.uid), {
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
        userId: user.uid,
        dateCreated: creationDate,
        dob: "",
        age: "",
        address: "",
      });

      navigate("/");
    }
  } catch (err) {
    setError(err.message);
  }
};
  
  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      const additionalUserInfo = result.additionalUserInfo;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        // ✅ User already exists
        navigate("/");

      } else {
        // 🗓️ Format creation date
        const dateObj = new Date();
        const creationDate = `${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/` +
                            `${dateObj.getDate().toString().padStart(2, '0')}/` +
                            `${dateObj.getFullYear()}`;

        // 🔹 Create document in "users"
        await setDoc(userRef, {
          displayName: user.displayName || "",
          email: user.email,
          photoURL: user.photoURL || "",
          uid: user.uid,
          providerId: additionalUserInfo?.providerId || "facebook",
          dateCreated: creationDate,
        });

        // 🔹 Create document in "users_Profile"
        await setDoc(doc(db, "users_Profile", user.uid), {
          displayName: user.displayName || "",
          photoURL: user.photoURL || "",
          userId: user.uid,
          dateCreated: creationDate,
          dob: "",
          age: "",
          address: "",
        });

        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>

      <main className="container min-h-screen mx-auto flex flex-col items-center justify-center gap-12 py-12">


        <header className="w-full text-center">
          <p className="text-xl font-semibold">Hi, Welcome Back! 👋</p>
        </header>

        {/* 🔹 Login Form */}
        <section>
          <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
            <input
              className="w-full rounded-lg  px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              autoComplete="new-email"

              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password Field */}
                  <div className="relative w-full">
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Your Password"
                      value={password}
                      autoComplete="new-password"

                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeIcon className="size-6 hover:cursor-pointer" /> : <EyeSlashIcon className="size-6 hover:cursor-pointer" />}
                    </button>
            </div>
          
            <button className="w-full bg-[#FB8E0B] text-white py-2 rounded-sm hover:bg-[#db7e0d] hover:cursor-pointer" type="submit">
              Log In
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
        </section>


        <section className="flex flex-col items-center justify-center gap-4">
          <div className="w-full flex items-center justify-center">
            <div className="h-[1px] bg-gray-400 w-full" />
            <span className="mx-4 text-light whitespace-nowrap">Or With</span>
            <div className="h-[1px] bg-gray-400 w-full" />
          </div>

          {/* 🔹 Google Sign-In */}
          <button onClick={handleGoogleLogin} className="w-4/5 flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4 hover:cursor-pointer">
            <img className="size-6 mr-4" src="../assets/GoogleLogo.jpg" alt="Google logo" />
            <span className="w-1/2 text-sm font-semibold">Google</span>
          </button>



          {/* 🔹 Facebook Sign-In */}
          <button onClick={handleFacebookLogin} className="w-4/5 flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4 hover:cursor-pointer">
            <img className="size-6 mr-4" src="../assets/Facebook_Logo.png" alt="Facebook logo" />
            <span className="w-1/2 text-sm font-semibold text-nowrap">Facebook</span>
          </button>

          <p>
            Don't have an account? <Link className="text-blue-600" to="/sign-up">Sign Up</Link>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SignIn;