import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaCode,
  FaTerminal,
  FaQuestionCircle,
  FaCopy,
  FaCheckCircle,
} from "react-icons/fa";

const DocumentationSections = [
  {
    category: "Getting Started",
    items: [
      {
        title: "Installation",
        description: "Quick setup guide for VaultChain SDK",
        code: "npm install vaultchain-sdk",
        icon: FaTerminal,
      },
      {
        title: "Configuration",
        description: "Initial configuration and environment setup",
        code: "vaultchain init --network mainnet",
        icon: FaCode,
      },
    ],
  },
  {
    category: "Core Concepts",
    items: [
      {
        title: "Blockchain Architecture",
        description: "Overview of VaultChain's decentralized infrastructure",
        icon: FaBook,
      },
      {
        title: "Smart Contract Integration",
        description: "Deploying and interacting with smart contracts",
        code: `
// Deploy Smart Contract
const contract = await vaultchain.deploy({
  type: 'ERC20',
  params: {...}
})
        `,
        icon: FaCode,
      },
    ],
  },
];

const FAQItems = [
  {
    question: "What is VaultChain?",
    answer:
      "VaultChain is a next-generation blockchain platform providing secure, scalable decentralized solutions.",
  },
  {
    question: "How do I get started?",
    answer:
      "Begin by installing our SDK and exploring our comprehensive documentation and developer resources.",
  },
];

const Documentation = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent"
        >
          VaultChain Documentation
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 mb-12">
          Comprehensive guide to understanding and implementing VaultChain's
          blockchain technology and developer tools.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-900 rounded-full p-2 flex space-x-4">
          {["overview", "guides", "reference", "faq"].map((tab) => (
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

      {/* Documentation Sections */}
      {activeTab === "overview" && (
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
          {DocumentationSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl border border-green-800"
            >
              <h2 className="text-2xl font-bold mb-4 text-green-400">
                {section.category}
              </h2>
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="mb-4 p-4 bg-black rounded-lg border border-green-900"
                >
                  <div className="flex items-center mb-2">
                    <item.icon className="text-green-500 mr-3 text-2xl" />
                    <h3 className="text-xl font-semibold text-green-400">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-2">{item.description}</p>
                  {item.code && (
                    <div className="relative">
                      <pre className="bg-gray-900 p-3 rounded-lg text-sm overflow-x-auto">
                        <code className="text-green-300">{item.code}</code>
                      </pre>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            item.code,
                            `${sectionIndex}-${itemIndex}`
                          )
                        }
                        className="absolute top-2 right-2 text-gray-400 hover:text-green-500"
                      >
                        {copiedCode === `${sectionIndex}-${itemIndex}` ? (
                          <FaCheckCircle />
                        ) : (
                          <FaCopy />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      )}

      {/* FAQ Section */}
      {activeTab === "faq" && (
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            {FAQItems.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-green-800"
              >
                <div className="flex items-center mb-3">
                  <FaQuestionCircle className="text-green-500 mr-3 text-2xl" />
                  <h3 className="text-xl font-semibold text-green-400">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Additional Sections for Guides and Reference can be added similarly */}
    </div>
  );
};

export default Documentation;
