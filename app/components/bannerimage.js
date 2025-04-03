"use client";
import { useState } from "react";

const Banner = ({ image, heading, text, ctaText,poph1,poptext }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-10 max-w-[1500px] mx-auto w-full">
    <section 
      className="h-[100vh] max-h-[900px] flex items-center justify-center bg-blue-100 dark:bg-gray-800 relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
     <div className="absolute inset-0 bg-black opacity-50"></div>


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
      
      <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
    
      {/* White content section with no opacity */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center z-10 relative">
        {/* Close X button */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute cursor-pointer top-4 right-4 text-2xl text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        
        <h2 className="text-2xl font-bold mb-4">{poph1}</h2>
        <p className="text-gray-700 mb-4">{poptext}</p>
      </div>
    </div>
     
      )}
    </section>
    </div>
  );
};

export default Banner;
