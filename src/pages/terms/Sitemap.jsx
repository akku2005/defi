import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSitemap,
  FaHome,
  FaBook,
  FaCoins,
  FaNetworkWired,
  FaShieldAlt,
  FaQuestionCircle,
  FaLink,
} from "react-icons/fa";

const SitemapLinks = [
  {
    category: "Main Navigation",
    links: [
      {
        name: "Home",
        path: "/",
        icon: FaHome,
        description:
          "Welcome to VaultChain - Your gateway to decentralized solutions",
      },
      {
        name: "Documentation",
        path: "/docs",
        icon: FaBook,
        description: "Comprehensive guides and technical references",
      },
      {
        name: "Our Tokens",
        path: "/tokens",
        icon: FaCoins,
        description: "Explore VaultChain's native tokens and ecosystem",
      },
    ],
  },
  {
    category: "Network & Infrastructure",
    links: [
      {
        name: "Network",
        path: "/network",
        icon: FaNetworkWired,
        description: "Detailed insights into VaultChain's blockchain network",
      },
      {
        name: "Security",
        path: "/security",
        icon: FaShieldAlt,
        description: "Learn about our advanced security protocols",
      },
    ],
  },
  {
    category: "Support & Legal",
    links: [
      {
        name: "FAQ",
        path: "/faq",
        icon: FaQuestionCircle,
        description: "Frequently asked questions and quick answers",
      },
      {
        name: "Terms of Service",
        path: "/terms",
        icon: FaLink,
        description: "Legal terms and conditions for using VaultChain",
      },
      {
        name: "Privacy Policy",
        path: "/privacy",
        icon: FaShieldAlt,
        description: "How we protect and manage your personal information",
      },
    ],
  },
];

const Sitemap = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLinks = SitemapLinks.map((category) => ({
    ...category,
    links: category.links.filter(
      (link) =>
        link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.description.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter((category) => category.links.length > 0);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent"
        >
          VaultChain Sitemap
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 mb-12">
          Navigate through VaultChain's comprehensive ecosystem and find exactly
          what you're looking for.
        </p>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 mb-12 max-w-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search sitemap..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 bg-gray-900 border border-green-800 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <FaSitemap className="absolute right-4 top-4 text-green-500" />
        </div>
      </div>

      {/* Sitemap Links */}
      <div className="container mx-auto px-4">
        {filteredLinks.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-green-400 border-b border-green-800 pb-2">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {category.links.map((link, linkIndex) => (
                <motion.div
                  key={linkIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: linkIndex * 0.1 }}
                  className="bg-gray-900 p-4 rounded-xl border border-green-800 hover:bg-gray-800 transition-all"
                >
                  <div className="flex items-center mb-2">
                    <link.icon className="text-green-500 mr-3 text-2xl" />
                    <h3 className="text-xl font-semibold text-green-400">
                      {link.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">{link.description}</p>
                  <a
                    href={link.path}
                    className="text-green-500 hover:underline mt-2 inline-block"
                  >
                    Visit Page
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {filteredLinks.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No results found. Try a different search term.
          </div>
        )}
      </div>
    </div>
  );
};

export default Sitemap;
