import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWallet,
  FaLock,
  FaChartLine,
  FaRocket,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";

// Particle Background Component
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 200;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.color = `hsla(${Math.random() * 360}, 70%, 60%, 0.6)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
};

// Product Page Component
const ProductPage = () => {
  const [activeSection, setActiveSection] = useState("features");

  const productData = {
    name: "VaultChain",
    tagline: "Revolutionizing Decentralized Finance Management",
    description:
      "VaultChain is your trusted companion in the world of decentralized finance. Offering innovative portfolio management, AI-driven investment strategies, and cross-chain interoperability.",

    keyFeatures: [
      {
        icon: FaWallet,
        title: "Comprehensive Portfolio Management",
        description:
          "Unified dashboard to track, analyze, and optimize DeFi investments.",
        color: "text-blue-400",
      },
      {
        icon: FaLock,
        title: "Institution-Grade Security",
        description:
          "Advanced multi-chain security protocols protecting your assets.",
        color: "text-green-400",
      },
      {
        icon: FaChartLine,
        title: "AI-Driven Insights",
        description:
          "Machine learning models for data-backed investment decisions.",
        color: "text-purple-400",
      },
      {
        icon: FaRocket,
        title: "Cross-Chain Compatibility",
        description:
          "Seamless transactions across multiple blockchain networks.",
        color: "text-red-400",
      },
      {
        icon: FaShieldAlt,
        title: "Compliance Tools",
        description: "Built-in regulatory compliance and risk management.",
        color: "text-yellow-400",
      },
      {
        icon: FaCode,
        title: "Open-Source Infrastructure",
        description: "Transparent, community-driven development approach.",
        color: "text-indigo-400",
      },
    ],

    technicalSpecs: {
      transactionSpeed: "Up to 150,000 TPS",
      multiChainSupport: "Ethereum, Binance Smart Chain, Polygon",
      securityProtocols: "Multi-signature, Hardware Wallet Integration",
      aiModelAccuracy: "95% Predictive Investment Accuracy",
    },

    roadmap: [
      { phase: "Conceptualization", year: 2023, status: "Completed" },
      { phase: "Prototype Development", year: 2024, status: "In Progress" },
      { phase: "Public Beta", year: 2025, status: "Upcoming" },
      { phase: "Global Expansion", year: 2026, status: "Planned" },
    ],
  };

  const renderSection = () => {
    switch (activeSection) {
      case "features":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {productData.keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/60 p-6 rounded-xl border border-white/10 hover:border-green-500/30 transition-all"
              >
                <div className="flex items-center mb-4">
                  <feature.icon className={`${feature.color} text-4xl mr-4`} />
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        );

      case "specs":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {Object.entries(productData.technicalSpecs).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-800/60 p-6 rounded-xl border border-green-500/20"
              >
                <h4 className="text-green-400 font-semibold mb-2 uppercase">
                  {key.replace(/([A-Z])/g, " $1")}
                </h4>
                <p className="text-white">{value}</p>
              </div>
            ))}
          </motion.div>
        );

      case "roadmap":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {productData.roadmap.map((stage, index) => (
              <div
                key={index}
                className="bg-gray-800/60 p-6 rounded-xl border border-white/10 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-bold text-green-400">
                    {stage.phase}
                  </h3>
                  <span className="text-gray-300">{stage.milestone}</span>
                </div>
                <span className="text-white font-semibold">{stage.year}</span>
              </div>
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <div className="container mx-auto relative z-10 py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            {productData.name}
          </h1>
          <h2 className="text-xl sm:text-3xl text-green-300 mt-2">
            {productData.tagline}
          </h2>
          <p className="text-gray-300 mt-4">{productData.description}</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center space-x-3 sm:space-x-6 mb-8">
          {["features", "specs", "roadmap"].map((section) => (
            <motion.button
              key={section}
              onClick={() => setActiveSection(section)}
              whileHover={{ scale: 1.1 }}
              className={`px-6 py-3 rounded-lg transition ${
                activeSection === section
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Section Content */}
        <div>{renderSection()}</div>
      </div>
    </div>
  );
};

export default ProductPage;
