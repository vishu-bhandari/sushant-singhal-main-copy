import React from 'react'
import { Link } from 'react-router-dom'

function Onebanner() {
  return (
    <>
 <section className="mt-12 lg:mt-24 relative isolate overflow-hidden  lg:overflow-visible  w-full 2xl:max-w-7xl  m-auto h-full">
        <div className=" bg-teal-500 mb-20 ">
          <div className="relative py-20   ">
            <div aria-hidden="true" className="hidden sm:block">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-teal-600 rounded-r-3xl"></div>
              <svg
                className="absolute top-8 left-1/2 -ml-3"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    ></rect>
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
                ></rect>
              </svg>
            </div>
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="relative rounded-2xl px-6 py-10 bg-orange-500 overflow-hidden shadow-xl sm:px-12 sm:py-20 ">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                  >
                    <path
                      className="text-orange-600 text-opacity-40 "
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                    ></path>
                    <path
                      className="text-orange-800 text-opacity-40"
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                    ></path>
                  </svg>
                </div>
                <div className="relative flex flex-col">
                  <div className="sm:text-center">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                      {" "}
                      🔥 Join Empower You Today
                    </h2>
                    <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-100">
                      {" "}
                      Where Your Success Story Begins! 🔥

                    </p>
                  </div>
                  <Link
                    to="/PaymentPage"
                    className="w-auto inline-block mt-5 mx-auto rounded-md border border-transparent px-5 py-3 bg-teal-600 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                  >
                    Get started →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Onebanner