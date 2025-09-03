import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const gold = '#D4B258';
const darkGold = '#C3A24B'; // A slightly darker gold for hover states

const images = [
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755596709/Company%20assests/download_4_nozhtd.avif',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755596709/Company%20assests/download_3_odrv1k.avif',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755596709/Company%20assests/download_2_q7jscb.avif',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755596708/Company%20assests/download_1_pr8zkd.avif',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755596690/Company%20assests/download_6_uffoso.avif',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755596690/Company%20assests/download_5_pb2x9w.avif',
];


const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [currentImageIndex, handleNext]);

  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-sm min-h-[500px] md:min-h-[600px] flex items-center p-4 sm:p-6 lg:p-8"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full z-0">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Professional setting related to IxoraGroup's facility services."
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 bg-[#FEFBF9] p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl max-w-2xl bg-[radial-gradient(circle,#fffbeb_1px,transparent_1px)] bg-[size:1.2rem_1.2rem]">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
          <span style={{ backgroundColor: gold }} className="text-white text-sm font-semibold px-4 py-2 rounded-full">
            Facilities Management
          </span>
          <a href="#" className="text-gray-800 font-medium text-sm flex items-center group">
            Find your sector here
            <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 !leading-tight tracking-tight">
          Global facilities
          <br />
          services group
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-md">
          We're on a mission to make people and places the best they can be because everyone should have the best conditions and opportunities to thrive.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button style={{ backgroundColor: gold }} className="text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors duration-200 flex-shrink-0">
            IxoraGroup One Page Overview
          </button>
          <div className="flex items-center space-x-2">
            <button onClick={handlePrev} className="w-10 h-10 flex items-center justify-center rounded-full border border-amber-200 text-[#D4B258] bg-white/50 hover:bg-amber-100 transition-colors" aria-label="Previous">
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="w-10 h-10 flex items-center justify-center rounded-full border border-amber-200 text-[#D4B258] bg-white/50 hover:bg-amber-100 transition-colors" aria-label="Next">
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;