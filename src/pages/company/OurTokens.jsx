import React from "react";
import { motion } from "framer-motion";
import { FaCoins, FaRocket, FaShieldAlt } from "react-icons/fa";

const tokens = [
  {
    name: "Vault Token (VT)",
    symbol: "VT",
    description:
      "The native utility token of the VaultChain ecosystem, used for governance and staking.",
    icon: FaCoins,
    details: [
      { label: "Total Supply", value: "1,000,000,000 VT" },
      { label: "Current Price", value: "$0.50" },
      { label: "Market Cap", value: "$500,000,000" },
    ],
  },
  {
    name: "Stability Token (STB)",
    symbol: "STB",
    description:
      "A stablecoin pegged to the US Dollar, designed for seamless transactions and stability.",
    icon: FaShieldAlt,
    details: [
      { label: "Total Supply", value: "500,000,000 STB" },
      { label: "Current Price", value: "$1.00" },
      { label: "Market Cap", value: "$500,000,000" },
    ],
  },
  {
    name: "Governance Token (GT)",
    symbol: "GT",
    description:
      "A token that allows holders to participate in governance decisions within the VaultChain ecosystem.",
    icon: FaRocket,
    details: [
      { label: "Total Supply", value: "100,000,000 GT" },
      { label: "Current Price", value: "$5.00" },
      { label: "Market Cap", value: "$500,000,000" },
    ],
  },
];

const OurTokens = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent"
        >
          Our Tokens
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 mb-12">
          Explore the tokens that power the VaultChain ecosystem, designed for
          utility, stability, and governance.
        </p>
      </div>

      {/* Tokens Section */}
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
        {tokens.map((token, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl text-center hover:bg-gray-800 transition-all border border-green-800"
          >
            <token.icon className="text-green-400 mb-4 text-5xl" />
            <h3 className="text-xl font-bold mb-2 text-green-400">
              {token.name} ({token.symbol})
            </h3>
            <p className="text-gray-300 mb-4">{token.description}</p>
            <div className="space-y-2">
              {token.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="flex justify-between">
                  <span className="text-gray-400">{detail.label}:</span>
                  <span className="text-green-500">{detail.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTokens;
