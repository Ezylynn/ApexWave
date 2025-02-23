import React from "react";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
import {ArrowLongLeftIcon} from '@heroicons/react/24/solid' 


function SignUp() {
   const navigate = useNavigate()

  return (
    <div>
      <div onClick={() => navigate('/')} className="absolute top-3 left-3 md:top-6 md:left-6 flex items-center gap-2">
          <ArrowLongLeftIcon className="size-8 text-pr font-semibold text-[#FB8E0B]" />
          <p className='text-xl font-semibold text-[#FB8E0B]'>Home</p>
      </div>

      <main className="container mx-auto flex h-screen items-center justify-center ">
        <div className="flex items-center justify-center gap-8 p-10 rounded-md border-[1px] border-gray-200">
          <div className="flex h-24 flex-col items-center justify-center gap-10">
            <header className="w-full text-center">
              <p className="text-xl font-semibold">Create an account</p>
              <p className="text-sm font-light">
                Connect with your friends today!
              </p>
            </header>
            <section>
              <form action className="flex flex-col gap-4">
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
                  type="text"
                  placeholder="Enter Your Username"
                />
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
                  type="password"
                  placeholder="Create a Password"
                />
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#FB8E0B]"
                  type="password"
                  placeholder="Confirm Password"
                />
                <button
                  className="w-full rounded-sm bg-[#FB8E0B] py-2 text-white hover:bg-[#db7e0d]"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
            </section>
            <section className="flex flex-col items-center justify-center gap-4">
              <div className="flex w-full items-center justify-center">
                <div className="h-[1px] w-full bg-gray-400" />
                <span className="text-light mx-4 whitespace-nowrap">
                  Or With
                </span>
                <div className="h-[1px] w-full bg-gray-400" />
              </div>
              <div className="flex w-full flex-row items-center justify-between rounded-lg border-[1px] border-solid border-gray-300 px-4 py-2">
                <div className="w-[20%]">
                  <img
                    className="mr-8 size-6"
                    src="../assets/GoogleLogo.jpg"
                    alt="logo.png"
                  />
                </div>
                <p className="w-full text-center text-sm font-semibold">
                  Sign Up with Google
                </p>
              </div>
              <p>
                Already have an account?
                <a className="text-blue-600" href="./sign-in.html">
                  Login
                </a>
              </p>
            </section>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center">
            <img
              className="max-h-[500px] max-w-[500px] flex-none object-contain"
              src="../assets/dino-reichmuth-A5rCN8626Ck-unsplash 1.png"
              alt
            />
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default SignUp;
