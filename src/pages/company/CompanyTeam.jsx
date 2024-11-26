import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaGraduationCap,
  FaMedal,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const TeamMembers = [
  {
    name: "Alex Rodriguez",
    role: "Founder & CEO",
    bio: "Blockchain visionary with 10+ years in tech entrepreneurship",
    image: "/path/to/alex-profile.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    bio: "Distributed systems expert with deep blockchain architecture experience",
    image: "/path/to/sarah-profile.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Michael Wong",
    role: "Head of Product",
    bio: "Product strategist specializing in blockchain user experience",
    image: "/path/to/michael-profile.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

const CompanyValues = [
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "Pushing boundaries of blockchain technology and decentralized solutions.",
    color: "text-green-400",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    description:
      "Building an inclusive ecosystem of developers and innovators.",
    color: "text-green-500",
  },
  {
    icon: FaGraduationCap,
    title: "Continuous Learning",
    description:
      "Commitment to ongoing education and technological advancement.",
    color: "text-green-600",
  },
  {
    icon: FaMedal,
    title: "Integrity",
    description:
      "Maintaining the highest standards of transparency and ethical practice.",
    color: "text-green-700",
  },
];

const CompanyTeam = () => {
  const [activeTab, setActiveTab] = useState("team");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent"
        >
          VaultChain Team
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300 mb-12">
          A passionate team of blockchain experts dedicated to revolutionizing
          decentralized technology and driving innovation forward.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-900 rounded-full p-2 flex space-x-4">
          {["team", "values", "careers"].map((tab) => (
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

      {/* Team Members Section */}
      {activeTab === "team" && (
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {TeamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl text-center hover:bg-gray-800 transition-all border border-green-800 hover:border-green-600"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
              />
              <h3 className="text-xl font-bold mb-2 text-green-400">
                {member.name}
              </h3>
              <p className="text-gray-300 mb-4">{member.role}</p>
              <p className="text-gray-400 mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.socials.linkedin}
                  className="text-2xl text-gray-400 hover:text-green-500"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={member.socials.twitter}
                  className="text-2xl text-gray-400 hover:text-green-400"
                >
                  <FaTwitter />
                </a>
                <a
                  href={member.socials.github}
                  className="text-2xl text-gray-400 hover:text-green-600"
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Company Values Section */}
      {activeTab === "values" && (
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CompanyValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl text-center hover:bg-gray-800 transition-all border border-green-800 hover:border-green-600"
            >
              <value.icon className={`mx-auto text-5xl mb-4 ${value.color}`} />
              <h3 className="text-xl font-bold mb-3 text-green-400">
                {value.title}
              </h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Careers Section */}
      {activeTab === "careers" && (
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-8 rounded-xl border border-green-800"
          >
            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
              Join Our Team
            </h2>
            <p className="text-gray-300  mb-4 text-center">
              We are always looking for talented individuals who are passionate
              about blockchain technology and innovation. If you are interested
              in joining our team, please fill out the application form below.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-black border border-green-800 rounded-lg focus:outline-none focus:border-green-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-black border border-green-800 rounded-lg focus:outline-none focus:border-green-600"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 bg-black border border-green-800 rounded-lg h-32 focus:outline-none focus:border-green-600"
              />
              <button className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 py-3 rounded-lg hover:bg-gradient-to-l transition-colors">
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CompanyTeam;
