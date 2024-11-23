// src/components/Loader.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Loader.css"; // Ensure this CSS file is imported

const Loader = ({ onLoadingComplete }) => {
  const letters = "VaultChain".split("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 20; // Increment progress
        } else {
          clearInterval(interval); // Clear interval when complete
          onLoadingComplete(); // Notify that loading is complete
          return prev;
        }
      });
    }, 500); // Adjust interval time as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, [onLoadingComplete]);

  return (
    <div className="loader-container">
      <div className="text-container">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="loader-letter"
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }} // Adjusted for more pronounced bounce
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 0.1,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
        <div className="progress-percentage">{progress}%</div>
      </div>
    </div>
  );
};

export default Loader;
