"use client";
import { useState } from "react";

const Banner = ({ image, heading, text, ctaText,poph1,poptext }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto pb-10">
    <section 
      className="h-[100vh] max-h-[900px] flex items-center justify-center bg-blue-100 dark:bg-gray-800 relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 px-6">
        <h1 className="text-5xl font-bold text-white mb-4">{heading}</h1>
        <p className="text-lg text-white mb-6 max-w-[600px] mx-auto">{text}</p>
        {ctaText && (
          <button 
            onClick={() => setIsOpen(true)} 
             className="px-6 cursor-pointer py-2 border-[2px] border-[#FF4A4A] text-white text-lg font-semibold hover:bg-[#e03e3e] transition duration-300 ease-in-out"
          >
            {ctaText}
          </button>
        )}
      </div>
     
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">{poph1}</h2>
            <p className="text-gray-700 mb-4">{poptext}</p>
            <button 
              onClick={() => setIsOpen(false)} 
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
    </div>
  );
};

export default Banner;
