import React from "react";
import Services from "./Services";
import SliderCompanyname from "../components/SliderCompanyname";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div className="text-white min-h-screen flex flex-col justify-between relative overflow-hidden lr:mt-44 md:mt-20 sm:mt-10 ">
      {/* Green Gradient Circle in Corner */}

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content Section */}
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-green-500 text-base sm:text-lg font-semibold">
              KEEP YOUR MONEY SAFE!
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Secure DeFi Infrastructure
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto md:mx-0">
              Decentralized, scalable, trusted. Welcome to VaultChain.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                className="bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 inline-block text-center"
                href="#"
              >
                Go to App
              </a>
              <a
                className="border border-green-500 text-green-500 px-6 py-3 rounded-full hover:bg-green-600 hover:text-black transition-all duration-300 inline-block text-center"
                href="#"
              >
                Documentation
              </a>
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

      {/* Services Section */}
      <SliderCompanyname />
      <Services />
      <Portfolio />
    </div>
  );
};

export default Home;
