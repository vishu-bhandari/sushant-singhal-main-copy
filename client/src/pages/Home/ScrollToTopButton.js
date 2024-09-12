import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // On scroll event, toggle button visibility based on scroll position
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top of the page smoothly
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      id="to-top-button"
      onClick={goToTop}
      title="Go To Top"
      className={`fixed z-[1000] bottom-10 md:right-10 right-2 md:p-4 p-0 border-0 md:w-14 md:h-14 w-10 h-10 rounded-full shadow-md bg-secondary hover:bg-tertiary text-white text-lg font-semibold transition-colors duration-300 ${
        isVisible ? '' : 'hidden'
      }`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hidden md:block">
        <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
      </svg>
      <i className="fa-solid fa-arrow-up flex justify-center items-center md:hidden"></i>
      <span className="sr-only">Go to top</span>
    </button>
  );
}

export default ScrollToTopButton;
