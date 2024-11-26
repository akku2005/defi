import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaGlobe,
  FaChartLine,
  FaLink,
} from "react-icons/fa";

const NetworkStats = [
  {
    icon: FaServer,
    title: "Total Nodes",
    value: "5,237",
    description: "Globally distributed network nodes ensuring decentralization",
  },
  {
    icon: FaNetworkWired,
    title: "Network Uptime",
    value: "99.99%",
    description: "Consistent and reliable blockchain infrastructure",
  },
  {
    icon: FaShieldAlt,
    title: "Security Level",
    value: "High",
    description: "Advanced cryptographic protection and consensus mechanisms",
  },
];

const NetworkFeatures = [
  {
    icon: FaGlobe,
    title: "Global Reach",
    description:
      "Seamless cross-border transactions and decentralized operations",
  },
  {
    icon: FaChartLine,
    title: "Scalability",
    description:
      "High-performance network capable of processing thousands of transactions per second",
  },
  {
    icon: FaLink,
    title: "Interoperability",
    description: "Seamless integration with multiple blockchain ecosystems",
  },
];

const NetworkNodes = [
  {
    location: "United States",
    nodes: 1237,
    percentage: 24,
  },
  {
    location: "Europe",
    nodes: 1543,
    percentage: 30,
  },
  {
    location: "Asia",
    nodes: 1456,
    percentage: 28,
  },
  {
    location: "Other Regions",
    nodes: 1001,
    percentage: 18,
  },
];

const NetworkPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent"
        >
          VaultChain Network
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 mb-12">
          A robust, secure, and decentralized blockchain network powering the
          future of digital transactions.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-900 rounded-full p-2 flex space-x-4">
          {["overview", "nodes", "performance"].map((tab) => (
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

      {/* Overview Section */}
      {activeTab === "overview" && (
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {NetworkStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-xl border border-green-800 text-center"
              >
                <stat.icon className="text-green-400 text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-300">{stat.title}</p>
                <p className="text-gray-500 text-sm mt-2">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {NetworkFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-xl border border-green-800 text-center"
              >
                <feature.icon className="text-green-400 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-400 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Nodes Section */}
      {activeTab === "nodes" && (
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 rounded-xl p-6 border border-green-800">
            <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
              Global Node Distribution
            </h2>
            {NetworkNodes.map((region, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>{region.location}</span>
                  <span>
                    {region.nodes} Nodes ({region.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${region.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Performance Section */}
      {activeTab === "performance" && (
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 p-8 rounded-xl border border-green-800"
          >
            <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
              Network Performance Metrics
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-300">Transactions per Second</span>
                <span className="text-green-400">5,000 TPS</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-300">Average Block Time</span>
                <span className="text-green-400"> 3 seconds</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-300">Latency</span>
                <span className="text-green-400">50 ms</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-300">Total Transactions</span>
                <span className="text-green-400">1,200,000+</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NetworkPage;
