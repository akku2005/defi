import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCoins, FaCube, FaChartLine, FaCheckCircle } from "react-icons/fa";

// Token Configuration Types
const TOKEN_CONFIGURATIONS = [
  {
    id: 1,
    name: "Standard ERC20",
    description: "Basic token with standard functionality",
    features: ["Transferable", "Fixed Supply", "Basic Wallet Integration"],
    complexity: "Low",
    basePrice: 0.05,
    recommendedFor: "Beginners",
  },
  {
    id: 2,
    name: "Governance Token",
    description: "Advanced governance capabilities",
    features: [
      "Voting Rights",
      "Delegatable",
      "Time-Locked Transfers",
      "Role-Based Permissions",
    ],
    complexity: "High",
    basePrice: 0.35,
    recommendedFor: "DAOs & Complex Projects",
  },
  {
    id: 3,
    name: "Utility Token",
    description: "Specific ecosystem utility",
    features: ["Burnable", "Mintable", "Rewards Mechanism", "Custom Logic"],
    complexity: "Medium",
    basePrice: 0.15,
    recommendedFor: "Ecosystem Platforms",
  },
];

const TokenMinterPage = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [tokenDetails, setTokenDetails] = useState({
    name: "",
    symbol: "",
    totalSupply: "",
    decimals: 18,
    configuration: TOKEN_CONFIGURATIONS[0],
  });

  const [deploymentStatus, setDeploymentStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [calculatorValues, setCalculatorValues] = useState({
    amount: "",
    price: "",
    totalValue: null,
  });

  // Validation Logic
  const validateTokenDetails = () => {
    const errors = {};

    if (!tokenDetails.name || tokenDetails.name.length < 3) {
      errors.name = "Token name must be at least 3 characters";
    }

    if (!tokenDetails.symbol || tokenDetails.symbol.length < 2) {
      errors.symbol = "Token symbol must be at least 2 characters";
    }

    if (!tokenDetails.totalSupply || parseInt(tokenDetails.totalSupply) <= 0) {
      errors.totalSupply = "Total supply must be greater than 0";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Token Deployment Simulation
  const handleTokenDeployment = () => {
    if (validateTokenDetails()) {
      setDeploymentStatus({
        status: "pending",
        message: "Deploying Token Contract...",
      });

      setTimeout(() => {
        setDeploymentStatus({
          status: "success",
          message: "Token Successfully Deployed!",
          contractAddress: "0x" + Math.random().toString(36).substring(2, 16),
        });
      }, 3000);
    }
  };

  // Calculator Logic
  const calculateTokenValue = () => {
    const amount = parseFloat(calculatorValues.amount);
    const price = parseFloat(calculatorValues.price);

    if (!isNaN(amount) && !isNaN(price)) {
      const totalValue = amount * price;
      setCalculatorValues((prev) => ({
        ...prev,
        totalValue: totalValue.toFixed(2),
      }));
    }
  };

  // Responsive Tab Navigation
  const renderTabNavigation = () => (
    <div className="flex justify-center mb-8 overflow-x-auto">
      <div className="bg-gray-900 rounded-full p-2 flex space-x-2 md:space-x-4 shadow-2xl">
        {[
          { name: "create", icon: FaCoins },
          { name: "configurations", icon: FaCube },
          { name: "calculator", icon: FaChartLine },
        ].map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-3 md:px-6 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 text-sm md:text-base ${
              activeTab === tab.name
                ? "bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white"
                : "text-gray-400 hover:bg-gray-800"
            }`}
          >
            <tab.icon />
            <span className="hidden md:inline">
              {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  // Render Create Token Section
  const renderCreateTokenSection = () => (
    <div className="container mx-auto px-4 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-green-800/50"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
          Token Creation Wizard
        </h2>

        <div className="space-y-4 md:space-y-6">
          {/* Token Name Input */}
          <div>
            <label className="text-green-400 mb-2 block">Token Name</label>
            <input
              type="text"
              value={tokenDetails.name}
              onChange={(e) =>
                setTokenDetails({ ...tokenDetails, name: e.target.value })
              }
              placeholder="Enter Token Name"
              className="w-full p-3 md:p-4 bg-black border border-green-800 rounded-lg text-sm md:text-base text-white"
            />
            {validationErrors.name && (
              <p className="text-red-500 text-xs mt-1">
                {validationErrors.name}
              </p>
            )}
          </div>

          {/* Token Configuration Selection */}
          <div>
            <label className="text-green-400 mb-2 block">
              Token Configuration
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              {TOKEN_CONFIGURATIONS.map((config) => (
                <div
                  key={config.id}
                  onClick={() =>
                    setTokenDetails({
                      ...tokenDetails,
                      configuration: config,
                    })
                  }
                  className={`p-3 md:p-4 rounded-lg cursor-pointer transition-all text-sm ${
                    tokenDetails.configuration.id === config.id
                      ? "bg-gradient-to-r from-green-600 via-green-500 to-green-400 border-green-500"
                      : "bg-gray-800 border-gray-700 hover:bg-gray-700"
                  } border`}
                >
                  <h3 className="text-base md:text-lg font-bold text-white">
                    {config.name}
                  </h3>
                  <p className="text-gray-300 mt-1 text-xs md:text-sm">
                    {config.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Token Symbol Input */}
          <div>
            <label className="text-green-400 mb-2 block">Token Symbol</label>
            <input
              type="text"
              value={tokenDetails.symbol}
              onChange={(e) =>
                setTokenDetails({ ...tokenDetails, symbol: e.target.value })
              }
              placeholder="Enter Token Symbol"
              className="w-full p-3 md:p-4 bg-black border border-green-800 rounded-lg text-sm md:text-base text-white"
            />
            {validationErrors.symbol && (
              <p className="text-red-500 text-xs mt-1">
                {validationErrors.symbol}
              </p>
            )}
          </div>

          {/* Total Supply Input */}
          <div>
            <label className="text-green-400 mb-2 block">Total Supply</label>
            <input
              type="number"
              value={tokenDetails.totalSupply}
              onChange={(e) =>
                setTokenDetails({
                  ...tokenDetails,
                  totalSupply: e.target.value,
                })
              }
              placeholder="Enter Total Supply"
              className="w-full p-3 md:p-4 bg-black border border-green-800 rounded-lg text-sm md:text-base text-white"
            />
            {validationErrors.totalSupply && (
              <p className="text-red-500 text-xs mt-1">
                {validationErrors.totalSupply}
              </p>
            )}
          </div>

          {/* Deploy Button */}
          <button
            onClick={handleTokenDeployment}
            className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm md:text-base"
          >
            Deploy Token
          </button>

          {/* Deployment Status */}
          {deploymentStatus && (
            <div
              className={`mt-4 text-center ${
                deploymentStatus.status === "success"
                  ? "text-green-400"
                  : "text-yellow-400"
              }`}
            >
              <p className="font-bold">{deploymentStatus.message}</p>
              {deploymentStatus.contractAddress && (
                <p className="mt-2 text-sm">
                  Contract Address: {deploymentStatus.contractAddress}
                </p>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );

  // Render Token Configurations Section
  const renderTokenConfigurationsSection = () => (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-green-800/50"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
          Token Configurations
        </h2>
        <div className="space-y-4">
          {TOKEN_CONFIGURATIONS.map((config) => (
            <div key={config.id} className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold text-white">{config.name}</h3>
              <p className="text-gray-300 mt-2">{config.description}</p>
              <ul className="text-gray-300 mt-2">
                {config.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-white">Complexity: {config.complexity}</p>
              <p className="mt-1 text-white">
                Base Price: ${config.basePrice.toFixed(2)}
              </p>
              <p className="mt-1 text-white">
                Recommended For: {config.recommendedFor}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  // Render Token Value Calculator Section
  const renderTokenValueCalculatorSection = () => (
    <div className="container mx-auto px-4 max-w-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-green -800/50"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
          Token Value Calculator
        </h2>
        <form className="space-y-4">
          <div>
            <label className="text-green-400 mb-2 block">Token Amount</label>
            <input
              type="number"
              value={calculatorValues.amount}
              onChange={(e) =>
                setCalculatorValues({
                  ...calculatorValues,
                  amount: e.target.value,
                })
              }
              placeholder="Enter Amount of Tokens"
              className="w-full p-3 md:p-4 bg-black border border-green-800 rounded-lg text-sm md:text-base text-white"
            />
          </div>
          <div>
            <label className="text-green-400 mb-2 block">Token Price</label>
            <input
              type="number"
              value={calculatorValues.price}
              onChange={(e) =>
                setCalculatorValues({
                  ...calculatorValues,
                  price: e.target.value,
                })
              }
              placeholder="Enter Price per Token"
              className="w-full p-3 md:p-4 bg-black border border-green-800 rounded-lg text-sm md:text-base text-white"
            />
          </div>
          <button
            type="button"
            onClick={calculateTokenValue}
            className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm md:text-base"
          >
            Calculate Total Value
          </button>
          {calculatorValues.totalValue !== null && (
            <div className="mt-4 text-center text-white">
              <p className="font-bold">
                Total Value: ${calculatorValues.totalValue}
              </p>
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent"
        >
          Token Minter
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 mb-12">
          Create custom blockchain tokens with advanced configuration and
          deployment options
        </p>
      </div>

      {/* Navigation Tabs */}
      {renderTabNavigation()}

      {/* Render Active Tab Content */}
      {activeTab === "create" && renderCreateTokenSection()}
      {activeTab === "configurations" && renderTokenConfigurationsSection()}
      {activeTab === "calculator" && renderTokenValueCalculatorSection()}
    </div>
  );
};

export default TokenMinterPage;
