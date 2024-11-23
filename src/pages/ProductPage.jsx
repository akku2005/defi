import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaWallet, FaLock, FaChartLine } from "react-icons/fa";

// Interactive Particle Background
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

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
        this.color = `hsla(${Math.random() * 360}, 70%, 60%, 0.5)`;
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

// VaultChain Product Page
const ProductPage = () => {
  const [activeSection, setActiveSection] = useState("features");

  const productData = {
    name: "VaultChain",
    tagline: "Revolutionizing Decentralized Finance Management",
    description:
      "VaultChain is your trusted companion in the world of decentralized finance. Offering innovative portfolio management, AI-driven investment strategies, and cross-chain interoperability, VaultChain empowers individuals and institutions to stay ahead in the DeFi space.",

    keyFeatures: [
      {
        icon: FaWallet,
        title: "Comprehensive Portfolio Management",
        description:
          "Track, analyze, and optimize your DeFi investments in one unified dashboard.",
      },
      {
        icon: FaLock,
        title: "Institution-Grade Security",
        description:
          "Advanced multi-chain security protocols to protect your assets and data.",
      },
      {
        icon: FaChartLine,
        title: "AI-Driven Investment Insights",
        description:
          "Leverage machine learning models to make informed, data-backed investment decisions.",
      },
    ],

    technicalSpecs: {
      transactionSpeed: "Up to 150,000 TPS",
      multiChainSupport: "Supports Ethereum, Binance Smart Chain, and more",
      energyEfficiency: "Carbon-neutral infrastructure",
      compliance: "Integrated regulatory compliance tools",
    },

    roadmap: [
      {
        phase: "Conceptualization",
        year: 2023,
        milestone: "Ideation and market research for VaultChain",
      },
      {
        phase: "Prototype Development",
        year: 2024,
        milestone:
          "Launch of beta version with multi-chain support and basic portfolio tracking",
      },
      {
        phase: "Public Release",
        year: 2025,
        milestone:
          "Full-scale launch with AI-driven features and institutional tools",
      },
      {
        phase: "Global Expansion",
        year: 2026,
        milestone: "Onboard millions of users and enhance scalability",
      },
    ],
  };

  const renderSection = () => {
    switch (activeSection) {
      case "features":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {productData.keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/40 backdrop-blur-md p-6 rounded-lg border border-white/20 shadow-lg hover:shadow-green-500/20 transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <feature.icon className="text-green-400 text-3xl" />
                  <h3 className="text-xl font-bold text-green-300">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 mt-2">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        );

      case "specs":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-800 p-8 rounded-lg shadow-md grid gap-6"
          >
            {Object.entries(productData.technicalSpecs).map(([key, value]) => (
              <div key={key} className="border-b border-green-500/30 pb-4">
                <h4 className="text-green-300 font-semibold capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </h4>
                <p className="text-gray-200">{value}</p>
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
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 p-6 rounded-lg border border-green-500/30 shadow-md flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-bold text-green-300">
                    {stage.phase}
                  </h3>
                  <p className="text-gray-300">{stage.milestone}</p>
                </div>
                <span className="text-white font-semibold">{stage.year}</span>
              </motion.div>
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
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            {productData.name}
          </h1>
          <h2 className="text-lg sm:text-2xl text-green-300 mt-2">
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
              className={`px-4 py-2 rounded-lg transition ${
                activeSection === section
                  ? "bg-green-600 text-white"
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
