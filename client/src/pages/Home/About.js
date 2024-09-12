import React from "react";
import { useSelector } from "react-redux";

import BannerImage from "../../images/Banner-img.png";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  if (!portfolioData || !portfolioData.aboutme) {
    return <div>...</div>;
  }
  const { aboutme } = portfolioData;
  const { about, heading1, content1, heading2, content2, heading3, content3 } =
    aboutme;

  const renderContentWithLineBreaks = (content) => {
    return content.split("\n").map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-20 sm:py-32 lg:overflow-visible lg:px-0 max-w-7xl m-auto  ">
        <div className="mb-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10  ">
          <h1 className="text-black text-6xl lg:px-8  px-0 ">
            About <span className="font-semibold  ">Us</span>
            <hr className="border-2 w-1/3 border-secondary opacity" />
            <hr className="border-2 w-1/4 border-tertiary opacity mt-1" />
            <hr className="border-2 w-1/5 border-primary opacity mt-1" />
          </h1>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10  ">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                  MEET THE <span className="font-semibold ">TRAINER</span>
                </h1>
                <p className="mt-6 text-xl leading-normal text-gray-700">
                  {about}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:-ml-12 lg:-mt-12 lg:p-12 p-0 -ml-0 -mt-0 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img src={BannerImage} alt="" className="rounded-xl " />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p className=" text-xl leading-normal font-semibold text-primary">
                  Sushant's Achievements and Expertise:
                </p>
                <ul className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="mt-1 h-5 w-5 flex-none text-secondary "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>

                    <span>
                      <strong className="font-semibold text-gray-900">
                        {heading1}
                      </strong>{" "}
                      <ul className="list-disc list-inside ">
                        {renderContentWithLineBreaks(content1)}
                      </ul>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mt-1 h-5 w-5 flex-none text-tertiary "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>

                    <span>
                      <strong className="font-semibold text-gray-900">
                        {heading2}
                      </strong>{" "}
                      <ul className="list-disc list-inside ">
                        {renderContentWithLineBreaks(content2)}
                      </ul>
                    </span>
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="mt-1 h-5 w-5 flex-none text-primary "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>

                    <span>
                      <strong className="font-semibold text-gray-900">
                        {heading3}
                      </strong>
                      <ul className="list-disc list-inside ">
                        {renderContentWithLineBreaks(content3)}
                      </ul>
                    </span>
                  </li>
                </ul>
                <p className="mt-8 font-semibold text-slate-600 text-xl">
                  Join me on this journey of personal and professional growth!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-teal-500 sm:mb-20  2xl:max-w-7xl w-full m-auto">
        <div className="relative py-20">
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
            <div className="relative rounded-2xl px-6 py-10 bg-orange-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
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
                    className="text-orange-600 text-opacity-40"
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
              <div className="rounded-lg overflow-hidden mt-10 relative before:absolute before:z-20 before:bg-black before:h-full before:w-full before:bg-gradient-to-tr before:opacity-50">
                <iframe
                  src="https://www.youtube.com/embed/nGW9W-rWhjg?si=-ouIAd9RD_krz4XD"
                  className="absolute z-10 object-cover h-80 w-full"
                  title="Master Stage Confidence with These Expert Tips & Tricks | Stage Confidence | Coach Sushant Singhal"
                />
                <a
                  href="https://www.youtube.com/embed/nGW9W-rWhjg?si=-ouIAd9RD_krz4XD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute z-20 top-1/2 md:right-20 right-28 text-white -translate-y-1/2 animate-glow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-20 h-20 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                    />
                  </svg>
                </a>
                <div className="relative z-20 p-4 md:p-10 h-full w-full md:w-1/2">
                  <h2 className="text-white text-xl md:text-3xl font-semibold">
                    Master Stage Confidence with These Expert Tips & Tricks
                  </h2>
                  <h3 className="text-white text-sm md:text-xl">
                    | Stage Confidence | Coach Sushant Singhal
                  </h3>
                  <p className="text-sm text-slate-200 mt-4 opacity-45 sm:opacity-100 ">
                    Unlock the secrets to stage confidence in our latest video,
                    "Master Stage Confidence: Expert Tips & Tricks (2024)."
                    Whether you're a speaker, performer, or presenter, you'll
                    find actionable strategies to overcome anxiety and connect
                    with your audience like never before!
                  </p>
                  <div className="flex gap-4 items-center pt-4 border-t border-slate-300 text-slate-300 mt-6">
                    <span className="flex gap-1 items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      150
                    </span>
                    <span className="flex gap-1 items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="text-sky-400 w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                      11
                    </span>
                    <span className="flex gap-1 items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 text-lime-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                        />
                      </svg>
                      16
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
