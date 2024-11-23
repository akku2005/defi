import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import FaceImage from "../assets/images/FaceImage2.png";
const teamMembers = [
  {
    id: 1,
    name: "Akash",
    role: "FOUNDER",
    character: "A",
    bio: "Founder of VaultChain, revolutionizing Decentralized Finance with cutting-edge multi-chain technology and AI-driven investment strategies.",
    avatar: FaceImage,
    socialLinks: {
      linkedin: "https://linkedin.com/in/akashkumar",
      twitter: "https://twitter.com/akashkumar",
      github: "https://github.com/akashkumar",
    },
    skills: ["DeFi", "Blockchain", "AI", "Leadership"],
  },
];

const InteractiveBubbleBackground = ({ mousePosition }) => {
  const generateBubbles = () => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 150 + 50,
      color: `rgba(34, 197, 94, ${Math.random() * 0.2 + 0.1})`, // Green theme
      speed: Math.random() * 0.5 + 0.1,
    }));
  };

  const bubbles = useRef(generateBubbles());

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none ">
      {bubbles.current.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full blur-xl"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            backgroundColor: bubble.color,
          }}
          animate={{
            x: mousePosition.x / 50,
            y: mousePosition.y / 50,
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: bubble.speed * 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const currentMember = teamMembers[currentIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const memberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Interactive Background */}
      <InteractiveBubbleBackground mousePosition={mousePosition} />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-green-900/50 to-black/70 opacity-90 pointer-events-none" />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col-reverse md:flex-row items-center justify-center min-h-screen">
        {/* Member Details Section */}
        <motion.div
          key={currentMember.id}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 text-center md:text-left px-4"
        >
          {/* Name */}
          <motion.h2
            variants={memberVariants}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-2"
          >
            {currentMember.name}
          </motion.h2>

          {/* Role */}
          <motion.p
            variants={memberVariants}
            className="text-xl text-green-300 mb-4"
          >
            {currentMember.role}
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={memberVariants}
            className="text-gray-300 mb-6 max-w-md mx-auto md:mx-0"
          >
            {currentMember.bio}
          </motion.p>

          {/* Skills Chips */}
          <motion.div
            variants={memberVariants}
            className="flex flex-wrap justify-center md:justify-start gap-2 mb-6"
          >
            {currentMember.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-700/30 text-green-300 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons and Social Links */}
          <motion.div
            variants={memberVariants}
            className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4"
          >
            {/* Profile Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-44 py-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-full hover:from-green-500 hover:via-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center"
            >
              View Profile
            </motion.button>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {Object.entries(currentMember.socialLinks).map(
                ([platform, link]) => {
                  const IconComponent =
                    platform === "linkedin"
                      ? FaLinkedin
                      : platform === "twitter"
                      ? FaTwitter
                      : FaGithub;
                  return (
                    <motion.a
                      key={platform}
                      href={link}
                      whileHover={{ scale: 1.2 }}
                      className="text-green-400 hover:text-green-200"
                    >
                      <IconComponent className="h-6 w-6" />
                    </motion.a>
                  );
                }
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Team Member Carousel */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center mb-8 md:mb-0">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevMember}
            className="absolute left-0 md:left-10 z-10 text-green-400 text-4xl"
          >
            &#8249;
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextMember}
            className="absolute right-0 md:right-10 z-10 text-green-400 text-4xl"
          >
            &#8250;
          </motion.button>

          {/* Member Avatar */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMember.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl ${currentMember.background}`}
            >
              <img
                src={currentMember.avatar}
                alt={currentMember.name}
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </div>
  );
};

export default Team;
