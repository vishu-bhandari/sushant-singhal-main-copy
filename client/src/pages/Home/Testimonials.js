import { Rating } from "flowbite-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function Testimonials() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const { portfolioData } = useSelector((state) => state.root);

  if (
    !portfolioData ||
    !portfolioData.testimonial ||
    portfolioData.testimonial.length === 0
  ) {
    return <div>Loading...</div>;
  }

  const testimonials = portfolioData.testimonial;

  const currentTestimonial = testimonials[currentProductIndex];

  const handleNextTestimonial = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevTestimonial = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto md:py-0 py-5">
        <div className="mb-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <h1 className="text-black sm:text-6xl text-5xl lg:px-8 px-0">
            Client <span className="font-semibold ">Testimonials</span>
            <hr className="border-2 w-1/3 border-secondary opacity" />
            <hr className="border-2 w-1/4 border-tertiary opacity mt-1" />
            <hr className="border-2 w-1/5 border-primary opacity mt-1" />
          </h1>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:px-8 py-5 sm:py-12 lg:py-16 lg:max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center relative">

            <div className="w-full lg:w-1/2">
            <i className="ri-double-quotes-l text-9xl top-[-5rem] left-[-3rem] opacity-15 absolute text-secondary hidden lg:block overflow-hidden"></i>
              
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-3xl font-medium sm:text-left text-center">
                    {currentTestimonial.name}
                    <span className="font-semibold sm:text-left text-center">
                      {currentTestimonial.lname}
                    </span>
                  </h2>
                  <p className="text-gray-500 font-medium sm:text-left text-center">
                    {currentTestimonial.position}
                  </p>
                  <div className="flex  justify-center  sm:justify-normal">

                  <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star  />
               
                </Rating>
                  </div>
                </div>
                
                <p className="leading-normal text-primary text-lg lg:mr-2 mr-0 ">
                  {currentTestimonial.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handlePrevTestimonial}
                    className="border-2 px-5 py-2 text-md rounded-md border-gradient"
                  >
                    Prev
                  </button>
                  <button
                    onClick={handleNextTestimonial}
                    className="border-2 px-5 py-2 text-md rounded-md border-gradient"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:h-auto  ">
              {currentTestimonial.imageUrl.includes("youtube.com") ? (
                <iframe
                  className="rounded-xl shadow-xl border-2 sm:w-[560px] sm:h-[315px] w-full h-full"
                  src={currentTestimonial.imageUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  className="rounded-xl shadow-xl border-2 max-w-[70%] h-auto m-auto"
                  src={currentTestimonial.imageUrl}
                  alt="Testimonial "
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
