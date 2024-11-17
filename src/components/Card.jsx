import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({
  icon,
  title,
  description,
  bgColor = "bg-black",
  textColor = "text-white",
  linkText,
  linkUrl,
  isHighlighted = false,
}) => {
  return (
    <div
      className={`relative p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out
        w-[250px] h-[300px] flex flex-col justify-between items-start 
        backdrop-blur-lg bg-black/30 border border-white/10 
        ${isHighlighted ? "scale-105 bg-green-500/20 border-green-400" : ""}
      `}
    >
      {/* Icon */}
      <div className="relative flex justify-start items-center mb-2">
        {/* Outer Div with Border and Black Background */}
        <div className="absolute inset-[-7px] w-16 h-16 rounded-full border-2 border-green-400 bg-black mt-1" />

        {/* Inner Div with Green Background and Icon */}
        <div className="relative flex justify-center items-center bg-green-900 p-3 rounded-full ml-1">
          <FontAwesomeIcon icon={icon} className="text-3xl text-green-400" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-left mb-2 text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-left text-gray-300 mb-6">{description}</p>

      {/* Centered Button */}
      <div className="w-full flex justify-center">
        <a
          href={linkUrl}
          className="inline-block w-full py-2 text-sm font-semibold transition duration-300 ease-in-out 
            bg-green-400 text-black rounded-full  hover:bg-black hover:text-white"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default Card;
