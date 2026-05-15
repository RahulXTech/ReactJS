import { useEffect, useState } from "react";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

const slides = [slide1, slide2, slide3];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">

      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt="slide"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">

        <h2 className="text-pink-500 text-6xl font-bold mb-4">
          Come Build Your World
        </h2>

        <h1 className="text-blue-700 text-8xl font-extrabold">
          Admissions
        </h1>

        <h2 className="text-pink-600 text-6xl font-bold mb-12">
          Open 2025-26
        </h2>

      </div>

    </div>
  );
}

export default HeroSlider;