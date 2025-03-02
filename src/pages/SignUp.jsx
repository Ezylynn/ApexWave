import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  auth,
  googleProvider,
  facebookProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "../firebase/config";

import {ArrowLongLeftIcon} from '@heroicons/react/24/solid' 

// Import Images
import GoogleLogo from "../../public/assets/GoogleLogo.jpg";
import FacebookLogo from "../../public/assets/Facebook_Logo.png";
import SignUpImage from "../../public/assets/dino-reichmuth-A5rCN8626Ck-unsplash 1.png";

const SignUp = () => {
  const navigate = useNavigate();
  
  // 🔹 Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // 🔹 Handle Email/Password Sign-Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect after successful sign-up
    } catch (err) {
      setError(err.message);
    }
  };

  // 🔹 Handle Google Sign-Up
  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/"); // Redirect after sign-up
    } catch (err) {
      setError(err.message);
    }
  };

  // 🔹 Handle Facebook Sign-Up
  const handleFacebookSignUp = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate("/"); // Redirect after sign-up
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {/* 🔹 Back Button */}
      <div onClick={() => navigate('/')} className="absolute top-3 left-3 md:top-6 md:left-6 flex items-center gap-2">
        <ArrowLongLeftIcon className="size-8 text-pr font-semibold text-[#FB8E0B]" />
        <p className="text-xl font-semibold text-[#FB8E0B]">Home</p>
      </div>

      {/* 🔹 Centered Content */}
      <main className="container mx-auto flex h-screen items-center justify-center">
        <div className="flex items-center justify-center gap-8 px-10 py-14 rounded-md md:border-[1px] md:border-gray-200">
          <div className="flex flex-col items-center justify-center gap-10">
            <header className="w-full text-center">
              <p className="text-xl font-semibold">Create an account</p>
              <p className="text-sm font-light">Connect with your friends today!</p>
            </header>

            {/* 🔹 Show Errors */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* 🔹 Sign-Up Form */}
            <section>
              <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
                  type="password"
                  placeholder="Create a Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button className="w-full rounded-sm bg-[#FB8E0B] py-2 text-white hover:bg-[#db7e0d]" type="submit">
                  Sign Up
                </button>
              </form>
            </section>

            {/* 🔹 Divider */}
            <div className="flex w-full items-center justify-center">
              <div className="h-[1px] w-full bg-gray-400" />
              <span className="text-light mx-4 whitespace-nowrap">Or With</span>
              <div className="h-[1px] w-full bg-gray-400" />
            </div>

            {/* 🔹 Social Login Buttons */}
            <section className="flex flex-col items-center justify-center gap-4">
              {/* Google Sign-In */}
              <button
                onClick={handleGoogleSignUp}
                className="w-4/5 flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4"
              >
                <img className="size-6 mr-4" src={GoogleLogo} alt="Google logo" />
                <span className="w-4/5 text-sm font-semibold">Sign up with Google</span>
              </button>

              {/* Facebook Sign-In */}
              <button
                onClick={handleFacebookSignUp}
                className="w-4/5 flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4"
              >
                <img className="size-6 mr-4" src={FacebookLogo} alt="Facebook logo" />
                <span className="w-4/5 text-sm font-semibold text-nowrap">Sign up with Facebook</span>
              </button>

              <p>
                Already have an account? <span><Link className="text-blue-600" to="/sign-in">
                  Login
                </Link></span>
              </p>
            </section>
          </div>

          {/* 🔹 Right Side: Image */}
          <div className="hidden md:flex md:items-center md:justify-center">
            <img className="max-h-[500px] max-w-[500px] flex-none object-contain" src={SignUpImage} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;