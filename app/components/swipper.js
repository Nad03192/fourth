"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";

const CardsSwipperComponent = ({ slides }) => {
  console.log("sl", slides);

  if (!slides || !slides.success || !Array.isArray(slides.data) || slides.data.length === 0) {
    return <p>Loading or no data available...</p>; 
  }

  const router = useRouter(); // Hook for navigation

  return (
    <div className="container mx-auto p-4 sm:p-0">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: false }}
        autoplay={{ delay: 6000 }}
        loop
        className="w-full pb-20 sm:h-[500px]"
      >
        {slides.data.map((slide, index) => (
          <SwiperSlide 
            key={slide.id || index} 
            className="relative cursor-pointer"
            onClick={() => router.push(`/project/${index}`)} // Navigate to project details page
          >
            <img 
              src={slide.image || "/default-image.jpg"} 
              alt={slide.title || "Project Image"}
              className="w-full h-96 sm:h-[500px] object-fill transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
              <h2 className="text-white text-2xl font-bold">{slide.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardsSwipperComponent;
