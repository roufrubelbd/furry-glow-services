// src/components/HomeBanner.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";

const HomeBanner = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.postimg.cc/RhQ4w9Nf/ban01.jpg",
      title: "Keep Your Pets Warm This Winter ",
      subtitle: "Discover cozy coats, grooming & accessories at WarmPaws.",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/jjwTZyL8/ban02.jpg",
      title: "Pamper Your Furry Friend ",
      subtitle: "Grooming, diet, and care — all in one place.",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/Mprx79Kv/ban03.jpg",
      title: "Play Indoors. Stay Happy! ",
      subtitle: "Book indoor play sessions for safe winter fun.",
    },
  ];

  return (
    <div className="w-full ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[70vh] md:h-[80vh]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="bg-black/40 absolute inset-0 ">
                <div className="absolute inset-0   flex flex-col justify-center items-center text-center text-white px-6 z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-3 animate__animated animate__fadeInDown">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl animate__animated animate__fadeInUp">
                    {slide.subtitle}
                  </p>
                  <Link to="/services">
                    <button className="btn bg-emerald-500 mt-5 animate__animated animate__fadeInUp text-white hover:bg-emerald-600">
                    Explore Now
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
