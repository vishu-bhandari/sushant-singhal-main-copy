import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import { useSelector } from "react-redux";

import ScrollToTopButton from "./ScrollToTopButton";

function AboutPage() {
  const { portfolioData } = useSelector((state) => state.root);
  if (!portfolioData || !portfolioData.about) {
    return <div>...</div>;
  }
  const { about } = portfolioData;
  const {
    lottieURL,
    description1,
    description2,
    heading,
    content,
    image,
    paragraph1,
    paragraph2,
    paragraph3,
  } = about;

  const renderContentWithLineBreaks = (content) => {
    return content.split("\n").map((line, index) => <p key={index}>{line}</p>);
  };
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto border-t border-gray-100 rounded-xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center  lg:px-0 lg:max-w-7xl">
          <div className="relative overflow-hidden bg-white">
            <div className="pt-5  sm:pt-20 lg:pt-20 ">
              <div className="flex flex-col lg:flex-row mx-auto max-w-7xl lg:px-8 justify-between">
                <div className="lg:w-1/2 w-full">
                  <h1 className="w-[100%] font text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl my-auto">
                    {heading}
                    <hr className="sm:border-2 border-[1.5px] w-1/3 border-secondary opacity" />
                    <hr className="sm:border-2 border-[1.5px] w-1/4 border-tertiary opacity mt-1" />
                    <hr className="sm:border-2 border-[1.5px] w-1/5 border-primary opacity mt-1" />
                  </h1>
                  <p className="w-[100%] mt-4 sm:text-xl text-md text-gray-600">
                    {content}
                  </p>
                </div>
                <div className="lg:w-1/2 w-full flex justify-center lg:justify-end  lg:mt-0">
                  <img
                    src={image}
                    alt="about"
                    className="rounded w-[100%] lg:w-[100%] md:-top-8 top-0 relative m-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" relative isolate overflow-hidden  lg:overflow-visible  w-full 2xl:max-w-7xl  m-auto h-full">
        <div className="bg-teal-500 text-white -skew-y-1  bg-gradient-to-r from-cyan-400 to-teal-600 ">
          <div className="container mx-auto flex flex-wrap gap-12 items-start justify-center md:justify-between sm:mb-20 mb-10 sm:py-20 py-10">
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-8 border-orange-500 p-4 border-gradient">
                <i className="ri-chat-3-line text-6xl"></i>
              </div>
              <h3 className="sm:text-2xl text-xl font-semibold">
                Communication Skills
              </h3>
              <p>
                Enhance your communication for clearer, more effective
                interactions.
              </p>
            </div>
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-8 border-teal-400 p-4 border-gradient">
                <i className="ri-speak-line text-6xl"></i>
              </div>
              <h3 className="sm:text-2xl text-xl font-semibold">
                Public Speaking
              </h3>
              <p>
                Build confidence to deliver impactful and engaging speeches.
              </p>
            </div>
            <div className="grid gap-4 justify-items-center text-center md:flex-1">
              <div className="rounded-full border-8 border-primary p-4 border-gradient">
                <i className="ri-award-line text-6xl"></i>
              </div>
              <h3 className="sm:text-2xl text-xl font-semibold">
                Personal Transformation
              </h3>
              <p>
                Achieve growth and self-improvement through expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto  rounded-xl sm:mb-20 mb-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center  lg:px-0 lg:max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 w-full lg:px-8 px-0 flex flex-col  ">
              <h1 className="sm:text-4xl text-3xl font-normal">
                My <span className=" font-semibold">Vision</span>
                <hr className="sm:border-2 border-[1.5px] w-1/3 border-secondary opacity" />
                <hr className="sm:border-2 border-[1.5px] w-1/4 border-tertiary opacity mt-1" />
                <hr className="sm:border-2 border-[1.5px] w-1/5 border-primary opacity mt-1" />
              </h1>
            <ul>
              <li>

              <p className="text-lg text-gray-800 text-left leading-relaxed">
                {renderContentWithLineBreaks(paragraph1)}
              </p>
              </li>
              <li>

              <p className="text-lg text-gray-800 text-left leading-relaxed">
                {renderContentWithLineBreaks(paragraph2)}
              </p>
              </li>
              <li>

              <p className="text-lg text-gray-800 text-left leading-relaxed">
                {renderContentWithLineBreaks(paragraph3)}
              </p>
              </li>
            </ul>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col lg:flex-col gap-6 justify-around lg:justify-start mt-8 lg:mt-0 sm:items-start sm:pl-44 pl-0 ">
              <div>
                <dd className="mb-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {lottieURL} 
                  {/* 50 */}
                </dd>
                <dt className="text-base sm:leading-7 leading-3 text-gray-600 mb-7">
                Life's Empowered
                </dt>
              </div>
              <div>
                <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-3">
                  {description1}
                  {/* 200 */}
                </dd>
                <dt className="text-base sm:leading-7 leading-3 text-gray-600 mb-7">
                Educational Sessions
                </dt>
              </div>
              <div>
                <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-3">
                  {description2}
                  {/* 50 */}
                </dd>
                <dt className="text-base sm:leading-7 leading-3 text-gray-600">
                  Awards in Public Speaking
                </dt>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
     
    </>
  );
}

export default AboutPage;
