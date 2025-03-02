import React from "react";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Contact() {
  return (
    <div className="w-full flex flex-col items-center justify-between gap-12">
      <Header />

      <main className="container mx-auto flex flex-col gap-12 min-h-screen items-center justify-center ">
        {/* Title */}
        <div className="w-full flex flex-col items-center gap-4">
          <p className="font-semibold text-4xl lg:text-5xl">Contact Us!</p>
          <p className="text-center text-lg font-extralight text-wrap px-28">
            We’d love to hear from you! If you have any feedback, questions, or
            suggestions about the Pi Day website, feel free to reach out.
          </p>
          <p className="text-center  text-lg  font-medium text-wrap px-28">
            {" "}
            Your input helps us improve the experience for everyone
          </p>
        </div>

        <div className=" w-3/4 lg:w-1/2 flex flex-col md:flex-row items-center justify-center gap-18 rounded-md border-0 lg:border-[1px] md:border-gray-200 bg-white py-8 md:shadow-lg">
          {/* Left Side: Form */}
          <div className="flex flex-col items-center justify-center gap-12 w-4/5 lg:w-3/4 min-h-[400px]">
            <header className="text-center">
              <p className="text-2xl font-light -mb-96">Contact Form</p>
            </header>

            <section className="w-full">
              <form className="flex flex-col items-center gap-4">
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]"
                  type="email"
                  placeholder="Email"
                />
                <textarea
                  className="w-full rounded-lg border  resize-none border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]"
                  placeholder="Write your message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>

                <button
                  className="w-1/2 rounded-lg bg-[#FB8E0B] py-2 text-white hover:bg-[#886fc7] text-lg font-medium"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
