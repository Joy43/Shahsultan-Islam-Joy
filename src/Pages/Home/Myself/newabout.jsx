import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

import image1 from "../../../assets/slide/profile.gif";
import { Link } from 'react-router-dom';



function Myself() {
  const sliders = [ image1];
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlider((currentSlider) =>
        currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <div className="bg-black px-5 sm:px-10 py-16 md:py-32">
      <section className="grid lg:grid-cols-2 items-center gap-8">
        {/* Image Slider */}
        <div className="relative shadow-lg rounded-lg overflow-hidden w-full h-[240px] sm:h-[400px] md:h-[540px] flex items-center justify-center">
          {/* Dots for slider */}
          <div className="absolute right-0 bottom-1/2 transform rotate-90 flex gap-1">
            {sliders.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlider(index)}
                className={`rounded-full transition-all ${
                  currentSlider === index ? "bg-orange-600 w-6" : "bg-gray-300 w-2"
                } h-2`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          {/* Slider Images */}
          {sliders.map((src, index) => (
            <img
              key={index}
              src={src}
              className={`absolute inset-0 w-full h-[240px] sm:h-[400px] md:h-[540px] object-cover transition-opacity duration-500 ${
                currentSlider === index ? "opacity-100" : "opacity-0"
              }`}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left text-white space-y-4">
          <p className="text-xl sm:text-2xl md:text-3xl">Hi There</p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold">
            I'm <span className="text-orange-600">Shahsultan Islam Joy</span>.
          </p>
          <p className="text-2xl md:text-4xl">
            I am a{' '}
            <span>
              <Typewriter
                options={{
                  strings: ['Full Stack Dev.', 'Software Dev.', 'Web Designer.', 'Programmer.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <p className="text-lg md:text-2xl">
            Designer and Developer devoted to crafting beautiful web experiences focused on simplicity and purpose.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            <Link to="contact"
              
              className="text-lg md:text-xl bg-orange-600 py-2 px-5 rounded-full hover:bg-orange-700 transition"
            >
              Contact Me
            </Link>
            <button
              className="text-lg md:text-xl bg-orange-600 py-2 px-5 rounded-full hover:bg-orange-700 transition"
              aria-label="Celebration"
            >
              🎉
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Myself;
