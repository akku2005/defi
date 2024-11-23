import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaExchangeAlt,
  FaChartLine,
} from "react-icons/fa";

// Network Page Component
const Network = () => {
  const networkData = {
    name: "VaultChain Network",
    description:
      "A secure and scalable decentralized finance network designed to empower users with complete control over their assets.",
    tagline: "Empowering Your Financial Freedom",
    features: [
      {
        icon: FaShieldAlt,
        title: "Robust Security",
        description:
          "Utilizes advanced cryptographic techniques to ensure the safety of user funds.",
      },
      {
        icon: FaLock,
        title: "Decentralized Governance",
        description:
          "Empowers users to participate in decision-making processes through a transparent voting system.",
      },
      {
        icon: FaExchangeAlt,
        title: "Multi-Asset Support",
        description:
          "Supports a wide range of cryptocurrencies and tokens for seamless trading and liquidity.",
      },
      {
        icon: FaChartLine,
        title: "Real-Time Analytics",
        description:
          "Provides users with real-time data and insights to make informed investment decisions.",
      },
    ],
    supportedAssets: [
      "Bitcoin (BTC)",
      "Ethereum (ETH)",
      "Tether (USDT)",
      "Binance Coin (BNB)",
      "Cardano (ADA)",
      "Solana (SOL)",
    ],
    roadmap: [
      {
        phase: "Q1 2023",
        milestone: "Launch of VaultChain Testnet",
      },
      {
        phase: "Q2 2023",
        milestone: "Integration of Multi-Asset Support",
      },
      {
        phase: "Q3 2023",
        milestone: "Launch of VaultChain Mainnet",
      },
      {
        phase: "Q4 2023",
        milestone: "Introduction of Governance Features",
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="container mx-auto py-16 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-green-400">
            {networkData.name}
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            {networkData.description}
          </p>
          <p className="text-lg text-gray-400 italic mt-2">
            {networkData.tagline}
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {networkData.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="text-green-400 text-4xl mr-2" />
                <h3 className="text-xl font-bold text-green-300">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Supported Assets Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-4 text-center">
            Supported Assets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {networkData.supportedAssets.map((asset, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-lg shadow-lg"
              >
                <p className="text-gray-300 text-center">{asset}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap Section */}
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-4 text-center">
            Roadmap
          </h2>
          <div className="space-y-4">
            {networkData.roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-bold text-green-300">
                  {item.phase}
                </h3>
                <p className="text-gray-300">{item.milestone}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
