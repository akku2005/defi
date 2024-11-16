// src/components/Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faXing,
  faYoutube,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  { icon: faTelegram, label: "Telegram" },
  { icon: faXing, label: "Xing" },
  { icon: faYoutube, label: "YouTube" },
  { icon: faLinkedin, label: "LinkedIn" },
  { icon: faGithub, label: "GitHub" },
];

const productLinks = [
  "Launchpad",
  "Locking & Vesting",
  "Staking & Farming",
  "Token Minter",
];

const companyLinks = [
  "Meet the Team",
  "Documentation",
  "Our Tokens",
  "Network",
];

const termsLinks = ["Sitemap", "Privacy Policy", "Audits", "Brand Assets"];

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516737490857-847e4fbcf7a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0,0,0,0.7)",
        backgroundBlendMode: "overlay",
      }}
      className="text-white py-8 bg-opacity-70 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand Section */}

          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center mb-4">
                <img
                  alt="VaultChain Logo"
                  className="mr-4 rounded-full"
                  height="70"
                  src="https://storage.googleapis.com/a1aa/image/ZgfOwXJiCPSNAaNRSuFB9I3zqnqKu2TnghEOEsNyiaSrfdxTA.jpg"
                  width="70"
                />
                <span className="text-2xl sm:text-3xl font-bold text-green-400">
                  VaultChain
                </span>
              </div>
              <p className="text-base sm:text-lg text-gray-300 text-center sm:text-left mb-4">
                Killer Whales Contest
              </p>
              <nav className="flex space-x-6 justify-center sm:justify-start">
                {socialLinks.map(({ icon, label }, index) => (
                  <a
                    key={index}
                    className="text-green-400 hover:text-green-600 transition-colors duration-300"
                    href="javascript:void(0);"
                    aria-label={`Follow us on ${label}`}
                  >
                    <FontAwesomeIcon icon={icon} size="2x" />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Products Section */}
          <div className="col-span-1">
            <h3 className="text-green-400 font-bold mb-4 text-center sm:text-left">
              Products
            </h3>
            <ul className="text-gray-300 space-y-2 text-center sm:text-left">
              {productLinks.map((product, index) => (
                <li key={index}>
                  <a
                    href="javascript:void(0);"
                    className="hover:text-green-400 transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-span-1">
            <h3 className="text-green-400 font-bold mb-4 text-center sm:text-left">
              Company
            </h3>
            <ul className="text-gray-300 space-y-2 text-center sm:text-left">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href="javascript:void(0);"
                    className="hover:text-green-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms & Conditions Section */}
          <div className="col-span-1">
            <h3 className="text-green-400 font-bold mb-4 text-center sm:text-left">
              Terms & Conditions
            </h3>
            <ul className="text-gray-300 space-y-2 text-center sm:text-left">
              {termsLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href="javascript:void(0);"
                    className="hover:text-green-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 text-green-400 pt-4">
          VaultChain © 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
