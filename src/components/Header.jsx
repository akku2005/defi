import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import HeaderIcon from "../assets/images/footerImage.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative flex justify-between items-center p-4 sm:p-6 bg-black text-white">
      {/* Gradient Circle Effect */}
      <div
        className="absolute top-0 left-0 
          w-[300px] h-[300px] 
          sm:w-[400px] sm:h-[430px] 
          bg-gradient-to-br 
          from-green-600 via-green-500 to-green-400 
          rounded-full 
          blur-[80px] 
          opacity-50 
          animate-pulse
          transform translate-x-0 translate-y-20 sm:translate-y-[160px]"
      ></div>

      <div
        className="absolute top-0 left-0 
          w-[200px] h-[200px] 
          sm:w-[300px] sm:h-[300px] 
          bg-gradient-to-br 
          from-green-500/20 via-green-500/10 to-green-500/5 
          rounded-full 
          blur-[120px] 
          opacity-30"
      ></div>

      {/* Logo Section */}
      <div className="flex items-center z-10">
        <img
          alt="VaultChain Logo"
          className="h-10 sm:h-10 rounded-full"
          src={HeaderIcon}
        />
        <span className="ml-2 text-lg sm:text-xl font-bold">VaultChain</span>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden z-50"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <FontAwesomeIcon
          icon={isMenuOpen ? faTimes : faBars}
          className="text-2xl text-white"
        />
      </button>

      {/* Navigation Menu */}
      <nav
        className={`
        fixed inset-0 bg-black bg-opacity-90 z-40
        md:static md:bg-transparent
        flex flex-col md:flex-row
        items-center justify-center md:justify-start
        space-y-6 md:space-y-0 md:space-x-4 lg:space-x-8
        ${isMenuOpen ? "block" : "hidden md:flex"}
      `}
      >
        <Link
          className="text-white hover:text-green-500 text-xl md:text-base"
          to="/product"
          onClick={toggleMenu}
        >
          Product
        </Link>
        <Link
          className="text-white hover:text-green-500 text-xl md:text-base"
          to="/team"
          onClick={toggleMenu}
        >
          Meet the Team
        </Link>
        <Link
          className="text-white hover:text-green-500 text-xl md:text-base"
          to="/network"
          onClick={toggleMenu}
        >
          Network
        </Link>
        <Link
          className="text-white hover:text-green-500 text-xl md:text-base"
          to="/blog"
          onClick={toggleMenu}
        >
          Blog
        </Link>

        {/* Mobile CTA Button */}
        <Link
          className="md:hidden bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-600 text-xl"
          to="/app"
          onClick={toggleMenu}
        >
          Go to App
        </Link>
      </nav>

      {/* Desktop CTA Button */}
      <Link
        className="hidden md:block bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-600"
        to="/app"
      >
        Go to App
      </Link>
    </header>
  );
};

export default Header;
