import React from "react";


function SpeakTest() {
 

  const features = [
    {
      title: 'Transformative Mindset Shift',
      description: 'Overcome doubts and fears to become a powerful, confident speaker.',
    },
    {
      title: 'Practice-Based Experiential Learning',
      description: 'Individual attention to all participants and making them practice in each session!',
    },
    {
      title: 'Interacting & Brainstorming Together',
      description: 'Brainstorm on speeches and practical activities for real-world insight.',
    },
    {
      title: 'Proven Frameworks',
      description: 'Easy-to-follow frameworks to conquer nervousness and structure any speech.',
    },
    {
      title: 'Expert Guidance',
      description: 'Learn from Coach Sushant Singhal’s 6+ years of experience in mentoring 500+ participants.',
    },
    {
      title: 'Fun Activities & Games',
      description: 'Fun while learning is our motto! Join us for intriguing fun activities throughout.',
    },
    {
      title: 'Comprehensive Curriculum',
      description: 'Master vocal techniques, body language, speech structuring, and storytelling.',
    },
    {
      title: 'Tailored Feedback and Support',
      description: 'Get personalized feedback to enhance your skills and address individual needs.',
    }
  ];
  return (
    <>
      <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:px-8  lg:max-w-7xl">
          <div className="rounded-lg overflow-hidden mt-10 relative before:absolute before:z-20 before:bg-black before:h-full before:w-full before:bg-gradient-to-tr before:from-black before:to-teal-600 before:opacity-70">
            <iframe
              src="https://www.youtube.com/embed/q4Z1KglFh78?si=WVgzBzjekAcr2PJ1"
              className="absolute z-10 object-cover w-full h-full"
              title="Public Speaking Course Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <a
              href="https://www.youtube.com/embed/q4Z1KglFh78?si=WVgzBzjekAcr2PJ1"
              className="absolute z-50 top-1/2 md:right-20 right-28 text-white -translate-y-1/2 animate-glow"
              aria-label="Watch the Introduction Video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-20 h-20"
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
            <div className="relative z-20 sm:p-10 p-2 h-full md:w-1/2 w-full">
              <h2 className="text-white sm:text-3xl  text-xl font-semibold  sm:opacity-100">
                Elevate Your Public Speaking Skills
              </h2>
              <h3 className="text-white sm:text-xl text-lg opacity-70 sm:opacity-100 ">Coach Sushant Singhal</h3>
              <p className="text-sm text-slate-200 mt-4 opacity-70 sm:opacity-100">
                Join our transformative public speaking course designed to help
                you overcome stage fright, enhance your delivery, and captivate
                any audience. With personalized coaching and practical
                exercises, you'll develop the confidence and skills needed to
                make an impact.
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
                  120
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
                  45
                </span>
                <span className="flex gap-1 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-teal-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                  30
                </span>
              </div>
            </div>
          </div>


          <div className="sm:max-w-4xl lg:max-w-7xl mx-auto ">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">Features you'll love</h2>
        <p className="max-w-md mx-auto mt-2 text-gray-500">
        Why Choose Our Course?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start">
            <span className="text-teal-600 bg-teal-500/100 p-3 rounded-full">
            
              <span className="w-5 h-5 bg-gray-200 rounded-full"></span>
            </span>
            <div>
              <h3 className="font-semibold text-xl">{feature.title}</h3>
              <p className="mt-1 text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

          {/* <div className=" dark:bg-white-800  py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl ">
            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-primary">
                  Testimonials
                </h2>

                <p className="hidden max-w-screen-sm text-primary dark:text-primary md:block">
                  What People are Saying
                </p>
              </div>

              <a
                href="#"
                className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
              >
                More
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              {images.map((image, index) => (
                <a
                  key={index}
                  href="#"
                  className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-${
                    image.colSpan || 1
                  } md:h-80`}
                >
                  <iframe
                    src={image.imageUrl}
                    loading="lazy"
                    alt={image.alt}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    {image.category}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div> */}
        </div>
      </section>
    </>
  );
}

export default SpeakTest;
