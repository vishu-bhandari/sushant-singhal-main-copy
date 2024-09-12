import React from "react";
import img from "../images/WhatsApp-Logo.wine.png";

function WhatsApp() {
  return (
    <>
      <div className="fixed bottom-6  -left-4 lg:-left-6 z-[1000]">
        <a
          href="https://wa.me/919910654407?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20course.%20Could%20we%20discuss%20the%20details%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={img} className="w-24 md:w-26 lg:w-32 " alt="WhatsApp" />
        </a>
      </div>
    </>
  );
}

export default WhatsApp;
