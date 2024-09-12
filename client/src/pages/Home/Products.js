import React from "react";
import { NavLink } from "react-router-dom";

function Products() {
  const features = [
    {
      name: "Confident Orators",
      description: "Unleash Your Inner Star Speaker",
      image: "https://i.postimg.cc/BbBKFJmn/Group-Pic-August-2.jpg",
    },
    {
      name: "Empower You",
      description:
      "Ignite Your Potential: Introducing Empower You Coaching",
      image: "https://i.postimg.cc/vHxB2Lyr/Dhanraj-Session.png",
    },
    {
      name: "'Eloquence पे चर्चा'",
      description: "Revolutionize Your Public Speaking Journey: Join Our Unique Community Today!",
      image: "https://i.postimg.cc/3RTXdHVS/Switch-Game-2.jpg",
    },
    {
      name: "Toastmasters clubs",
      description: "Transform Your Speaking Skills, Transform Your Life",
      image: "https://i.postimg.cc/bN6LtfcK/Banner3.png",
    },
  ];

  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6  lg:overflow-visible lg:px-0 max-w-7xl m-auto h-auto">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#F97316] to-[#54D6BB] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="my-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10  ">
          <h1 className="text-black text-6xl lg:px-8  px-0 ">
            Our<span className="font-semibold  "> Services</span>
            <hr className="border-2 w-1/3 border-secondary opacity" />
            <hr className="border-2 w-1/4 border-tertiary opacity mt-1" />
            <hr className="border-2 w-1/5 border-primary opacity mt-1" />
          </h1>
        </div>

        <div className=" bg-none rounded-xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-0 py-4  sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Session Highlights
              </h2>
              <p className="mt-4 text-gray-500">
                Content structuring | Mastering Modulation The art of persuasion
                | Connect with story telling | Acing impromptu speaking | Winning
                Any Negotiation | Acing Any Interview Winning critical
                conversations
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="border-t-2  pt-4 gradient-border-top">
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                    <NavLink to="/service" className="text-md  text-gray-700 ">
                      Learn More{" "}
                      <i className="ri-arrow-right-line font-semibold "></i>{" "}
                    </NavLink>
                  </div>
                ))}
              </dl>
            </div>
            
            <div className="grid grid-cols-2 grid-rows-2 gap-1 sm:gap-6 lg:gap-8">
              {features.map((feature) => (
                <img
                  key={feature.name}
                  src={feature.image}
                  alt={feature.name}
                  className="rounded-lg bg-gray-100"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#F97316] to-[#54D6BB] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        
      </div>
    </>
  );
}

export default Products;
