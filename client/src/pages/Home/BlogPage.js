import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import { useSelector } from "react-redux";
import ScrollToTopButton from "./ScrollToTopButton";

function BlogPage() {
  const { portfolioData } = useSelector((state) => state.root);
  const [shuffledBlog, setShuffledBlog] = useState([]);

  useEffect(() => {
    if (portfolioData && portfolioData.blog) {
      setShuffledBlog(shuffleArray(portfolioData.blog));
    }
  }, [portfolioData]);

  if (!portfolioData || !portfolioData.blog) {
    return <div>...</div>;
  }

  // Helper function to determine if the URL is a YouTube link
  const isYouTubeLink = (url) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  // Helper function to determine if the URL is an image link
  const isImageLink = (url) => {
    return url.match(/\.(jpg|jpeg|png|gif|bmp|webp)$/i);
  };

  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <>
      <ScrollToTopButton />
      <Header />
      <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto border-t border-gray-100 rounded-xl z-10 mb-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:px-0 lg:max-w-7xl">
          <div>
            <div className="">
              <header className="">
                <h1 className="text-4xl font-bold tracking-tight my-10 text-black sm:text-5xl">
                  Blogs
                </h1>
                <p className="mt-6 text-base text-gray-700">
                Here are some handful tips to grow your Public Speaking & Communication potential
                </p>
              </header>
              <div className="mt-16 sm:mt-20">
                <div className="md:border-l md:border-gray-400 md:pl-6">
                  <div className="flex max-w-6xl flex-col space-y-16">
                    {shuffledBlog.map((article, index) => (
                      <article
                        key={index}
                        className="md:grid md:grid-cols-4 md:items-baseline"
                      >
                        <div className="md:col-span-3 group relative flex flex-col items-start hover:bg-slate-100 md:p-5 p-0 rounded-md transform transition-all duration-500 ease-in-out">
                          <h2 className="text-lg font-semibold tracking-tight text-gray-800">
                            {article.title}
                          </h2>
                          <time
                            className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-gray-800 md:pl-3.5 pl-0"
                            dateTime={article.date}
                          >
                            {article.date}
                          </time>
                          <p className="relative z-10 mt-2 text-md text-gray-600">
                            {article.description}
                          </p>

                          <div
                            aria-hidden="true"
                            className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                          >
                            <p className="flex items-center">
                              {isYouTubeLink(article.youtubeLink) ? (
                                <span>Watch Video</span>
                              ) : (
                                <span>View Image</span>
                              )}
                              <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                aria-hidden="true"
                                className="ml-1 h-4 w-4 stroke-current"
                              >
                                <path
                                  d="M6.75 5.75 9.25 8l-2.5 2.25"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </p>
                          </div>

                          {isYouTubeLink(article.youtubeLink) ? (
                            <iframe
                              className="rounded-xl border-2 h-full w-full sm:h-[30rem]"
                              src={article.youtubeLink}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          ) : isImageLink(article.youtubeLink) ? (
                            <img
                              className="rounded-xl border-2 h-full w-full sm:h-[30rem] object-cover"
                              src={article.youtubeLink}
                              alt={article.title}
                            />
                          ) : null}
                        </div>
                        <time
                          className="mt-1 hidden md:block relative z-10 order-first mb-3 items-center text-sm text-gray-800 dark:text-gray-500"
                          dateTime={article.date}
                        >
                          {article.date}
                        </time>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BlogPage;
