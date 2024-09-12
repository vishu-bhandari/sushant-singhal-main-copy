import React from "react";
import { useSelector } from "react-redux";

function Accordion() {
  const { portfolioData } = useSelector((state) => state.root);

  if (!portfolioData || !portfolioData.faq) {
    return <div>Loading...</div>;
  }

  const { faq } = portfolioData;

  return (
    <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto z-[100]">
      <div className="mb-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <h1 className="text-black text-6xl lg:px-8 px-0">
          Faq <span className="font-semibold">Corner</span>
          <hr className="border-2 w-1/3 border-secondary opacity" />
          <hr className="border-2 w-1/4 border-tertiary opacity mt-1" />
          <hr className="border-2 w-1/5 border-primary opacity mt-1" />
        </h1>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:px-8 sm:py-12 sm:pb-12 pb-5 lg:max-w-7xl">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/2 m-auto w-full flex items-center justify-center p-4 lg:p-0">
            <div className="lg:w-[400px] lg:h-[400px] w-full h-full">
              <img src='https://i.postimg.cc/QxsyVXNX/conversation.png' alt="" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full md:p-4 p-0 lg:p-0">
            <div className="mx-auto rounded">
              <div className="md:p-10 md:shadow-md shadow-none rounded-lg">
                <p className="text-2xl px-0  font-medium text-gray-800 my-1 hover:text-teal-500 ease-in-out transition-all duration-300">
                  Questions You Might Have - FAQs
                </p>
                <div className="h-1 w-full mx-auto border-b my-5"></div>
                <div className="mx-auto mt-8 grid sm:max-w-2xl 2xl:max-w-7xl divide-y divide-neutral-200">
                  {faq.map((faq, index) => (
                    <div className="py-5" key={index}>
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span>{faq.title}</span>
                          <span className="transition group-open:rotate-180">
                            <svg
                              fill="none"
                              height="24"
                              shapeRendering="geometricPrecision"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </summary>
                        <p className="group-open:animate-fadeIn mt-3 text-neutral-600 whitespace-pre-line">
                          {faq.content}
                        </p>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accordion;
