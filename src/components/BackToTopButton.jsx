import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed 
        bottom-4 
        right-4 
        md:bottom-6 
        md:right-6 
        bg-gradient-to-r 
        from-green-600 
        via-green-500 
        to-green-400 
        text-white 
        rounded-full 
        w-10 
        h-10 
        md:w-12 
        md:h-12 
        flex 
        items-center 
        justify-center 
        shadow-lg 
        hover:scale-110 
        transition-transform 
        duration-300 
        ease-in-out 
        ${isVisible ? "block" : "hidden"}
        group
      `}
      style={{
        zIndex: 1000,
      }}
      aria-label="Scroll to top"
    >
      <FaArrowUp
        className={`
          text-base 
          md:text-xl 
          ${isHovered ? "animate-bounce" : ""}
          transition-all 
          duration-300 
          ease-in-out
        `}
      />
    </button>
  );
};

export default BackToTopButton;
