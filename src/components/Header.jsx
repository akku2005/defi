import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import HeaderIcon from "../assets/images/vaultChainImage.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative flex justify-between items-center p-4 sm:p-6 text-white ">
      {/* Logo Section */}
      <div className="flex items-center z-10">
        <img
          alt="VaultChain Logo"
          className="h-14 sm:h-18 rounded-full"
          src={HeaderIcon}
        />
        <NavLink to="/" className="ml-2 text-lg sm:text-xl font-bold">
          VaultChain
        </NavLink>
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
        {/* Individual Links */}
        <NavLink
          to="/product"
          onClick={toggleMenu}
          className={({ isActive }) =>
            `text-xl md:text-base ${
              isActive
                ? "text-green-500 font-bold"
                : "text-white hover:text-green-500"
            }`
          }
        >
          Product
        </NavLink>
        <NavLink
          to="/team"
          onClick={toggleMenu}
          className={({ isActive }) =>
            `text-xl md:text-base ${
              isActive
                ? "text-green-500 font-bold"
                : "text-white hover:text-green-500"
            }`
          }
        >
          Meet the Team
        </NavLink>
        <NavLink
          to="/network"
          onClick={toggleMenu}
          className={({ isActive }) =>
            `text-xl md:text-base ${
              isActive
                ? "text-green-500 font-bold"
                : "text-white hover:text-green-500"
            }`
          }
        >
          Network
        </NavLink>
        <NavLink
          to="/blog"
          onClick={toggleMenu}
          className={({ isActive }) =>
            `text-xl md:text-base ${
              isActive
                ? "text-green-500 font-bold"
                : "text-white hover:text-green-500"
            }`
          }
        >
          Blog
        </NavLink>

        {/* Mobile CTA Button */}
        <NavLink
          className="md:hidden bg-green-500 text-black px-6 py-3 rounded-full hover:bg-green-600 text-xl"
          to="/app"
          onClick={toggleMenu}
        >
          Go to App
        </NavLink>
      </nav>

      {/* Desktop CTA Button */}
      <NavLink
        className="hidden md:block bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-600"
        to="/app"
      >
        Go to App
      </NavLink>
    </header>
  );
};

export default Header;
