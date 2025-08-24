import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Speaker {
  name: string;
  title: string;
  expertise: string;
  image: string;
}

interface SpeakerCarouselProps {
  speakers: Speaker[];
}

const SpeakerCarousel: React.FC<SpeakerCarouselProps> = ({ speakers }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [cardsPerSlide, setCardsPerSlide] = useState<number>(1);

  // Update cards per slide based on screen size
  useEffect(() => {
    const updateCardsPerSlide = (): void => {
      if (window.innerWidth >= 1024) {
        setCardsPerSlide(4); // lg: 4 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerSlide(2); // md: 2 cards
      } else {
        setCardsPerSlide(1); // mobile: 1 card
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  // Reset slide when cards per slide changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [cardsPerSlide]);

  const totalSlides: number = Math.ceil(speakers.length / cardsPerSlide);

  const getVisibleSpeakers = (): Speaker[] => {
    const startIndex = currentSlide * cardsPerSlide;
    const endIndex = startIndex + cardsPerSlide;
    return speakers.slice(startIndex, endIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 tracking-tight text-center leading-tight">
          Meet our Speakers
        </h2>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getVisibleSpeakers().map((speaker, index) => (
                <div
                  key={`${currentSlide}-${index}`}
                  className="relative group overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-square bg-gray-200">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-[#DDAA31] font-medium text-sm mb-2">
                      {speaker.title}
                    </p>
                    <p className="text-gray-600 text-xs">{speaker.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Only show if there are multiple slides */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10 disabled:opacity-50 cursor-pointer"
                aria-label="Previous slide"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10 cursor-pointer"
                aria-label="Next slide"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator - Only show if there are multiple slides */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index
                      ? "bg-[#DDAA31] scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Slide Counter */}
          {totalSlides > 1 && (
            <div className="text-center mt-4 text-sm text-gray-500">
              {currentSlide + 1} of {totalSlides}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpeakerCarousel;
