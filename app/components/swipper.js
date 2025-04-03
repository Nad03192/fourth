"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
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
    <div className="container mx-auto p-4 sm:p-0 md:mt-10 md:mb-37 relative">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop
        className="w-full pb-20 sm:h-[600px]"
      >
        {slides.data.map((slide, index) => (
          <SwiperSlide key={slide.id || index} className="p-14  relative">
          <a href={`/aboutUs/${slide.id}`} className="block cursor-pointer">
            <img
              src={slide.image || "/default-image.jpg"}
              alt={slide.title || "Project Image"}
              className="w-full h-96 sm:h-[500px] object-cover sm:w-[100%] transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 flex  items-center justify-center bg-opacity-50">
              <div className="text-center justify-items-center">
                <h2 className="text-white text-3xl w-[70%] font-bold mb-4">
                  {slide.title}
                </h2>
                <button
                  onClick={() => router.push(`/aboutUs/${slide.id}`)}
                  className="px-6 cursor-pointer py-2 border-[2px] border-[#FF4A4A] text-white text-lg font-semibold hover:bg-[#e03e3e] transition duration-300 ease-in-out"
                >
                  Know More
                </button>
              </div>
            </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for navigation arrows and pagination */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white; 
          transform: translateY(-50%);
          top: 50%;
          width: 400px;
          height: 400px;
        }

        .swiper-button-next {
          right: -170px;
        }

        .swiper-button-prev {
          left: -170px;
        }

        .swiper-pagination-bullet {
          background: white !important; 
       
        }
            @media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none !important;
    }
  }
      `}</style>
    </div>
  );
};

export default CardsSwipperComponent;
