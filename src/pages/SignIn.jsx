import React from 'react'
import Footer from '../layout/Footer'
import { app } from '../firebase/config';

function SignIn() {

  console.log(app);
  return (
    <div>
      <main className="container h-screen mx-auto flex flex-col items-center justify-center gap-12">
        <header className="w-full text-center">
          <p className="text-xl font-semibold">Hi, Welcome Back! 👋</p>
        </header>
        <section>
          <form action className="flex flex-col gap-4">
            <input className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#FB8E0B]" type="email" placeholder="Enter Your Email" />
            <input className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#FB8E0B]" type="password" placeholder="Enter Your Password" />
            <button className="w-full bg-[#FB8E0B] text-white py-2 rounded-sm hover:bg-[#db7e0d]" type="submit">Log In</button>
            <div className="w-full flex justify-between items-center">
              <div className="flex justify-center gap-2">
                <input type="checkbox" name id="remember-user" />
                <label className="text-sm font-semibold" htmlFor="remember-user">Remember Me</label>
              </div>
              <a className="text-sm font-light text-blue-600" href>Forgot password?</a>
            </div>
          </form>
        </section>
        <section className="flex flex-col items-center justify-center gap-4">
          <div className="w-full flex items-center justify-center">
            <div className="h-[1px] bg-gray-400 w-full" />
            <span className="mx-4 text-light whitespace-nowrap">Or With</span>
            <div className="h-[1px] bg-gray-400 w-full" />
          </div>
          <div className="w-full flex flex-row items-center justify-between border-solid border-[1px] rounded-lg border-gray-300 py-2 px-4">
            <div className="w-[20%]">
              <img className="size-6 mr-8" src="../assets/GoogleLogo.jpg" alt="logo.png" />
            </div>
            <p className="w-full text-center text-sm font-semibold">Log in with Google</p>
          </div>
          <p>Don't have an account? <a className="text-blue-600" href="./sign-up.html">Sign Up</a></p>
        </section>
      </main>


      <Footer></Footer>
    </div>


  );
}

export default SignIn;