import React, { useContext } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { AuthContext } from "../Context/AuthProvider";


function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <Header user={user} ></Header>
      <main className="mt-2 mx-auto container flex flex-col items-center justify-between gap-5 bg-white md:flex-row">
        <div className="flex w-full flex-col content-between p-10 md:w-1/2">
          <div>
            <p className="text-3xl font-bold sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
              Start chatting with customers, anytime, anywhere with Apex
            </p>
            <p className="mt-4 text-base sm:text-lg lg:text-xl">
              Great software that allows you to chat from any place at any time
              without any interruption.
            </p>
            <button className="mt-6 rounded-md bg-[#FB8E0B] px-4 py-3 text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
              Start Chatting Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-2 inline h-6 w-6 font-semibold"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="mt-5 flex flex-col gap-5 md:mt-14 md:flex-row md:items-center">
            <div className="reviewer">
              <img className="w-48 md:w-64" src="../assets/Reviewers.png" alt />
            </div>
            <div className="ratings">
              <svg
                className="size-20 sm:size-24 md:size-28 lg:size-32"
                width={135}
                height={69}
                viewBox="0 0 135 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_1260)">
                  <path
                    opacity="0.6"
                    d="M88.1938 62V50.8H91.8098C92.6844 50.8 93.3991 50.944 93.9538 51.232C94.5084 51.52 94.9191 51.9147 95.1858 52.416C95.4524 52.9173 95.5858 53.472 95.5858 54.08C95.5858 54.784 95.3938 55.4187 95.0098 55.984C94.6364 56.5493 94.0498 56.9493 93.2498 57.184L95.6978 62H94.1138L91.8418 57.376H91.7458H89.5378V62H88.1938ZM89.5378 56.32H91.7138C92.5778 56.32 93.2071 56.112 93.6018 55.696C93.9964 55.28 94.1938 54.7467 94.1938 54.096C94.1938 53.4347 93.9964 52.912 93.6018 52.528C93.2178 52.1333 92.5831 51.936 91.6978 51.936H89.5378V56.32ZM100.019 62.192C99.3581 62.192 98.8087 62.08 98.3714 61.856C97.9341 61.632 97.6087 61.3333 97.3954 60.96C97.1821 60.5867 97.0754 60.1813 97.0754 59.744C97.0754 58.9333 97.3847 58.3093 98.0034 57.872C98.6221 57.4347 99.4647 57.216 100.531 57.216H102.675V57.12C102.675 56.4267 102.494 55.904 102.131 55.552C101.769 55.1893 101.283 55.008 100.675 55.008C100.153 55.008 99.6994 55.1413 99.3154 55.408C98.9421 55.664 98.7074 56.0427 98.6114 56.544H97.2354C97.2887 55.968 97.4807 55.4827 97.8114 55.088C98.1527 54.6933 98.5741 54.3947 99.0754 54.192C99.5767 53.9787 100.11 53.872 100.675 53.872C101.785 53.872 102.617 54.1707 103.171 54.768C103.737 55.3547 104.019 56.1387 104.019 57.12V62H102.819L102.739 60.576C102.515 61.024 102.185 61.408 101.747 61.728C101.321 62.0373 100.745 62.192 100.019 62.192ZM100.227 61.056C100.739 61.056 101.177 60.9227 101.539 60.656C101.913 60.3893 102.195 60.0427 102.387 59.616C102.579 59.1893 102.675 58.7413 102.675 58.272V58.256H100.643C99.8541 58.256 99.2941 58.3947 98.9634 58.672C98.6434 58.9387 98.4834 59.2747 98.4834 59.68C98.4834 60.096 98.6327 60.432 98.9314 60.688C99.2407 60.9333 99.6727 61.056 100.227 61.056ZM108.953 62C108.228 62 107.657 61.824 107.241 61.472C106.825 61.12 106.617 60.4853 106.617 59.568V55.2H105.241V54.064H106.617L106.793 52.16H107.961V54.064H110.297V55.2H107.961V59.568C107.961 60.0693 108.062 60.4107 108.265 60.592C108.468 60.7627 108.825 60.848 109.337 60.848H110.169V62H108.953ZM112.82 52.304C112.554 52.304 112.33 52.2187 112.148 52.048C111.978 51.8667 111.892 51.6427 111.892 51.376C111.892 51.12 111.978 50.9067 112.148 50.736C112.33 50.5653 112.554 50.48 112.82 50.48C113.076 50.48 113.295 50.5653 113.476 50.736C113.658 50.9067 113.748 51.12 113.748 51.376C113.748 51.6427 113.658 51.8667 113.476 52.048C113.295 52.2187 113.076 52.304 112.82 52.304ZM112.148 62V54.064H113.492V62H112.148ZM115.833 62V54.064H117.049L117.129 55.488C117.385 54.9867 117.753 54.592 118.233 54.304C118.713 54.016 119.257 53.872 119.865 53.872C120.803 53.872 121.55 54.16 122.105 54.736C122.67 55.3013 122.953 56.176 122.953 57.36V62H121.609V57.504C121.609 55.8507 120.926 55.024 119.561 55.024C118.878 55.024 118.307 55.2747 117.849 55.776C117.401 56.2667 117.177 56.9707 117.177 57.888V62H115.833ZM128.125 59.504C127.677 59.504 127.266 59.4453 126.893 59.328L126.093 60.08C126.21 60.1653 126.354 60.24 126.525 60.304C126.706 60.3573 126.962 60.4107 127.293 60.464C127.623 60.5067 128.087 60.5547 128.685 60.608C129.751 60.6827 130.514 60.928 130.973 61.344C131.431 61.76 131.661 62.304 131.661 62.976C131.661 63.4347 131.533 63.872 131.277 64.288C131.031 64.704 130.647 65.0453 130.125 65.312C129.613 65.5787 128.951 65.712 128.141 65.712C127.426 65.712 126.791 65.616 126.237 65.424C125.682 65.2427 125.25 64.96 124.941 64.576C124.631 64.2027 124.477 63.728 124.477 63.152C124.477 62.8533 124.557 62.528 124.717 62.176C124.877 61.8347 125.175 61.5093 125.613 61.2C125.378 61.104 125.175 61.0027 125.005 60.896C124.845 60.7787 124.695 60.6507 124.557 60.512V60.144L125.917 58.8C125.287 58.2667 124.973 57.5627 124.973 56.688C124.973 56.1653 125.095 55.6907 125.341 55.264C125.586 54.8373 125.943 54.5013 126.413 54.256C126.882 54 127.453 53.872 128.125 53.872C128.583 53.872 128.999 53.936 129.373 54.064H132.301V55.072L130.813 55.136C131.122 55.584 131.277 56.1013 131.277 56.688C131.277 57.2107 131.149 57.6853 130.893 58.112C130.647 58.5387 130.29 58.88 129.821 59.136C129.362 59.3813 128.797 59.504 128.125 59.504ZM128.125 58.4C128.69 58.4 129.138 58.256 129.469 57.968C129.81 57.6693 129.981 57.2427 129.981 56.688C129.981 56.144 129.81 55.728 129.469 55.44C129.138 55.1413 128.69 54.992 128.125 54.992C127.549 54.992 127.09 55.1413 126.749 55.44C126.418 55.728 126.253 56.144 126.253 56.688C126.253 57.2427 126.418 57.6693 126.749 57.968C127.09 58.256 127.549 58.4 128.125 58.4ZM125.789 63.024C125.789 63.5573 126.013 63.952 126.461 64.208C126.909 64.4747 127.469 64.608 128.141 64.608C128.802 64.608 129.33 64.464 129.725 64.176C130.13 63.888 130.333 63.504 130.333 63.024C130.333 62.6827 130.194 62.384 129.917 62.128C129.639 61.8827 129.127 61.7387 128.381 61.696C127.794 61.6533 127.287 61.6 126.861 61.536C126.423 61.7707 126.135 62.0213 125.997 62.288C125.858 62.5653 125.789 62.8107 125.789 63.024Z"
                    fill="#383A47"
                  />
                  <g clipPath="url(#clip1_2_1260)">
                    <path
                      d="M12.3738 55.2334L8.62048 54.8926L7.13714 51.4198C7.02762 51.1647 6.77843 51 6.50107 51C6.22371 51 5.97442 51.1647 5.8656 51.4198L4.38226 54.8926L0.62834 55.2334C0.353159 55.2587 0.120139 55.4451 0.0340334 55.7079C-0.0515761 55.9712 0.0274862 56.26 0.235608 56.4425L3.07282 58.9303L2.23627 62.6148C2.17506 62.8857 2.28022 63.1659 2.505 63.3284C2.62583 63.4162 2.76778 63.46 2.91023 63.46C3.03265 63.46 3.15516 63.4275 3.26458 63.362L6.50107 61.4268L9.73697 63.362C9.97436 63.5038 10.2728 63.4909 10.4971 63.3284C10.7219 63.1659 10.8271 62.8857 10.7659 62.6148L9.92932 58.9303L12.7665 56.4425C12.9746 56.26 13.0537 55.9718 12.9681 55.7079C12.8825 55.4447 12.649 55.2583 12.3738 55.2334Z"
                      fill="#FFC947"
                    />
                    <path
                      d="M28.3758 55.2334L24.6224 54.8926L23.1391 51.4198C23.0296 51.1647 22.7804 51 22.503 51C22.2257 51 21.9764 51.1647 21.8676 51.4198L20.3842 54.8926L16.6303 55.2334C16.3551 55.2587 16.1221 55.4451 16.036 55.7079C15.9504 55.9712 16.0294 56.26 16.2376 56.4425L19.0748 58.9303L18.2382 62.6148C18.177 62.8857 18.2822 63.1659 18.507 63.3284C18.6278 63.4162 18.7697 63.46 18.9122 63.46C19.0346 63.46 19.1571 63.4275 19.2665 63.362L22.503 61.4268L25.7389 63.362C25.9763 63.5038 26.2748 63.4909 26.4991 63.3284C26.7239 63.1659 26.829 62.8857 26.7678 62.6148L25.9313 58.9303L28.7685 56.4425C28.9765 56.26 29.0557 55.9718 28.9701 55.7079C28.8845 55.4447 28.6509 55.2583 28.3758 55.2334Z"
                      fill="#FFC947"
                    />
                    <path
                      d="M44.3777 55.2334L40.6244 54.8926L39.141 51.4198C39.0315 51.1647 38.7823 51 38.505 51C38.2276 51 37.9783 51.1647 37.8695 51.4198L36.3862 54.8926L32.6322 55.2334C32.3571 55.2587 32.124 55.4451 32.0379 55.7079C31.9523 55.9712 32.0314 56.26 32.2395 56.4425L35.0767 58.9303L34.2402 62.6148C34.179 62.8857 34.2841 63.1659 34.5089 63.3284C34.6297 63.4162 34.7717 63.46 34.9141 63.46C35.0366 63.46 35.1591 63.4275 35.2685 63.362L38.505 61.4268L41.7409 63.362C41.9783 63.5038 42.2768 63.4909 42.501 63.3284C42.7258 63.1659 42.831 62.8857 42.7698 62.6148L41.9332 58.9303L44.7704 56.4425C44.9785 56.26 45.0576 55.9718 44.972 55.7079C44.8864 55.4447 44.6529 55.2583 44.3777 55.2334Z"
                      fill="#FFC947"
                    />
                    <path
                      d="M60.3797 55.2334L56.6263 54.8926L55.143 51.4198C55.0335 51.1647 54.7843 51 54.5069 51C54.2296 51 53.9803 51.1647 53.8715 51.4198L52.3881 54.8926L48.6342 55.2334C48.359 55.2587 48.126 55.4451 48.0399 55.7079C47.9543 55.9712 48.0333 56.26 48.2415 56.4425L51.0787 58.9303L50.2421 62.6148C50.1809 62.8857 50.2861 63.1659 50.5109 63.3284C50.6317 63.4162 50.7736 63.46 50.9161 63.46C51.0385 63.46 51.161 63.4275 51.2704 63.362L54.5069 61.4268L57.7428 63.362C57.9802 63.5038 58.2787 63.4909 58.503 63.3284C58.7278 63.1659 58.8329 62.8857 58.7717 62.6148L57.9352 58.9303L60.7724 56.4425C60.9804 56.26 61.0596 55.9718 60.974 55.7079C60.8884 55.4447 60.6548 55.2583 60.3797 55.2334Z"
                      fill="#FFC947"
                    />
                    <path
                      opacity="0.3"
                      d="M76.3816 55.2334L72.6283 54.8926L71.145 51.4198C71.0354 51.1647 70.7862 51 70.5089 51C70.2315 51 69.9822 51.1647 69.8734 51.4198L68.3901 54.8926L64.6362 55.2334C64.361 55.2587 64.128 55.4451 64.0418 55.7079C63.9562 55.9712 64.0353 56.26 64.2434 56.4425L67.0806 58.9303L66.2441 62.6148C66.1829 62.8857 66.288 63.1659 66.5128 63.3284C66.6336 63.4162 66.7756 63.46 66.918 63.46C67.0405 63.46 67.163 63.4275 67.2724 63.362L70.5089 61.4268L73.7448 63.362C73.9822 63.5038 74.2807 63.4909 74.505 63.3284C74.7297 63.1659 74.8349 62.8857 74.7737 62.6148L73.9371 58.9303L76.7743 56.4425C76.9824 56.26 77.0615 55.9718 76.9759 55.7079C76.8903 55.4447 76.6568 55.2583 76.3816 55.2334Z"
                      fill="#5B7486"
                    />
                  </g>
                  <path
                    d="M11.64 31V27.1H1.29V24.04L11.13 10H15.48V23.77H18.24V27.1H15.48V31H11.64ZM5.4 23.77H11.88V14.23L5.4 23.77ZM21.8188 31.21C21.1188 31.21 20.5388 30.99 20.0788 30.55C19.6388 30.11 19.4188 29.58 19.4188 28.96C19.4188 28.32 19.6388 27.78 20.0788 27.34C20.5388 26.9 21.1188 26.68 21.8188 26.68C22.5188 26.68 23.0888 26.9 23.5288 27.34C23.9888 27.78 24.2188 28.32 24.2188 28.96C24.2188 29.58 23.9888 30.11 23.5288 30.55C23.0888 30.99 22.5188 31.21 21.8188 31.21ZM33.8758 31.36C32.4358 31.36 31.1358 31.11 29.9758 30.61C28.8158 30.09 27.8858 29.36 27.1858 28.42C26.5058 27.48 26.1658 26.39 26.1658 25.15C26.1658 23.87 26.4958 22.75 27.1558 21.79C27.8358 20.83 28.7258 20.14 29.8258 19.72C28.8658 19.3 28.1058 18.7 27.5458 17.92C26.9858 17.12 26.7058 16.23 26.7058 15.25C26.7058 14.25 26.9758 13.33 27.5158 12.49C28.0558 11.63 28.8558 10.94 29.9158 10.42C30.9958 9.9 32.3158 9.64 33.8758 9.64C35.4358 9.64 36.7458 9.9 37.8058 10.42C38.8658 10.94 39.6658 11.63 40.2058 12.49C40.7458 13.33 41.0158 14.25 41.0158 15.25C41.0158 16.21 40.7258 17.1 40.1458 17.92C39.5858 18.72 38.8358 19.32 37.8958 19.72C39.0158 20.14 39.9058 20.83 40.5658 21.79C41.2258 22.75 41.5558 23.87 41.5558 25.15C41.5558 26.39 41.2158 27.48 40.5358 28.42C39.8558 29.36 38.9258 30.09 37.7458 30.61C36.5858 31.11 35.2958 31.36 33.8758 31.36ZM33.8758 18.58C34.9158 18.58 35.7358 18.31 36.3358 17.77C36.9358 17.23 37.2358 16.54 37.2358 15.7C37.2358 14.78 36.9358 14.06 36.3358 13.54C35.7558 13.02 34.9358 12.76 33.8758 12.76C32.7958 12.76 31.9658 13.02 31.3858 13.54C30.8058 14.06 30.5158 14.78 30.5158 15.7C30.5158 16.56 30.8058 17.26 31.3858 17.8C31.9858 18.32 32.8158 18.58 33.8758 18.58ZM33.8758 28.15C35.1558 28.15 36.1258 27.84 36.7858 27.22C37.4458 26.58 37.7758 25.78 37.7758 24.82C37.7758 23.76 37.4258 22.93 36.7258 22.33C36.0458 21.73 35.0958 21.43 33.8758 21.43C32.6558 21.43 31.6858 21.73 30.9658 22.33C30.2658 22.93 29.9158 23.76 29.9158 24.82C29.9158 25.78 30.2458 26.58 30.9058 27.22C31.5858 27.84 32.5758 28.15 33.8758 28.15ZM42.4849 34.33L49.9849 7.69H53.7349L46.2049 34.33H42.4849ZM62.0837 31.36C60.5437 31.36 59.2137 31.09 58.0937 30.55C56.9937 30.01 56.1237 29.27 55.4837 28.33C54.8637 27.37 54.5037 26.29 54.4037 25.09H58.1537C58.3337 25.95 58.7737 26.67 59.4737 27.25C60.1737 27.81 61.0437 28.09 62.0837 28.09C63.2037 28.09 64.1137 27.68 64.8137 26.86C65.5337 26.04 65.8937 25.02 65.8937 23.8C65.8937 22.54 65.5337 21.54 64.8137 20.8C64.1137 20.06 63.2237 19.69 62.1437 19.69C61.2437 19.69 60.4637 19.91 59.8037 20.35C59.1437 20.79 58.6737 21.34 58.3937 22H54.7037L56.5037 10H68.1437V13.36H59.3837L58.4237 18.22C58.8637 17.74 59.4637 17.35 60.2237 17.05C60.9837 16.73 61.8337 16.57 62.7737 16.57C64.2737 16.57 65.5237 16.91 66.5237 17.59C67.5237 18.25 68.2837 19.13 68.8037 20.23C69.3237 21.31 69.5837 22.49 69.5837 23.77C69.5837 25.23 69.2637 26.53 68.6237 27.67C68.0037 28.81 67.1237 29.71 65.9837 30.37C64.8637 31.03 63.5637 31.36 62.0837 31.36Z"
                    fill="#1B1C20"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_1260">
                    <rect width="135.01" height={69} fill="white" />
                  </clipPath>
                  <clipPath id="clip1_2_1260">
                    <rect
                      width="77.0099"
                      height="12.46"
                      fill="white"
                      transform="translate(0 51)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 md:max-w-4xl">
          <img src="../assets/Smiling-African.jpg" alt />
        </div>
      </main>

      <main className="features  mx-auto container bg-[#F8F8FA] ">
        <p className="py-20 text-center text-2xl font-semibold bg-white">
          Features for a better experience
        </p>
        <div className="flex mx-auto container w-full flex-col items-center gap-10 pb-20 bg-white md:flex-row md:justify-center md:gap-10 md:px-20">
          {/* camera */}
          <div className="md: flex flex-col items-center gap-5 md:flex-row">
            <div>
              <svg
                className="size-12"
                width={60}
                height={60}
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_1178)">
                  <circle opacity="0.2" cx={30} cy={30} r={30} fill="#FD6003" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 37C18.4696 37 17.9609 36.7893 17.5858 36.4142C17.2107 36.0391 17 35.5304 17 35V25C17 24.4696 17.2107 23.9609 17.5858 23.5858C17.9609 23.2107 18.4696 23 19 23H32C32.5304 23 33.0391 23.2107 33.4142 23.5858C33.7893 23.9609 34 24.4696 34 25V35C34 35.5304 33.7893 36.0391 33.4142 36.4142C33.0391 36.7893 32.5304 37 32 37H19ZM36 33L40.445 35.964C40.5957 36.0645 40.7708 36.1222 40.9517 36.131C41.1326 36.1397 41.3125 36.0992 41.4722 36.0136C41.6319 35.9281 41.7653 35.8008 41.8583 35.6454C41.9512 35.4899 42.0002 35.3121 42 35.131V24.869C42 24.688 41.9509 24.5103 41.8579 24.355C41.7648 24.1997 41.6314 24.0725 41.4718 23.9871C41.3121 23.9017 41.1323 23.8612 40.9515 23.87C40.7707 23.8788 40.5956 23.9365 40.445 24.037L36 27V33Z"
                    fill="#FD6003"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_1178">
                    <rect width={60} height={60} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-5">
              <p className="text-center font-medium">Video Messaging</p>
              <p className="line-clamp-2 px-8 text-center">
                This software is very easy for you to manage. You can use it as
                you wish.
              </p>
            </div>
          </div>
          {/* clock */}
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <div>
              <svg
                className="size-12"
                width={60}
                height={60}
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_1201)">
                  <circle opacity="0.2" cx={30} cy={30} r={30} fill="#4DA44E" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.4671 22.8962C32.0359 22.8962 32.4152 22.517 32.4152 21.9481C32.4152 21.3792 32.0359 21 31.4671 21H27.6747C27.1058 21 26.7266 21.3792 26.7266 21.9481C26.7266 22.517 27.1058 22.8962 27.6747 22.8962H31.4671ZM36.3972 25.9301C36.7765 25.5509 36.7765 24.982 36.3972 24.6028C36.018 24.2236 35.4491 24.2236 35.0699 24.6028L34.2166 25.4561C31.4671 23.2754 27.6747 23.2754 24.9252 25.4561L24.0719 24.6028C23.6926 24.2236 23.1238 24.2236 22.7445 24.6028C22.3653 24.982 22.3653 25.5509 22.7445 25.9301L23.5978 26.7834C21.0379 30.1018 21.6068 34.8423 24.9252 37.4022C28.2435 39.9621 32.984 39.3932 35.5439 36.0748C37.7246 33.3253 37.7246 29.5329 35.5439 26.7834L36.3972 25.9301ZM29.5709 33.3253C28.528 33.3253 27.6747 32.472 27.6747 31.4291C27.6747 30.7655 28.0539 30.1018 28.6228 29.8174V27.6367C28.6228 27.0679 29.002 26.6886 29.5709 26.6886C30.1397 26.6886 30.519 27.0679 30.519 27.6367V29.8174C31.4671 30.2914 31.7515 31.4291 31.1826 32.3772C30.8034 32.9461 30.2345 33.3253 29.5709 33.3253Z"
                    fill="#4DA44E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_1201">
                    <rect width={60} height={60} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex gap-5 flex-col items-center ">
              <p className="text-center font-medium">Save your time</p>
              <p className="line-clamp-2 px-8 text-center">
                This software is very easy for you to manage. You can use it as
                you wish.
              </p>
            </div>
          </div>
          {/* pad lock */}
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <div>
              <svg
                className="size-12"
                width={60}
                height={60}
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_1189)">
                  <circle opacity="0.2" cx={30} cy={30} r={30} fill="#FB8E0B" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.9862 28.685L39 26C36.4913 24.1175 33.375 23 30 23C26.625 23 23.5087 24.1175 21 26L30 38L32.625 34.5012V32.375C32.625 30.305 34.305 28.625 36.375 28.625C36.585 28.625 36.7837 28.655 36.9862 28.685ZM38.25 32.375C38.25 31.34 37.41 30.5 36.375 30.5C35.34 30.5 34.5 31.34 34.5 32.375V33.5C34.0875 33.5 33.75 33.8375 33.75 34.25V37.25C33.75 37.6625 34.0875 38 34.5 38H38.25C38.6625 38 39 37.6625 39 37.25V34.25C39 33.8375 38.6625 33.5 38.25 33.5V32.375ZM35.25 33.5V32.375C35.25 31.7525 35.7525 31.25 36.375 31.25C36.9975 31.25 37.5 31.7525 37.5 32.375V33.5H35.25Z"
                    fill="#FB8E0B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_1189">
                    <rect width={60} height={60} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-5">
              <p className="text-center font-medium">Keep safe &amp; private</p>
              <p className="line-clamp-2 px-8 text-center">
                This software is very easy for you to manage. You can use it as
                you wish.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col bg-[#F8F8FA] py-8 md:flex-row md:gap-10 md:px-10">
          {/* Image Section */}
          <img
            className="mx-auto w-4/5 max-w-sm md:w-1/2 md:max-w-md"
            src="../assets/woman-with-video-call.png"

          />
          {/* Text Section */}
          <div className="flex w-full flex-col items-center gap-5 md:w-1/2 md:items-start">
            <p className="px-8 py-5 text-center text-xl font-semibold md:text-left md:text-2xl">
              Meet your customers, with live video chat
            </p>
            <div className="flex w-full flex-col gap-5">
              <p className="line-clamp-3 px-8 text-left">
                Proin faucibus nibh et sagittis a. Lacinia purus ac amet
                pellentesque aliquam enim.
              </p>
              <p className="line-clamp-3 px-8 text-left">
                Get paychecks up to two days early. Get a $20 bonus when you
                receive qualifying direct deposits.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full bg-white flex-col py-8 md:flex-row-reverse md:gap-10 md:px-10">
          {/* Image Section */}
          <img
            className="mx-auto w-4/5 max-w-sm md:w-1/2 md:max-w-md"
            src="../assets/chat-demo.png"

          />
          {/* Text Section */}
          <div className="flex w-full flex-col items-center gap-5 md:w-1/2 md:items-start">
            <p className="px-8 py-5 text-center text-xl font-semibold md:text-left md:text-2xl">
              Start selling directly inside conversations
            </p>
            <div className="flex flex-col gap-10">
              <p className="line-clamp-4 px-8 text-left md:text-left">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered all injected humour or randomised
                words which don't look even slightly believable.
              </p>
              <button className="mt-6 self-center rounded-md bg-[#FB8E0B] px-3 py-3 text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
                Start Chatting Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-2 inline h-6 w-6 font-semibold"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
      <main className="bg-[#FB8E0B] py-10 mx-auto container">
        <div className="w-full">
          <p className="px-6 pb-8 text-center text-2xl font-bold text-white">
            Our blessed client said this about us 😍
          </p>
          <div className="flex flex-col items-center md:flex-row md:justify-around">
            <div className="w-3/4 md:w-1/3">
              <div className="flex flex-col gap-4 rounded-md bg-white p-6">
                <p className="text-center font-semibold text-[#FD6003]">
                  “Incredible Experience”
                </p>
                <p className="text-center font-light text-[#383A47]">
                  We had an incredible experience working with Mixland and were
                  impressed they made such a big difference in only three weeks.
                  Our team is so grateful for the wonderful improvements they
                  made and their ability to get familiar with the concept so
                  quickly.
                </p>
              </div>
              <div className="mt-6 flex flex-row justify-center">
                <img className="w-16" src="../assets/african-woman.png" />
                <div className="flex flex-col justify-evenly pl-4">
                  <p className="font-medium text-white">Wade Warren</p>
                  <p className="font-light text-white">CEO of ABC Coporation</p>
                </div>
              </div>
            </div>
            <div className="mt-8 w-3/4 md:mt-0 md:w-1/3">
              <div className="flex flex-col gap-4 rounded-md bg-white p-6">
                <p className="text-center font-semibold text-[#FD6003]">
                  “Dependable, Responsive, Professional”
                </p>
                <p className="text-center font-light text-[#383A47]">
                  Fermin Apps has collaborated with Mixland team for several
                  projects such as Photo Sharing Apps and Custom Social
                  Networking Apps. The experience has been pleasant,
                  professional and exceeding our expectations. The team is
                  always thinking beyond.
                </p>
              </div>
              <div className="mt-6 flex flex-row justify-center">
                <img className="w-16" src="../assets/sitting-woman.png" />
                <div className="flex flex-col justify-evenly pl-4">
                  <p className="font-medium text-white">Esward Howard</p>
                  <p className="font-light text-white">Founder of CHAMELLIA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div >
  );
}

export default Home;
