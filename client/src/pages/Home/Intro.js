import React from "react";
import Header from "../../Components/Header";
import { Carousel } from "antd";
// import BannerImage from '../../images/Banner-img.png'
import { NavLink } from "react-router-dom";
// import { images } from "../../resources/Projects";
import { useSelector } from "react-redux";




function Intro() {

  const { portfolioData } = useSelector((state) => state.root);
  if (!portfolioData || !portfolioData.slider) {
    return <div>...</div>;
    
  }

  const { slider } = portfolioData;
  

 
  

  return (
    <>
      <section className="relative isolate overflow-hidden bg-white h-auto">
        <div className="absolute inset-0 -z-10 overflow-hidden ">
          <svg
            className="absolute left-[max(50%,25rem)] top-40 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(white,64rem_64rem_at_top,transparent)] opacity-95 "
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg
              x="50%"
              y={-1}
              className="overflow-visible fill-gray-50 opacity-50"
            >
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <Header />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="flex lg:max-w-7xl m-auto lg:flex-row flex-col max-w-2xl relative isolate overflow-hidden  px-6  lg:overflow-visible lg:px-0 ">
          <div className="lg:w-1/2 lg:px-10 lg:py-32 flex  flex-col gap-6 w-full px-0 py-10">
            <h1 className="text-black text-6xl ">
              Sushant <span className="font-semibold  ">Singhal</span>
              <hr className="border-2 w-1/3 border-secondary opacity" />
              <hr className="border-2 w-1/4 border-tertiary opacity mt-1" />
              <hr className="border-2 w-1/5 border-primary opacity mt-1" />
            </h1>
            <p className="text-2xl font-normal">Trainer| Coach| Mentor| YouTube Anchor</p>

            <p className="text-gray-600 font-normal ">
              “Build Essential Skills. Ignite Minds with Expert Training. Thrive in Life with Professional Development Coaching.”
            </p>
            <div>
              <NavLink
                to="/about"
                className="border-2 px-5 py-2 text-md rounded-md mr-5 inline-block border-gradient  "
              >
                <span className="font-medium ">Know More</span>
              </NavLink>

             

              <NavLink to="/about" className="text-md font-medium ">
                Learn More <i className="ri-arrow-right-line"></i>{" "}
              </NavLink>
            </div>
          </div>

          <div className="lg:w-1/2 rounded-xl lg:mt-52 lg:mb-24 w-full mt-0 mb-0 ">
            <Carousel autoplay dots={false} >
            {slider.map((image, index) => (
                <div key={index}>
                  <img
                    src={image.image}
                    alt={image.title}
                    className="rounded-xl lg:w-[80%] w-full m-auto hover:cursor-pointer hover:z-10 "
                  />
                  <div>
                    <p className="text-center text-xl font-semibold lg:mt-3 sm:mt-1 mt-0">{image.title}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
