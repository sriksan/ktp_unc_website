"use client";

import React, { useEffect, useState } from "react";

const testimonials = [
  {
    text: "I chose to join KTP because I felt it was the only computer science organization that I felt went above and beyond in terms of both professional growth and a strong sense of community. I have met some of my best friends and formed deep connections through KTP.",
    author: "Chris Zou '27",
    image: "/testimonials/chris.jpg",
  },
  {
    text: "Scale and Coin was and will continue to be a community that I will identify with. This group of hard-working, ambitious students pushed me to reach beyond expectations. The intensive training process also provided important hard and soft skills that helped me find a career that I enjoy. I am thankful for Scale.",
    author: "Jiaqi Zhang '23",
    image: "/image/tower.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setFadeProp({ fade: "fade-out" });
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setFadeProp({ fade: "fade-in" });
    }, 500);
  };

  const prevTestimonial = () => {
    setFadeProp({ fade: "fade-out" });
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setFadeProp({ fade: "fade-in" });
    }, 500);
  };

  return (
    <div className="py-12 bg-babyBlue">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          What Our Current and Past Members Say
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          {/* Text Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 transform transition-transform duration-300 hover:scale-105">
            <div className={`transition-opacity duration-500 ${fadeProp.fade}`}>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-lg lg:text-xl font-semibold text-right text-black">
                - {testimonials[currentIndex].author}
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={testimonials[currentIndex].image}
              alt="Testimonial"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={prevTestimonial}
            className="bg-transparent hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mx-2"
          >
            &#8592; {/* Left arrow */}
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-transparent hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mx-2"
          >
            &#8594; {/* Right arrow */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;