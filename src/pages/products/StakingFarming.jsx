import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCoins,
  FaChartLine,
  FaLock,
  FaChartPie,
  FaPercent,
  FaFireAlt,
  FaCalculator,
  FaWallet,
} from "react-icons/fa";

// Staking Pools Configuration
const STAKING_POOLS = [
  {
    id: 1,
    name: "Core Vault Pool",
    apy: 25.5,
    totalStaked: 5420000,
    minStake: 100,
    lockPeriod: "30 Days",
    icon: FaCoins,
    gradient: "from-green-500 to-green-700",
    rewards: [
      { type: "Daily", rate: 0.85 },
      { type: "Monthly", rate: 25.5 },
    ],
  },
  {
    id: 2,
    name: "Liquidity Provider Pool",
    apy: 45.2,
    totalStaked: 3210000,
    minStake: 500,
    lockPeriod: "60 Days",
    icon: FaChartLine,
    gradient: "from-blue-500 to-blue-700",
    rewards: [
      { type: "Daily", rate: 1.25 },
      { type: "Monthly", rate: 45.2 },
    ],
  },
  {
    id: 3,
    name: "Long-Term Hodlers Pool",
    apy: 65.7,
    totalStaked: 2100000,
    minStake: 1000,
    lockPeriod: "90 Days",
    icon: FaLock,
    gradient: "from-purple-500 to-purple-700",
    rewards: [
      { type: "Daily", rate: 1.75 },
      { type: "Monthly", rate: 65.7 },
    ],
  },
];

const StakingFarming = () => {
  const [activeTab, setActiveTab] = useState("staking");
  const [stakingAmount, setStakingAmount] = useState("");
  const [selectedPool, setSelectedPool] = useState(STAKING_POOLS[0]);
  const [estimatedRewards, setEstimatedRewards] = useState(null);

  // Rewards Calculation Function
  const calculateRewards = () => {
    if (!stakingAmount) return;

    const dailyRate = selectedPool.rewards.find((r) => r.type === "Daily").rate;
    const monthlyReward = (stakingAmount * dailyRate) / 100;

    setEstimatedRewards({
      daily: monthlyReward / 30,
      monthly: monthlyReward,
      yearly: monthlyReward * 12,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent"
        >
          Staking & Farming
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 mb-12">
          Maximize your crypto earnings through advanced staking strategies and
          yield farming opportunities
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-900 rounded-full p-2 flex space-x-4 shadow-2xl">
          {[
            { name: "staking", icon: FaCoins },
            { name: "farming", icon: FaChartPie },
            { name: "calculator", icon: FaCalculator },
          ].map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-6 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                activeTab === tab.name
                  ? "bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white"
                  : "text-gray-400 hover:bg-gray-800"
              }`}
            >
              <tab.icon />
              <span>
                {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Staking Pools Section */}
      {activeTab === "staking" && (
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {STAKING_POOLS.map((pool) => (
            <motion.div
              key={pool.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`bg-gradient-to-br ${pool.gradient} p-6 rounded-2xl shadow-2xl transform transition-all hover:scale-105`}
            >
              <div className="flex justify-between items-center mb-6">
                <pool.icon className="text-6xl text-white opacity-80" />
                <span className="text-2xl font-bold text-white">
                  {pool.apy}% APY
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {pool.name}
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Total Staked",
                    value: `$${pool.totalStaked.toLocaleString()}`,
                  },
                  { label: "Minimum Stake", value: `${pool.minStake} VAULT` },
                  { label: "Lock Period", value: pool.lockPeriod },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b border-white/20 pb-2"
                  >
                    <span className="text-white/70">{item.label}</span>
                    <span className="font-bold text-white">{item.value}</span>
                  </div>
                ))}
                <button className="w-full mt-4 bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                  Stake Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Rewards Calculator Section */}
      {activeTab === "calculator" && (
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-green-800/50"
          >
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
              Rewards Calculator
            </h2>
            <form className="space-y-6">
              <div>
                <label className="text-green-400 mb-2  flex items  items-center">
                  Staking Amount
                </label>
                <input
                  type="number"
                  value={stakingAmount}
                  onChange={(e) => setStakingAmount(e.target.value)}
                  placeholder="Enter Amount to Stake"
                  className="w-full p-4 bg-black border border-green-800 rounded-lg focus:outline-none focus:border-green-600"
                />
              </div>
              <div>
                <label className="text-green-400 mb-2 block">Select Pool</label>
                <select
                  value={selectedPool.name}
                  onChange={(e) => {
                    const pool = STAKING_POOLS.find(
                      (p) => p.name === e.target.value
                    );
                    setSelectedPool(pool);
                  }}
                  className="w-full p-4 bg-black border border-green-800 rounded-lg focus:outline-none focus:border-green-600"
                >
                  {STAKING_POOLS.map((pool) => (
                    <option key={pool.id} value={pool.name}>
                      {pool.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                onClick={calculateRewards}
                className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Calculate Rewards
              </button>
            </form>
            {estimatedRewards && (
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-white">
                  Estimated Rewards
                </h3>
                <p className="text-gray-300">
                  Daily: ${estimatedRewards.daily.toFixed(2)}
                </p>
                <p className="text-gray-300">
                  Monthly: ${estimatedRewards.monthly.toFixed(2)}
                </p>
                <p className="text-gray-300">
                  Yearly: ${estimatedRewards.yearly.toFixed(2)}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default StakingFarming;
