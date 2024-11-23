import React, { useRef } from "react";
import Services from "./Services";
import SliderCompanyname from "../components/SliderCompanyname";
import Portfolio from "./Portfolio";
import Team from "./Team";

const Home = () => {
  // Create refs for each section to enable smooth scrolling
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const teamRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-white min-h-screen flex flex-col relative overflow-hidden mt-14">
      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content Section */}
          <div className="text-center md:text-left space-y-4">
            <div
              className="absolute top-0 left-0
          w-[300px] h-[300px] 
          sm:w-[400px] sm:h-[330px] 
          bg-gradient-to-br 
          from-green-600 via-green-500 to-green-400 
          rounded-full 
          blur-[80px] 
          opacity-50 
          animate-pulse
          transform translate-x-0 translate-y-20 sm:translate-y-[130px]"
            ></div>

            <div
              className="absolute top-0 left-0 
          w-[200px] h-[200px] 
          sm:w-[300px] sm:h-[300px] 
          bg-gradient-to-br 
          from-green-500/20 via-green-500/10 to-green-500/5 
          rounded-full 
          blur-[120px] 
          opacity-30"
            ></div>
            <h2 className="text-green-500 text-base sm:text-lg font-semibold">
              KEEP YOUR MONEY SAFE!
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Secure DeFi Infrastructure
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto md:mx-0">
              Decentralized, scalable, trusted. Welcome to VaultChain.
            </p>

            {/* Action Buttons with Section Navigation */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection(portfolioRef)}
                className="border border-green-500 text-green-500 px-6 py-3 rounded-full hover:bg-green-600 hover:text-black transition-all duration-300"
              >
                Portfolio
              </button>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="flex justify-center items-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
              <h3 className="text-xl font-semibold mb-4 text-white">
                New Content Here
              </h3>
              <p className="text-gray-400">
                You can add any content here, such as images, videos, or
                information about your service.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Company Name Slider */}
      <SliderCompanyname />

      {/* Services Section */}
      <section ref={servicesRef} className="py-8">
        <Services />
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-8">
        <Portfolio />
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-8">
        <Team />
      </section>
    </div>
  );
};

export default Home;
