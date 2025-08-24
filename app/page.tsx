"use client";

import AboutSection from "@/components/about";
import FAQSection from "@/components/faqsection";
import Footer from "@/components/footer";
import HeroSection from "@/components/herosection";
import SpeakerCarousel from "@/components/speakers";
import { useState } from "react";

// Speakers data - updated from event types
const speakers = [
  {
    name: "Dr. Michael Thompson",
    title: "Leadership Coach",
    image: "/images/speaker.jpg",
    expertise: "Personal Development",
  },
  {
    name: "James Rodriguez",
    title: "Business Mentor",
    image: "/images/speaker.jpg",
    expertise: "Entrepreneurship",
  },
  {
    name: "Pastor David Wilson",
    title: "Spiritual Leader",
    image: "/images/speaker.jpg",
    expertise: "Faith & Purpose",
  },
  {
    name: "Coach Marcus Johnson",
    title: "Life Coach",
    image: "/images/speaker.jpg",
    expertise: "Mental Health",
  },
  {
    name: "Anthony Davis",
    title: "Success Strategist",
    image: "/images/speaker.jpg",
    expertise: "Goal Achievement",
  },
  {
    name: "Dr. Robert Chen",
    title: "Psychologist",
    image: "/images/speaker.jpg",
    expertise: "Emotional Intelligence",
  },
  {
    name: "Minister John Adams",
    title: "Youth Pastor",
    image: "/images/speaker.jpg",
    expertise: "Youth Mentorship",
  },
  {
    name: "Carlos Martinez",
    title: "Motivational Speaker",
    image: "/images/speaker.jpg",
    expertise: "Overcoming Adversity",
  },
  {
    name: "Dr. Samuel Wright",
    title: "Family Therapist",
    image: "/images/speaker.jpg",
    expertise: "Relationships",
  },
  {
    name: "Kevin Thompson",
    title: "Career Coach",
    image: "/images/speaker0.jpg",
    expertise: "Professional Growth",
  },
  {
    name: "Minister Paul Jackson",
    title: "Community Leader",
    image: "/images/speaker1.jpg",
    expertise: "Community Impact",
  },
  {
    name: "Dr. Isaiah Brown",
    title: "Educator",
    image: "/images/speaker2.jpg",
    expertise: "Personal Excellence",
  },
];

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactFormToggle = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white py-4 border-b border-gray-100 z-40">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-base md:text-xl font-bold">
              The Next Man Summit
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            {/* Phone number with call icon - hidden on small screens */}
            <div className="hidden md:flex items-center text-sm font-medium">
              <svg
                className="w-4 h-4 mr-2 text-[#DDAA31]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+234-915-742-2372" className="hover:text-[#DDAA31]">
                +234-915-742-2372
              </a>
            </div>
            <button
              // onClick={handleContactFormToggle}
              className="bg-[#DDAA31] text-white px-4 py-2 text-sm font-bold hover:bg-[#C68C2C] transition-colors"
            >
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Add padding to body to account for fixed header */}
      <div className="pt-20">
        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 max-w-md w-full relative mx-4">
              <button
                onClick={handleContactFormToggle}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
              <h2 className="text-xl font-bold mb-6">FEEDBACK FORM</h2>
              <p className="text-sm mb-6">
                Fill out the form, and we will contact you shortly
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full p-2 border border-gray-300 focus:border-[#DDAA31] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone*"
                    className="w-full p-2 border border-gray-300 focus:border-[#DDAA31] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 focus:border-[#DDAA31] focus:outline-none"
                  />
                </div>
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" id="privacy" />
                  <label htmlFor="privacy" className="text-xs text-gray-500">
                    Consent to the processing of specified personal data in
                    accordance with the Personal Data Processing Policy
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#DDAA31] text-white py-3 font-medium hover:bg-red-700 transition-colors"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        )}

        <HeroSection />
        <AboutSection />
        <SpeakerCarousel speakers={speakers} />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}
