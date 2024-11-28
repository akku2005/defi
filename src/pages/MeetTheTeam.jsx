import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Avatar from "../assets/images/FaceImage.png";

// Enhanced Particle Background Component
const ParticleBackground = () => {
  const particleCount = 100;
  const particles = Array.from({ length: particleCount }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 200 + 5,
    delay: Math.random() * 1,
    color: `hsla(${Math.random() * 360}, 70%, 60%, 0.3)`, // Added color variation
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.2, 0],
            scale: [0, 1.5, 0],
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute rounded-full bg-green-500/20 blur-xl"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
        />
      ))}
    </div>
  );
};

// Team Member Card Component
const TeamMemberCard = ({ member, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      className="glass-card p-6 rounded-2xl bg-black/60 backdrop-blur-sm border border-green-600/30 relative overflow-hidden group transition-colors"
    >
      {/* Background color change on hover */}
      <motion.div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-300/20 to-green-700/10 opacity-100 group-hover:from-green-500/10 group-hover:to-green-900/20 transition-all duration-300"></motion.div>

      <div className="relative z-10">
        <motion.img
          src={member.image}
          alt={member.name}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-green-500 object-cover"
        />
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-center">
          {member.name}
        </h3>
        <p className="text-sm text-green-300 text-center mb-4">{member.role}</p>
        <p className="text-gray-300 text-center mb-6 min-h-[72px]">
          {member.description}
        </p>
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[
            {
              Icon: FaLinkedin,
              color: "text-green-500",
              href: member.socials.linkedin,
            },
            {
              Icon: FaTwitter,
              color: "text-green-500",
              href: member.socials.twitter,
            },
            {
              Icon: FaGithub,
              color: "text-green-500",
              href: member.socials.github,
            },
          ].map(({ Icon, color, href }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className={`${color} text-3xl transition-transform`}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Meet the Team Page
const MeetTheTeam = () => {
  const teamData = [
    {
      name: "Akashkumar Sahu",
      role: "Founder & CEO",
      image: Avatar,
      description:
        "Visionary leader with expertise in DeFi, blockchain, and scalable systems.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Captain",
      role: "CTO",
      image: Avatar,
      description:
        "Expert in blockchain architecture, AI, and decentralized infrastructure.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Github",
      role: "Lead Developer",
      image: Avatar,
      description:
        "Specialist in multi-chain interoperability and smart contract development.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <div className="container mx-auto py-16 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-600 via-green-500 to-green-400">
            Meet the Team
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            The brilliant minds driving innovation in decentralized
            technologies, committed to transforming the blockchain landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
