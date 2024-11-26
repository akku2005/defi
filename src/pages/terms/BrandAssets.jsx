import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCopy, FaDownload } from "react-icons/fa";

const BrandAssets = () => {
  const [copiedColor, setCopiedColor] = useState(null);

  const colorPalette = [
    { name: "Primary Green", hex: "#00F260", rgb: "rgb(0, 242, 96)" },
    { name: "Dark Background", hex: "#000000", rgb: "rgb(0, 0, 0)" },
    { name: "Accent Green", hex: "#00F260", rgb: "rgb(0, 242, 96)" },
    { name: "Gray Neutral", hex: "#1A1A1A", rgb: "rgb(26, 26, 26)" },
  ];

  const logoVariants = [
    { name: "Full Logo", type: "Full Color", formats: ["PNG", "SVG"] },
    { name: "Compact Logo", type: "White", formats: ["PNG", "SVG"] },
    { name: "Icon", type: "Monochrome", formats: ["PNG", "SVG"] },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
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
          Brand Assets
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 mb-12">
          Official brand guidelines and downloadable assets for VaultChain
        </p>
      </div>

      {/* Brand Assets Content */}
      <div className="container mx-auto px-4 space-y-12">
        {/* Color Palette Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 p-8 rounded-xl border border-green-800"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-6">
            Color Palette
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {colorPalette.map((color) => (
              <div
                key={color.hex}
                className="p-4 rounded-lg flex flex-col items-center"
                style={{ backgroundColor: color.hex }}
              >
                <div className="text-white text-center">
                  <p className="font-bold">{color.name}</p>
                  <p>{color.hex}</p>
                  <p>{color.rgb}</p>
                </div>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => copyToClipboard(color.hex)}
                    className="bg-black/50 p-2 rounded hover:bg-black/70"
                  >
                    <FaCopy className="text-white" />
                  </button>
                  {copiedColor === color.hex && (
                    <span className="text-green-400">Copied!</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Logo Variants Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 p-8 rounded-xl border border-green-800"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-6">
            Logo Variants
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {logoVariants.map((logo) => (
              <div
                key={logo.name}
                className="bg-gray-800 p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  {logo.name}
                </h3>
                <p className="text-gray-300 mb-4">{logo.type} Version</p>
                <div className="flex justify-center space-x-4">
                  {logo.formats.map((format) => (
                    <button
                      key={format}
                      className="bg-green-600 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-green-700"
                    >
                      <FaDownload />
                      <span>{format}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Usage Guidelines Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 p-8 rounded-xl border border-green-800"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-6">
            Brand Usage Guidelines
          </h2>
          <div className="text-gray-300 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                Logo Spacing
              </h3>
              <p>
                Always maintain a clear space around the logo equal to the
                height of the letter 'V'.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                Color Restrictions
              </h3>
              <p>
                Do not alter the logo colors. Use only approved color variants.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                Minimum Size
              </h3>
              <p>
                Ensure the logo is always legible. Minimum width: 100px for
                digital, 25mm for print.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandAssets;
