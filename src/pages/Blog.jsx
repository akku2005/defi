import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBlog, FaCalendar, FaUser, FaTags, FaSearch } from "react-icons/fa";

const BlogBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-1/2 h-full">
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
              opacity: [0, 1, 0],
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
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "Revolutionizing Blockchain Technology",
      excerpt:
        "Exploring the latest innovations in blockchain and decentralized systems.",
      author: "Alex Johnson",
      date: "June 15, 2024",
      category: "Technology",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/8438924/pexels-photo-8438924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Decentralized Finance: The Future of Banking",
      excerpt: "How DeFi is transforming traditional financial systems.",
      author: "Sarah Martinez",
      date: "May 22, 2024",
      category: "Finance",
      readTime: "7 min read",
      image:
        "https://images.pexels.com/photos/7534410/pexels-photo-7534410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Cybersecurity in the Web3 Era",
      excerpt: "Emerging strategies to protect digital assets and networks.",
      author: "Michael Chen",
      date: "April 10, 2024",
      category: "Security",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/6804579/pexels-photo-6804579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "AI and Blockchain: A Powerful Combination",
      excerpt:
        "Exploring the synergies between artificial intelligence and blockchain technology.",
      author: "Emily Wong",
      date: "March 5, 2024",
      category: "Technology",
      readTime: "8 min read",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "The Rise of NFTs in Digital Art",
      excerpt:
        "How non-fungible tokens are revolutionizing the art and collectibles market.",
      author: "David Kim",
      date: "February 18, 2024",
      category: "Innovation",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "Smart Contracts: Reshaping Legal Agreements",
      excerpt:
        "Understanding the potential of blockchain-based smart contracts in various industries.",
      author: "Rachel Green",
      date: "January 30, 2024",
      category: "Finance",
      readTime: "7 min read",
      image:
        "https://images.pexels.com/photos/7034607/pexels-photo-7034607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const categories = ["All", "Technology", "Finance", "Security", "Innovation"];

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <BlogBackground />

      <div className="container mx-auto py-16 px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-green-400">
            VaultChain Blog
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Insights, trends, and innovations in blockchain and decentralized
            technologies
          </p>
        </motion.div>

        {/* Filters Section */}
        <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0">
          {/* Category Buttons */}
          <div className="flex space-x-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64 px-4 py-2 bg-white/10 rounded-full border border-green-500/30 focus:outline-none focus:border-green-500"
            />
            <FaSearch className="absolute right-4 top-3 text-green-500" />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-500/30 hover:border-green-300 transition-all"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2 text-sm text-gray-400">
                  <FaCalendar className="mr-2" />
                  {post.date} • {post.readTime}
                </div>
                <h3 className="text-xl font-semibold text-green-300 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <FaUser className="mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-sm text-green-400">
                    <FaTags className="mr-2" />
                    {post.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
