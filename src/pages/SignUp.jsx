import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  auth,
  googleProvider,
  facebookProvider,
  signInWithPopup
} from "../firebase/config";
import { createUserWithEmailAndPassword, getAdditionalUserInfo } from "firebase/auth";

import { doc, setDoc, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Footer from "../layout/Footer";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState(""); // Thêm tên hiển thị
  const [error, setError] = useState("");

  // 🔹 Handle Email/Password Sign-Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      let dateObj = new Date()
      const creationDate = `${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/` +
                          `${dateObj.getDate().toString().padStart(2, '0')}/` +
                          `${dateObj.getFullYear()}`;

      // Lưu vào Firestore
      const userRef = await setDoc(doc(db, "users", user.uid), {
        displayName: displayName || "",
        email: user.email,
        uid: user.uid,
        providerId: "password", // Đăng ký bằng email/password
        dateCreated: creationDate
      });

      await setDoc(doc(db, "users_Profile", user.uid), {
        displayName: displayName || "",
        photoURL: user.photoURL || "",
        userId: user.uid,
        dateCreated:creationDate,
        dob: "",
        age: "",
        address: ""
      });

      

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  // 🔹 Handle Google Sign-Up
  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const additionalUserInfo = result.additionalUserInfo;

      

      // Lưu vào Firestore
      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName || "",
        email: user.email,
        photoURL: user.photoURL || "",
        uid: user.uid,
        providerId: additionalUserInfo?.providerId || "google",
      });

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  // 🔹 Handle Facebook Sign-Up
  const handleFacebookSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      const additionalUserInfo = result.additionalUserInfo;

      // Lưu vào Firestore
      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName || "",
        email: user.email,
        photoURL: user.photoURL || "",
        uid: user.uid,
        providerId: additionalUserInfo?.providerId || "facebook",
      });

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>

      <main className="container mx-auto flex min-h-screen items-center justify-center">
        <div className="flex items-center justify-center gap-8 px-10 py-14 rounded-md">
          <div className="flex flex-col items-center justify-center gap-10">
            <header className="w-full text-center">
              <p className="text-xl md:text-2xl font-semibold">Create an account</p>
              <p className="ext-sm md:text-lg font-light">Connect with your friends today!</p>
            </header>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <section>
              <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
                <input
                  className="w-full rounded-lg border px-4 py-2  border border-gray-300 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
                  type="text"
                  placeholder="Enter Your Name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                />
                <input
                  className="w-full rounded-lg border px-4 py-2  border border-gray-300 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="w-full rounded-lg border px-4 py-2  border border-gray-300 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
                  type="password"
                  placeholder="Create a Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  className="w-full rounded-lg border px-4 py-2  border border-gray-300 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button className="w-full rounded-sm bg-[#FB8E0B] py-2 text-white" type="submit">
                  Sign Up
                </button>
              </form>
            </section>

            <div className="flex w-full items-center justify-center">
              <div className="h-[1px] w-full bg-gray-400" />
              <span className="text-light mx-4 whitespace-nowrap">Or With</span>
              <div className="h-[1px] w-full bg-gray-400" />
            </div>

            <section className="flex flex-col items-center gap-4">
              <button
                onClick={handleGoogleSignUp}
                className="w-4/5 flex items-center border border-gray-300 rounded-lg py-2 px-4"
              > 
                <img className="size-6 mr-4" src="../assets/GoogleLogo.jpg" alt="Google logo" />
                <span className="w-4/5 text-sm font-semibold">Sign up with Google</span>
                
              </button>

              <button
                onClick={handleFacebookSignUp}
                className="w-4/5 flex items-center border border-gray-300 rounded-lg py-2 px-4"
              >
              <img className="size-6 mr-4" src="../assets/Facebook_Logo.png" alt="Facebook logo" />
                <span className="w-4/5 text-sm font-semibold">Sign up with Facebook</span>
              </button>

              <p>
                Already have an account?{" "}
                <Link className="text-blue-600" to="/sign-in">
                  Login
                </Link>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default SignUp;