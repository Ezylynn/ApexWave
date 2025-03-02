import React, { useState} from "react";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  auth,
  googleProvider,
  facebookProvider,
  signInWithEmailAndPassword ,
  signInWithPopup,
} from "../firebase/config";

import {ArrowLongLeftIcon} from '@heroicons/react/24/solid' 

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate()


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

  // 🔹 Handle Google Sign-In
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/')
    } catch (err) {
      setError(err.message);
    }
  };
  
  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate("/"); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
        <div onClick={() => navigate('/')} className="absolute top-3 left-3 md:top-6 md:left-6 flex items-center gap-2">
          <ArrowLongLeftIcon className="size-8 text-pr font-semibold text-[#FB8E0B]" />
          <p className='text-xl font-semibold text-[#FB8E0B]'>Home</p>
        </div>
      <main className="container h-screen mx-auto flex flex-col items-center justify-center gap-12">
    

        <header className="w-full text-center">
          <p className="text-xl font-semibold">Hi, Welcome Back! 👋</p>
        </header>

        {/* 🔹 Login Form */}
        <section>
          <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
            <input
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-[#FB8E0B] text-white py-2 rounded-sm hover:bg-[#db7e0d]" type="submit">
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
          <button onClick={handleGoogleLogin} className="w-4/5 flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4">
            <img className="size-6 mr-4" src="../assets/GoogleLogo.jpg" alt="Google logo" />
            <span className="w-1/2 text-sm font-semibold">Google</span>
          </button>



          {/* 🔹 Facebook Sign-In */}
          <button onClick={handleFacebookLogin} className="w-4/5 flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4">
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