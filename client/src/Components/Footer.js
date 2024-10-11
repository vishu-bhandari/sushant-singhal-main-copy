import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto ">
        <div className="isolate bg-white px-6 lg:px-8">
          <div
            className="absolute inset-x-0 top-[2rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-25rem] "
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#F97316] to-[#54D6BB] opacity-40 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        <div className="px-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 ">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <svg
                  className="w-8 text-deep-purple-accent-400"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect
                    x="3"
                    y="1"
                    width="7"
                    height="12"
                    className="text-tertiary"
                  ></rect>
                  <rect
                    x="3"
                    y="17"
                    width="7"
                    height="6"
                    className="text-primary"
                  ></rect>
                  <rect
                    x="14"
                    y="1"
                    width="7"
                    height="6"
                    className="text-primary"
                  ></rect>
                  <rect
                    x="14"
                    y="11"
                    width="7"
                    height="12"
                    className="text-secondary"
                  ></rect>
                </svg>
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                  <span className="sm:text-2xl  text-xl ">S</span>ushant{" "}
                  <span className="sm:text-2xl text-xl ">S</span>inghal
                  <hr className="border w-1/3 border-secondary opacity" />
                  <hr className="border w-1/4 border-tertiary opacity mt-0.5" />
                  <hr className="border w-1/5 border-primary opacity mt-0.5" />
                </span>
              </a>
              <div className="mt-6 lg:max-w-sm">
                <p className="text-sm text-gray-800">
                  As a passionate public speaker, I empower individuals through
                  engaging presentations.
                </p>
                <p className="mt-4 text-sm text-gray-800">
                  My goal is to enhance your speaking skills, boost confidence,
                  and help you connect effectively with your audience.
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide text-gray-900">
                Contacts
              </p>
              <div className="flex">
                <p className="mr-1 text-gray-800">Phone:</p>
                <div className="">
                  <a
                    href="tel:9910654407"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    9910654407 &nbsp;
                  </a>

                  <a
                    href="tel:9266046791"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    9266046791
                  </a>
                </div>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <a
                  href="mailto:sushant.publicspeaker@gmail.com"
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 "
                >
                  sushant.publicspeaker@gmail.com
                </a>
              </div>
              <div className=" ">
                <p className="mr-1 text-gray-800 font-bold">Quick Links</p>

                <div className="flex flex-col  mt-2">
                  <Link to="/contact">Contact Us</Link>
                  <Link to="/service">Services</Link>
                  <Link to="/gallary">Gallery</Link>
                </div>
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-wide text-gray-900">
                Social
              </span>
              <div className="flex items-center mt-1 space-x-3">
                <a
                  href="https://youtube.com/@sushanttalks1049?si=Pm3QbKE7i8IolD94"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.instagram.com/coach_sushantsinghal?igsh=cjc2b2poOXVycHl4"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaInstagram/>
                </a>
                <a
                  href="https://www.linkedin.com/in/sushant-singhal-3355a1134?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/p/Sushant-Talks-100064134663217/"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                 <FaFacebook />
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Follow me on social media for the latest updates and tips on
                public speaking.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-gray-600">
              © Copyright {year} Inc. All rights reserved.
            </p>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <li>
                <Link
                  to="/AdminLogin"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="/LegalTerms"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/LegalTerms"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
