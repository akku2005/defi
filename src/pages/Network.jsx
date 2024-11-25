import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaExchangeAlt,
  FaChartLine,
  FaCode,
  FaNetworkWired,
} from "react-icons/fa";

const NetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.2, 0],
            scale: [0, 1.5, 0],
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute rounded-full bg-green-500/20 blur-xl"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
        />
      ))}
    </div>
  );
};

const Network = () => {
  const [activeSection, setActiveSection] = useState("features");

  const networkData = {
    name: "VaultChain Network",
    description:
      "A revolutionary decentralized finance ecosystem designed to transform digital asset management.",
    features: [
      {
        icon: FaShieldAlt,
        title: "Advanced Security",
        description:
          "Multi-layer security protocols ensuring comprehensive asset protection.",
      },
      {
        icon: FaLock,
        title: "Decentralized Governance",
        description:
          "Community-driven decision-making with transparent voting mechanisms.",
      },
      {
        icon: FaExchangeAlt,
        title: "Cross-Chain Interoperability",
        description:
          "Seamless asset transfer across multiple blockchain networks.",
      },
      {
        icon: FaChartLine,
        title: "Intelligent Analytics",
        description: "AI-powered insights for strategic investment decisions.",
      },
    ],
    technologies: [
      {
        icon: FaCode,
        title: "Smart Contract Infrastructure",
        description: "Robust and secure smart contract architecture.",
      },
      {
        icon: FaNetworkWired,
        title: "Distributed Network",
        description: "Highly scalable and resilient blockchain infrastructure.",
      },
    ],
    roadmap: [
      { phase: "Q1 2024", milestone: "Network Concept & Initial Design" },
      { phase: "Q2 2024", milestone: "Testnet Development" },
      { phase: "Q3 2024", milestone: "Initial Protocol Launch" },
      { phase: "Q4 2024", milestone: "Full Mainnet Deployment" },
    ],
  };

  const renderSection = () => {
    switch (activeSection) {
      case "features":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {networkData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 hover:border-green-300 transition-all"
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="text-green-400 text-3xl mr-4" />
                  <h3 className="text-xl font-semibold text-green-300">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        );
      case "technologies":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {networkData.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-bl ur-lg rounded-2xl p-6 border border-green-500/30 hover:border-green-300 transition-all"
              >
                <div className="flex items-center mb-4">
                  <tech.icon className="text-green-400 text-3xl mr-4" />
                  <h3 className="text-xl font-semibold text-green-300">
                    {tech.title}
                  </h3>
                </div>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        );
      case "roadmap":
        return (
          <div className="space-y-4">
            {networkData.roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-green-500/30 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-green-300 font-semibold">{item.phase}</h3>
                  <p className="text-gray-300">{item.milestone}</p>
                </div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <NetworkBackground />

      <div className="container mx-auto py-16 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-green-400">
            {networkData.name}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            {networkData.description}
          </p>
        </motion.div>

        <div className="flex justify-center mb-8 space-x-4">
          {["features", "technologies", "roadmap"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeSection === section
                  ? "bg-green-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
      </div>
    </div>
  );
};

export default Network;
