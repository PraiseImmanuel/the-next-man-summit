import React, { useEffect, useState } from "react";

// Hero images data
const heroImages = [
  {
    image: "/images/hero-bg.jpeg",
    title: "FORGED",
    subtitle: "THE NEXT MAN SUMMIT 2025",
    description: "From boys under pressure to men on purpose.",
  },
  {
    image: "/images/hero-bg-2.jpeg",
    title: "FORGED",
    subtitle: "THE NEXT MAN SUMMIT 2025",
    description: "From boys under pressure to men on purpose.",
  },
  {
    image: "/images/hero-bg-3.jpeg",
    title: "FORGED",
    subtitle: "THE NEXT MAN SUMMIT 2025",
    description: "From boys under pressure to men on purpose.",
  },
  {
    image: "/images/hero-bg-4.jpeg",
    title: "FORGED",
    subtitle: "THE NEXT MAN SUMMIT 2025",
    description: "From boys under pressure to men on purpose.",
  },
];

const HeroSection = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  // Auto-carousel for hero section
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(heroInterval);
  }, [heroImages.length]);

  return (
    <section className="relative h-[500px] lg:h-[92vh] overflow-hidden">
      {heroImages.map((hero, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentHeroSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${hero.image}')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
            <h1
              className={`text-white text-5xl md:text-8xl font-bold mb-2 transform transition-all duration-1000 ${
                index === currentHeroSlide
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {hero.title}
            </h1>
            <h2
              className={`text-[#DDAA31] text-2xl md:text-3xl font-bold transform transition-all duration-1000 delay-200 ${
                index === currentHeroSlide
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {hero.subtitle}
            </h2>
            <p
              className={`text-white mb-8 max-w-2xl transform transition-all duration-1000 delay-400 ${
                index === currentHeroSlide
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {hero.description}
            </p>
          </div>
        </div>
      ))}

      {/* Hero Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentHeroSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentHeroSlide
                ? "bg-[#DDAA31] scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Hero Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 z-20">
        <div
          className="h-full bg-[#DDAA31] transition-all duration-300 ease-linear"
          style={{
            width: `${((currentHeroSlide + 1) / heroImages.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
