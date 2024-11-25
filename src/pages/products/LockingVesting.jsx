import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLock,
  FaChartLine,
  FaCoins,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";

// Vesting Schedules Configuration
const VESTING_SCHEDULES = [
  {
    type: "Linear Vesting",
    description: "Tokens released gradually over a specified period",
    icon: FaChartLine,
    color: "text-green-400",
  },
  {
    type: "Cliff Vesting",
    description: "Initial lock-up period followed by gradual release",
    icon: FaLock,
    color: "text-blue-400",
  },
  {
    type: "Milestone-Based",
    description: "Token release tied to project milestones",
    icon: FaCalendarAlt,
    color: "text-purple-400",
  },
];

// Token Locking Features
const LOCKING_FEATURES = [
  {
    title: "Secure Token Lockup",
    description: "Advanced smart contract-based token locking mechanisms",
    icon: FaShieldAlt,
  },
  {
    title: "Flexible Vesting Options",
    description: "Customizable vesting schedules for diverse token economics",
    icon: FaCoins,
  },
];

const LockingVesting = () => {
  const [activeTab, setActiveTab] = useState("vesting");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent"
        >
          Locking & Vesting
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 mb-12">
          Sophisticated token management solutions for secure and strategic
          token distribution
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-900 rounded-full p-2 flex space-x-4">
          {["vesting", "locking", "create"].map((tab) => (
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

      {/* Vesting Schedules Section */}
      {activeTab === "vesting" && (
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {VESTING_SCHEDULES.map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl text-center hover:bg-gray-800 transition-all border border-gray-800 hover:border-green-600"
            >
              <schedule.icon
                className={`mx-auto text-5xl mb-4 ${schedule.color}`}
              />
              <h3 className="text-xl font-bold mb-3 text-green-400">
                {schedule.type}
              </h3>
              <p className="text-gray-400">{schedule.description}</p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Locking Features Section */}
      {activeTab === "locking" && (
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {LOCKING_FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl flex items-center space-x-6 hover:border-green-600 border border-transparent transition-all"
              >
                <feature.icon className="text-5xl text-green-400" />
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Create Locking/Vesting Section */}
      {activeTab === "create" && (
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-8 rounded-xl border border-green-800"
          >
            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
              Create Vesting Schedule
            </h2>
            <form className="space-y-4">
              <div>
                <label className="text-green-400 mb-2 block">
                  Token Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Token Contract Address"
                  className="w-full p-3 bg-black border border-green-800 rounded-lg focus:outline-none focus:border-green-600"
                />
              </div>
              <div>
                <label className="text-green-400 mb-2 block">
                  Vesting Type
                </label>
                <select className="w-full p-3 bg-black border border-green-800 rounded-lg focus:outline-none focus:border-green-600">
                  <option>Linear Vesting</option>
                  <option>Cliff Vesting</option>
                  <option>Milestone-Based</option>
                </select>
              </div>
              <div>
                <label className="text-green-400 mb-2 block">
                  Total Amount
                </label>
                <input
                  type="number"
                  placeholder="Enter Total Token Amount"
                  className="w-full p-3 bg-black border border-green-800 rounded-lg focus:outline-none focus:border-green-600"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Create Vesting Schedule
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LockingVesting;
