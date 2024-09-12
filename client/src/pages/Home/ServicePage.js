import React from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import { useSelector } from "react-redux";
import ScrollToTopButton from "./ScrollToTopButton";
import { NavLink } from "react-router-dom";

function ServicePage() {
  const { portfolioData } = useSelector((state) => state.root);
  if (!portfolioData || !portfolioData.projects) {
    return <div>...</div>;
  }

  const { projects } = portfolioData;
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto border-t border-gray-100 rounded-xl z-10">
  <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:px-0 lg:max-w-7xl">
    <div className="relative overflow-hidden sm:pt-16 pt-10  pb-32 sm:space-y-24 space-y-5 ">
      {projects.map((project, index) => (
        <div key={index} className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 flex flex-col-reverse">
            <div
              className={`mx-auto lg:mx-0 lg:max-w-none lg:pb-10 lg:px-0 ${
                index % 2 === 0 ? "lg:order-first" : "lg:order-last"
              }`}
            >
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-black" > 
                    {project.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    {project.description}
                  </p>
                  <div className="mt-6">
                    <NavLink
                      to={project.link}
                      className="border-2 px-5 py-2 text-md rounded-md mr-5 inline-block border-gradient"
                    >
                      <span className="">Enroll Now</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`lg:m-0 lg:h-full lg:px-0 my-5 ${
                index % 2 === 0
                  ? "lg:col-start-1 lg:col-end-2"
                  : "lg:col-start-2 lg:col-end-3"
              }`}
            >
              <img
                loading="lazy"
                className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5"
                style={{ color: "transparent" }}
                src={project.image}
                alt={project.title}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <Footer />
      
    </>
  );
}

export default ServicePage;
