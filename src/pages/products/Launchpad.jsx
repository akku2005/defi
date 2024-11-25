// src/pages/Launchpad.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaShieldAlt, FaCoins } from "react-icons/fa";

const LaunchpadFeatures = [
  {
    icon: FaRocket,
    title: "Project Incubation",
    description:
      "Comprehensive support for blockchain startups from concept to launch.",
    color: "text-green-400",
  },
  {
    icon: FaChartLine,
    title: "Token Fundraising",
    description:
      "Secure and transparent fundraising mechanisms for innovative projects.",
    color: "text-green-300",
  },
  {
    icon: FaShieldAlt,
    title: "Rigorous Vetting",
    description:
      "Extensive due diligence to ensure project quality and investor protection.",
    color: "text-green-500",
  },
  {
    icon: FaCoins,
    title: "Tokenomics Optimization",
    description:
      "Advanced token economic modeling and distribution strategies.",
    color: "text-green-600",
  },
];

const LaunchpadProjects = [
  {
    name: "CryptoFin",
    description: "Decentralized financial infrastructure",
    raised: "$2.5M",
    status: "Completed",
    logo: "/path/to/cryptofin-logo.png",
  },
  {
    name: "BlockChain AI",
    description: "AI-powered blockchain solutions",
    raised: "$1.8M",
    status: "Ongoing",
    logo: "/path/to/blockchain-ai-logo.png",
  },
  {
    name: "GreenToken",
    description: "Sustainable blockchain ecosystem",
    raised: "$3.2M",
    status: "Upcoming",
    logo: "/path/to/greentoken-logo.png",
  },
];

const Launchpad = () => {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent"
        >
          VaultChain Launchpad
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 mb-12">
          Empowering blockchain innovation through strategic incubation,
          funding, and comprehensive ecosystem support.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-900 rounded-full p-2 flex space-x-4">
          {["features", "projects", "apply"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white"
                  : "text-gray-400 hover:bg-gray-800"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Content Sections */}
      {activeTab === "features" && (
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LaunchpadFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl text-center hover:bg-gray-800 transition-all border border-gray-800 hover:border-green-600"
            >
              <feature.icon
                className={`mx-auto text-5xl mb-4 ${feature.color}`}
              />
              <h3 className="text-xl font-bold mb-3 text-green-400">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === "projects" && (
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {LaunchpadProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl hover:bg-gray-800 transition-all border border-gray-800 hover:border-green-600"
            >
              <img
                src={project.logo}
                alt={project.name}
                className="mx-auto mb-4 w-24 h-24 object-contain"
              />
              <h3 className="text-xl font-bold text-center mb-2 text-green-400">
                {project.name}
              </h3>
              <p className="text-gray-400 text-center mb-4">
                {project.description}
              </p>
              <div className="flex justify-between">
                <span className="text-green-500">Raised: {project.raised}</span>
                <span
                  className={`
                  px-3 py-1 rounded-full text-sm
                  ${
                    project.status === "Completed"
                      ? "bg-green-600"
                      : project.status === "Ongoing"
                      ? "bg-yellow-600"
                      : "bg-blue-600"
                  }
                  text-white
                `}
                >
                  {project.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === "apply" && (
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-8 rounded-xl border border-green-800"
          >
            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
              Apply for Launchpad
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Project Name"
                className="w-full p-3 bg-black border border-green-800 rounded-lg focus:outline-none focus:border-green-600"
              />
              <textarea
                placeholder="Project Description"
                className="w-full p-3 bg-black border border-green-800 rounded-lg h-32 focus:outline-none focus:border-green-600"
              />
              <input
                type="email"
                placeholder="Contact Email"
                className="w-full p-3 bg-black border border-green-800 rounded-lg focus:outline-none focus:border-green-600"
              />
              <button className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 py-3 rounded-lg hover:bg-gradient-to-l transition-colors">
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Launchpad;
