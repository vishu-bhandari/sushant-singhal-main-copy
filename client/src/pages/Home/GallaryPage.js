import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import { useSelector } from "react-redux";

function GallaryPage() {
  const { portfolioData } = useSelector((state) => state.root);

  // Declare hoveredIndex state at the top level of the component
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [shuffledGallery, setShuffledGallery] = useState([]);

  useEffect(() => {
    if (portfolioData && portfolioData.gallery) {
      const [topImages, otherImages] = [portfolioData.gallery.slice(0, 2), portfolioData.gallery.slice(2)];
      setShuffledGallery([...topImages, ...shuffleArray(otherImages)]);
    }
  }, [portfolioData]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  if (!portfolioData || !portfolioData.gallery) {
    return <div>Loading...</div>;
  }

  // Separate the first two images and the rest
  const [topImages, otherImages] = [shuffledGallery.slice(0, 2), shuffledGallery.slice(2)];

  return (
    <>
      <ScrollToTopButton />
      <Header />
      <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto border-t border-gray-100 z-50 mb-20">
        {/* Top Images */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {topImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={image.src}
                  alt="gallery img"
                  className="w-full h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-0 flex items-center text-lg text-center text-white group-hover:bg-opacity-60 transition">
                      <p className="px-4 py-2">{image.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Remaining Images */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:px-0 lg:max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherImages.map((image, index) => (
              <div
                key={index + 2} // Ensure unique key by offsetting index
                className="group cursor-pointer relative"
                onMouseEnter={() => setHoveredIndex(index + 2)} // Offset index for correct hover effect
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={image.src}
                  alt="gallery img"
                  className="w-full h-48 object-contain rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                />
                {hoveredIndex === index + 2 && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-0 flex items-center text-lg text-center text-white group-hover:bg-opacity-60 transition">
                      <p className="px-4 py-2">{image.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default GallaryPage;
