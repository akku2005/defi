// src/components/Card.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({
  icon,
  title,
  description,
  bgColor,
  textColor,
  linkText,
  linkUrl,
}) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg ${bgColor} ${textColor}`}>
      {/* Icon */}
      <div className="text-center mb-4">
        <FontAwesomeIcon icon={icon} className="text-4xl" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="mb-4">{description}</p>

      {/* Link */}
      <a href={linkUrl} className="text-white hover:underline">
        {linkText}
      </a>
    </div>
  );
};

export default Card;
