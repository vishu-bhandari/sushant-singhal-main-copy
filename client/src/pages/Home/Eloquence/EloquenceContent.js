import React from "react";
import { Link } from "react-router-dom";

function EloquenceContent() {
  const courseHighlights = [
    "Brainstorm with caselets / related situations  on creating impactful speeches",

    "⁠Share valuable speaking tips and content",

    " ⁠Participate in opinion polls on various communication topics",

    " ⁠  ⁠Get Exclusive Benefits for any of our newly launched course",
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 sm:gap-y-16 gap-y-8 lg:px-8 lg:max-w-7xl">
          <div className="flex h-full justify-center items-center dark:bg-white-800">
            <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
              <div className="text-center">
                <h1 className="text-3xl  font-extrabold tracking-tight text-gray-900 dark:text-slate-400 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    <span className="sm:mb-1 mb-5 block">
                      Why Choose Our Community?
                    </span>
                    <span className="bg-gradient-to-r from-cyan-400 to-teal-600 bg-clip-text text-transparent">
                      Transform Your Speaking Skills
                    </span>
                  </span>
                  <div className="sm:mt-2 mt-0">
                    Through
                    <span className="relative sm:mt-3 mt-0 whitespace-nowrap text-orange-600">
                      <span className="relative">Engagement.</span>
                    </span>
                  </div>
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-hero overflow-hidden">
            <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl justify-evenly">
              <div className="w-full md:w-2/3 sm:px-4 px-0">
                <h2 className="text-2xl lg:text-3xl text-center md:text-left text-primary leading-tight font-base">
                  Community{" "}
                  <span className="font-semibold text-primary">Highlights</span>
                </h2>

                <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                  <ul className="mt-8 space-y-3 font-medium">
                    {courseHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-start mt-5">
                        <span className="flex-shrink-0 mr-3">
                          <span className="inline-block w-3 h-3 bg-teal-600 rounded-full"></span>
                        </span>
                        <p className="leading-5 text-gray-600 mt-1 text-start ">
                          <span className="font-normal ">{highlight}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </h3>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end ">
                <img
                  src="https://i.postimg.cc/gj13qhkQ/With-Ankur-3.png"
                  alt="Group"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-12 lg:mt-24 relative isolate overflow-hidden lg:overflow-visible w-full 2xl:max-w-7xl mx-auto h-full">
        <div className="bg-teal-500 text-white -skew-y-1">
          <div className="container mx-auto skew-y-1 px-4">
            <div className="flex flex-col items-center py-10 text-center lg:py-20">
              <div className="w-full lg:w-1/2">
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                    What You Will Get from this Program
                  </h2>
                  <p className="text-lg lg:text-xl opacity-80">
                    Educational Sessions: Elevate your speaking game with
                    enlightening sessions
                  </p>
                </div>
                <div className="text-lg">
                  <Link to="/contact" className="border-b border-white pb-1">
                    Book your Seat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EloquenceContent;
