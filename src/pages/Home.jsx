import React, { useRef } from "react";
import { motion } from "framer-motion"; // Added for potential animations
import Services from "./Services";
import SliderCompanyname from "../components/SliderCompanyname";
import Portfolio from "./Portfolio";
import Team from "./Team";
import FooterImage from "../assets/images/vaultChainImage.png";

const Home = () => {
  // Create refs for each section to enable smooth scrolling
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const teamRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants for smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="text-white min-h-screen flex flex-col relative overflow-hidden mt-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content Section */}
          <motion.div
            className="text-center md:text-left space-y-4"
            variants={itemVariants}
          >
            {/* Background Gradient Effects */}
            <div className="absolute top-0 left-0 pointer-events-none">
              <div
                className="absolute 
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
                className="absolute 
                w-[200px] h-[200px] 
                sm:w-[300px] sm:h-[300px] 
                bg-gradient-to-br 
                from-green-500/20 via-green-500/10 to-green-500/5 
                rounded-full 
                blur-[120px] 
                opacity-30"
              ></div>
            </div>

            {/* Hero Content */}
            <motion.h2
              className="text-green-500 text-base sm:text-lg font-semibold"
              variants={itemVariants}
            >
              KEEP YOUR MONEY SAFE!
            </motion.h2>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              variants={itemVariants}
            >
              Secure DeFi Infrastructure
            </motion.h1>

            <motion.p
              className="text-gray-400 text-base sm:text-lg max-w-md mx-auto md:mx-0"
              variants={itemVariants}
            >
              Decentralized, scalable, trusted. Welcome to VaultChain.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection(portfolioRef)}
                className="border border-green-500 text-green-500 px-6 py-3 rounded-full hover:bg-green-600 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Portfolio
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.img
              src={FooterImage}
              alt="VaultChain Secure Infrastructure"
              className="w-full max-w-md h-auto rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -80, 0], // Vertical movement
              }}
              transition={{
                duration: 0.5,
                y: {
                  duration: 2, // Slower vertical movement
                  repeat: Infinity, // Continuous animation
                  repeatType: "reverse", // Bounce back and forth
                  ease: "easeInOut", // Smooth transition
                },
              }}
              whileHover={{
                scale: 1.05, // Slight scale on hover
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        </div>
      </main>

      {/* Company Name Slider */}
      <SliderCompanyname />

      {/* Sections with Refs */}
      <section ref={servicesRef}>
        <Services />
      </section>

      <section ref={portfolioRef}>
        <Portfolio />
      </section>

      <section ref={teamRef}>
        <Team />
      </section>
    </motion.div>
  );
};

export default Home;
