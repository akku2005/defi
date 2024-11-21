import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/images/Firefly.png"; // Adjust the path to your image

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", prefix = "" }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 2000;
    const start = 0;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end]);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-5xl font-extrabold text-green-400 tracking-wider"
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  );
};

const Portfolio = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "40%", // Reduced from cover to 80%
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // Prevent image from repeating
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, index) => {
          const size = Math.random() * 10 + 5; // Varied snowball sizes
          const animationDuration = Math.random() * 10 + 8;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: Math.random() * window.innerWidth,
                y: -40, // Start from above the screen
                scale: 0.5,
                rotate: Math.random() * 360,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth + 100,
                  Math.random() * window.innerWidth,
                ],
                y: [-50, window.innerHeight + 50, window.innerHeight + 100],
                scale: [0.5, 1, 0.7],
                rotate: [0, 360, 720],
              }}
              transition={{
                duration: animationDuration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
              className="absolute rounded-full bg-white"
            />
          );
        })}
      </div>
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      {/* Glow Effects */}
      <div className="absolute top-40 right-40 w-[800px] h-[200px] bg-green-600/20 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[300px] bg-green-600/10 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-40 left-44 w-[200px] h-[300px] bg-gradient-to-b from-green-600 via-green-500 to-green-400 rounded-full blur-[120px] z-0"></div>
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-white text-center w-[90%] max-w-4xl p-8 bg-transparent"
      >
        {/* Header Section */}
        <div className="mb-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
            VaultChain: Revolutionizing DeFi Management
          </h1>
          <p className="text-sm text-green-200 max-w-3xl mx-auto">
            Empowering crypto investors, traders, and firms with cutting-edge
            tools for portfolio management, AI-driven investment strategies, and
            multi-chain support. Seamlessly secure, manage, and grow your
            digital assets with VaultChain.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Total Value Locked */}
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 ">
            <p className="text-sm uppercase tracking-wide text-green-400 mb-2">
              Total Value Locked
            </p>
            <AnimatedCounter
              end={388}
              suffix="M"
              prefix="$"
              className="text-green-400"
            />
            <p className="text-xs text-green-300/70 mt-2">
              Secured across decentralized finance platforms.
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 ">
            <p className="text-sm uppercase tracking-wide text-green-400 mb-2">
              Partnered Projects
            </p>
            <AnimatedCounter end={52} suffix="K+" className="text-green-400" />
            <p className="text-xs text-green-300/70 mt-2">
              Collaborations with innovative DeFi protocols and platforms.
            </p>
          </motion.div>

          {/* Users */}
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 ">
            <p className="text-sm uppercase tracking-wide text-green-400 mb-2">
              Active Users
            </p>
            <AnimatedCounter end={1} suffix=".3M" className="text-green-400" />
            <p className="text-xs text-green-300/70 mt-2">
              Empowering a global community of crypto investors and traders.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
