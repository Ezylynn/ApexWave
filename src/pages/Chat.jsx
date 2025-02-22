import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function Chat() {
  return (
    <div>
      <main className="container mx-auto h-screen md:shadow-xl md:flex md:justify-center">
        {/* add user */}
        <div
          id="add-box"
          className="mx-auto mt-40 absolute left-1/2 transform -translate-x-1/2 add-box bg-white shadow-2xl rounded-lg w-[90%] sm:w-[400px] p-6 hidden z-1000"
        >
          {/* Close Button */}
          <button
            id="close-btn"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="size-10 pr-4"
              aria-colspan
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* Content */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-center">Add a User</h2>
            <input
              type="text"
              id="username-input"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#FB8E0B]"
              placeholder="Enter username"
            />
            <button
              id="submit-btn"
              className="w-full bg-[#FB8E0B] text-white py-2 rounded-lg hover:bg-[#db7e0d]"
            >
              Add User
            </button>
          </div>
        </div>
        {/* contact */}
        <section
          id="contact-list"
          className="mx-auto hidden h-screen w-full flex-col items-center shadow-md md:flex md:w-[30%]"
        >
          <nav className="flex max-h-12 w-full flex-row items-center justify-between bg-[#FB8E0B] py-4 shadow-md">
            <p className="pl-4 text-center text-lg font-semibold text-white">
              Contacts
            </p>
            <svg
              id="x-button"
              className="size-10 pr-4 text-white"
              aria-colspan
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </nav>
          <section className="flex w-full justify-center">
            <div className="flex w-[90%] flex-col gap-6 overflow-y-auto py-6 max-h-[90vh]">
              <div className="flex flex-col gap-2 rounded-lg bg-slate-100 p-4">
                <p className="text-lg font-semibold">Nguyen Vuong Binh (Ezy)</p>
                <p className="line-clamp-1 text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis possimus cum quis nisi neque eum, eos, hic facere
                  cumque saepe ex quidem quia qui, quod suscipit explicabo
                  quaerat magnam illum.
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-lg bg-slate-100 p-4">
                <p className="text-lg font-semibold">Nguyen Vuong Binh (Ezy)</p>
                <p className="line-clamp-1 text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis possimus cum quis nisi neque eum, eos, hic facere
                  cumque saepe ex quidem quia qui, quod suscipit explicabo
                  quaerat magnam illum.
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-lg bg-slate-100 p-4">
                <p className="text-lg font-semibold">Nguyen Vuong Binh (Ezy)</p>
                <p className="line-clamp-1 text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis possimus cum quis nisi neque eum, eos, hic facere
                  cumque saepe ex quidem quia qui, quod suscipit explicabo
                  quaerat magnam illum.
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-lg bg-slate-100 p-4">
                <p className="text-lg font-semibold">Nguyen Vuong Binh (Ezy)</p>
                <p className="line-clamp-1 text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis possimus cum quis nisi neque eum, eos, hic facere
                  cumque saepe ex quidem quia qui, quod suscipit explicabo
                  quaerat magnam illum.
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-lg bg-slate-100 p-4">
                <p className="text-lg font-semibold">Nguyen Vuong Binh (Ezy)</p>
                <p className="line-clamp-1 text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis possimus cum quis nisi neque eum, eos, hic facere
                  cumque saepe ex quidem quia qui, quod suscipit explicabo
                  quaerat magnam illum.
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-lg bg-slate-100 p-4">
                <p className="text-lg font-semibold">Nguyen Vuong Binh (Ezy)</p>
                <p className="line-clamp-1 text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis possimus cum quis nisi neque eum, eos, hic facere
                  cumque saepe ex quidem quia qui, quod suscipit explicabo
                  quaerat magnam illum.
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-lg bg-slate-100 p-4">
                <p className="text-lg font-semibold">Nguyen Vuong Binh (Ezy)</p>
                <p className="line-clamp-1 text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis possimus cum quis nisi neque eum, eos, hic facere
                  cumque saepe ex quidem quia qui, quod suscipit explicabo
                  quaerat magnam illum.
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-lg bg-slate-100 p-4">
                <p className="text-lg font-semibold">Nguyen Vuong Binh (Ezy)</p>
                <p className="line-clamp-1 text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis possimus cum quis nisi neque eum, eos, hic facere
                  cumque saepe ex quidem quia qui, quod suscipit explicabo
                  quaerat magnam illum.
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-lg bg-slate-100 p-4">
                <p className="text-lg font-semibold">Nguyen Vuong Binh (Ezy)</p>
                <p className="line-clamp-1 text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis possimus cum quis nisi neque eum, eos, hic facere
                  cumque saepe ex quidem quia qui, quod suscipit explicabo
                  quaerat magnam illum.
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-lg bg-slate-100 p-4">
                <p className="text-lg font-semibold">Nguyen Vuong Binh (Ezy)</p>
                <p className="line-clamp-1 text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis possimus cum quis nisi neque eum, eos, hic facere
                  cumque saepe ex quidem quia qui, quod suscipit explicabo
                  quaerat magnam illum.
                </p>
              </div>
            </div>
          </section>
        </section>
        {/* chat message main */}
        <section id="chat-box" className="w-full md:block">
          {/* nav bar */}
          <nav className="container fixed flex w-full flex-col items-center bg-white md:static z-10">
            <div className="flex max-h-12 w-full flex-row items-center justify-between px-4 py-8">
              <div className="logo">
                <svg
                  className="size-16"
                  viewBox="0 0 95 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.0611 29.4442H30.2281L19.2314 0.466553H14.1789L3.21942 29.4442H9.38646L11.727 23.0171H21.6834L24.0611 29.4442ZM19.7144 17.5931H13.696L16.7052 9.38276L19.7144 17.5931ZM51.0245 15.0297C50.4672 13.7666 49.7242 12.652 48.7583 11.649C47.7552 10.683 46.6407 9.94001 45.3775 9.38275C44.0773 8.82549 42.7027 8.56543 41.2538 8.56543C39.8421 8.56543 38.4303 8.82549 37.1301 9.38275C35.8669 9.94001 34.7524 10.683 33.7493 11.649C32.7834 12.6149 32.0404 13.7666 31.4831 15.0297C30.963 16.33 30.6658 17.7045 30.6658 19.1534V34.9425L36.2384 36.8001V28.4783C36.5356 28.6269 36.8328 28.7755 37.1301 28.887C38.4303 29.4442 39.8421 29.7414 41.2538 29.7414C42.6655 29.7414 44.0773 29.4442 45.3775 28.887C46.6407 28.3668 47.7552 27.6238 48.7583 26.6208C49.7242 25.6548 50.4672 24.5403 51.0245 23.2772C51.5817 21.9769 51.8418 20.5652 51.8418 19.1534C51.8418 17.7045 51.5817 16.33 51.0245 15.0297ZM41.2538 24.1688C38.5046 24.1688 36.2384 21.9026 36.2384 19.1534C36.2384 16.4043 38.5046 14.1381 41.2538 14.1381C44.003 14.1381 46.2692 16.4043 46.2692 19.1534C46.2692 21.9026 44.003 24.1688 41.2538 24.1688ZM66.6011 28.7012C65.2637 29.2956 63.852 29.5929 62.4031 29.5929C59.5796 29.5929 56.9791 28.4783 54.9729 26.5093C53.0039 24.5403 51.9265 21.9026 51.9265 19.1163C51.9265 16.33 53.0039 13.6923 54.9729 11.7233C56.9791 9.75429 59.5796 8.63976 62.4031 8.63976C65.1894 8.63976 67.8271 9.75429 69.7961 11.7233C71.7651 13.6923 72.8425 16.33 72.8425 19.1163V21.8283H58.0936C58.9852 23.2401 60.5827 24.206 62.4031 24.206C63.8148 24.206 65.1151 23.6487 66.081 22.6085L70.019 26.3236C69.0531 27.3267 67.9014 28.144 66.6011 28.7012ZM62.4031 14.0266C60.5827 14.0266 58.9852 14.9926 58.0936 16.4414H66.7126C65.7838 14.9926 64.1863 14.0266 62.4031 14.0266Z"
                    fill="#FB8E0B"
                  />
                  <path
                    d="M85.483 29.4443H92.0959L84.5543 19.042L92.0216 8.75122H85.2973L81.1735 14.5096L77.1241 8.75122H70.2883L77.83 19.0049L70.3255 29.4443H76.9012L81.2107 23.723L85.483 29.4443Z"
                    fill="#FD6003"
                  />
                </svg>
              </div>
              <div className="flex flex-row items-center justify-center gap-6">
                <p id="contact">Contact</p>
                <i
                  id="add-button"
                  className="bx bx-message-square-add text-2xl"
                />
              </div>
            </div>
            <section className="item-center mx-auto flex w-full flex-row justify-start bg-[#FB8E0B] px-6 py-4">
              <p className="font-semibold text-white">
                Chat with <span>Binh</span>
              </p>
            </section>
          </nav>
          <section className="flex w-full flex-col md:h-4/5">
            {/* Messages Area */}
            <div className="flex w-full flex-1 flex-col items-center justify-start gap-4 overflow-y-auto p-4 pb-24 pt-36 md:pb-4 md:pt-4">
              <p className="max-w-[70%] self-end rounded-md bg-orange-300 px-4 py-4 text-sm leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="max-w-[70%] self-end rounded-md bg-orange-300 px-4 py-4 text-sm leading-5">
                Tempora amet sunt ut repellendus incidunt accusamus molestiae
                fugiat debitis natus totam fugit maiores eligendi sequi culpa
                maxime est laboriosam, praesentium animi.
              </p>
              <p className="max-w-[70%] self-start rounded-md bg-blue-300 px-4 py-4 text-sm leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                nostrum explicabo, eius aspernatur nesciunt eveniet facere alias
                quod consectetur dicta, neque inventore porro adipisci!
              </p>
              <p className="max-w-[70%] self-start rounded-md bg-blue-300 px-4 py-4 text-sm leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                nostrum explicabo, eius aspernatur nesciunt eveniet facere alias
                quod consectetur dicta, neque inventore porro adipisci! Rem
                consectetur qui iure porro hic? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat, voluptatum iure dicta
                aliquid, soluta nobis vero odio facilis, quaerat unde laboriosam
                labore. Accusantium itaque ipsa alias maiores nesciunt
                exercitationem dolorem.
              </p>
              <p className="max-w-[70%] self-end rounded-md bg-orange-300 px-4 py-4 text-sm leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet sunt ut repellendus incidunt accusamus molestiae fugiat
                debitis natus totam fugit maiores eligendi sequi culpa maxime
                est laboriosam, praesentium animi.
              </p>
              <p className="max-w-[70%] self-end rounded-md bg-orange-300 px-4 py-4 text-sm leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet sunt ut repellendus incidunt accusamus molestiae fugiat
                debitis natus totam fugit maiores eligendi sequi culpa maxime
                est laboriosam, praesentium animi.
              </p>
              <p className="max-w-[70%] self-start rounded-md bg-blue-300 px-4 py-4 text-sm leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                nostrum explicabo, eius aspernatur nesciunt eveniet facere alias
                quod consectetur dicta, neque inventore porro adipisci! Rem
                consectetur qui iure porro hic? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat, voluptatum iure dicta
                aliquid, soluta nobis vero odio facilis, quaerat unde laboriosam
                labore. Accusantium itaque ipsa alias maiores nesciunt
                exercitationem dolorem.
              </p>
            </div>
            {/* Input Field */}
            <div className="container fixed bottom-0 mx-auto flex w-full items-center gap-4 bg-gray-200 p-4 md:static">
              <input
                className="flex-1 rounded-lg border p-2 bg-white focus:outline-none focus:ring focus:ring-orange-300"
                type="text"
                placeholder="Write a message"
              />
              <button className="rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
                Send
              </button>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Chat;
