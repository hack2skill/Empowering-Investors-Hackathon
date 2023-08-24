import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <div className="">
        <div className="py-4 bg-black sm:py-6">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="shrink-0">
                <a href="#" title="" className="flex">
                  <img className="w-auto h-14" src="/logofull.png" alt="" />
                </a>
              </div>
              <div className="shrink-0"></div>
            </div>
          </div>
        </div>
        <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative w-full flex justify-between gap-9 items-center">
              <div className="lg:w-2/3">
                <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-6xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500">
                    Your WhatsApp{" "}
                  </span>{" "}
                  <br></br>
                  Invest Guide.{" "}
                </h1>
                <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
                  Scan the QR code and start chat with our AI Whatsapp Bot{" "}
                </p>
                <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-white to-green-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                  <Link
                    href="#"
                    title=""
                    className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
                    role="button"
                  >
Scan Now                  </Link>
                </div>

                <div>
                  <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="1.5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17"
                        stroke="url(#a)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="a"
                          x1="3"
                          y1="7.00003"
                          x2="22.2956"
                          y2="12.0274"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" />
                          <stop offset="100%" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex justify-center items-center md:absolute md:mt-0 -md:top-0 lg:top-0 md:right-0">
                <img
                  className="w-[75%] scale-75 -mt-16 max-w-xs mx-auto lg:max-w-lg xl:max-w-xl"
                  src="/bgn.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
