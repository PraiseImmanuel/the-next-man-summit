import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="flex flex-col lg:flex-row items-center container mx-auto justify-center px-4 sm:px-6 lg:px-8 gap-6">
        {/* Image Container */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start lg:-rotate-4 order-1 lg:order-none">
          <div className="relative w-[90%] md:max-w-[400px] lg:max-w-[500px]">
            <Image
              src="/images/next-man-summit.jpg"
              alt="Next Man Summit"
              width={500}
              height={500}
              className="w-full h-auto object-cover md:rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="w-fit lg:flex1 order-2 lg:order-none py-12 lg:px-4 xl:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 sm:mb-6 max-w-full lg:max-w-[700px] tracking-tight text-left leading-tight">
            What is the Next Man Summit?
          </h2>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <p className="max-w-full lg:max-w-[700px] text-base lg:text-lg text-left leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="max-w-full lg:max-w-[700px] text-base lg:text-lg text-left leading-relaxed">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="max-w-full lg:max-w-[700px] text-base lg:text-lg text-left leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
