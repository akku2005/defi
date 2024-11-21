import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faLeaf,
  faCoins,
  faLock,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        type: "spring",
        stiffness: 100,
      }}
      className="group relative overflow-hidden rounded-2xl 
  backdrop-blur-lg bg-white/10 
  border border-white/20 
  shadow-2xl shadow-black/10
  transform transition-all duration-300 
  hover:scale-105 hover:shadow-2xl hover:border-green-500/50
  w-full max-w-[250px] mx-auto"
    >
      <div
        className="absolute inset-0 bg-green-500 opacity-0 
      group-hover:opacity-10 transition-opacity duration-300"
      ></div>

      <div className="p-4 relative z-10">
        <div
          className="mb-3 flex items-center justify-center 
        w-14 h-14 rounded-full bg-green-500/20 mx-auto"
        >
          <FontAwesomeIcon
            icon={icon}
            className="text-2xl text-green-400 
            group-hover:text-green-200 transition-colors"
          />
        </div>
        <h3 className="text-lg font-bold text-white text-center mb-2">
          {title}
        </h3>
        <p className="text-gray-300 text-center mb-3 text-xs">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 
  bg-gradient-to-r 
  from-green-400 
  via-green-500 
  to-green-600 
  text-white 
  rounded-full 
  hover:from-green-500 
  hover:via-green-600 
  hover:to-green-700 
  transition-all 
  duration-300 
  flex items-center 
  justify-center 
  text-xs 
  shadow-md 
  hover:shadow-lg 
  hover:shadow-green-500/30"
        >
          Go To App
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: faRocket,
      title: "ILO Launchpad",
      description: "Secure platform for decentralized token fundraising.",
      delay: 0.1,
    },
    {
      icon: faLeaf,
      title: "Staking & Farming",
      description: "Earn rewards through secure token staking.",
      delay: 0.2,
    },
    {
      icon: faCoins,
      title: "Token Minter",
      description: "Easily create and launch custom tokens.",
      delay: 0.3,
    },
    {
      icon: faLock,
      title: "LP & Token Vesting",
      description: "Automated liquidity and token release management.",
      delay: 0.4,
    },
    {
      icon: faNetworkWired,
      title: "Token Ecosystem",
      description: "A comprehensive network for token utilization and growth.",
      delay: 0.5,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative py-8 px-4 mb-10"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 
      w-[500px] h-[500px] 
      sm:w-[400px] sm:h-[430px] 
      bg-gradient-to-br 
      from-green-600 via-green-500 to-green-400 
      rounded-full 
      blur-[80px] 
      opacity-50 
      animate-pulse"
        ></div>

        <div
          className="absolute top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 
      w-[200px] h-[200px] 
      sm:w-[300px] sm:h-[300px] 
      bg-gradient-to-br 
      from-green-500/20 via-green-500/10 to-green-500/5 
      rounded-full 
      blur-[120px] 
      opacity-30"
        ></div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Our Innovative Services
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          UNCX Network provides cutting-edge, automated token solutions for
          secure and efficient participation in decentralized finance.
        </p>
      </motion.div>

      <div className="flex flex-col items-center">
        {/* Responsive layout for different screen sizes */}
        <div className="hidden md:flex flex-col items-center">
          {/* Large Screens: Original Layout */}
          <div className="flex justify-center gap-6 mb-6">
            {services.slice(0, 2).map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={service.delay}
              />
            ))}
          </div>

          <div className="flex justify-center gap-6">
            {services.slice(2).map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={service.delay}
              />
            ))}
          </div>
        </div>

        {/* Mobile Screens: Vertical Layout */}
        <div className="md:hidden flex flex-col space-y-6 w-full max-w-[250px]">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
