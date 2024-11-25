import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faXing,
  faYoutube,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import FooterImage from "../assets/images/vaultChainImage.png";
import FooterImage2 from "../assets/images/footerImage.png";

// Configuration Objects
const SOCIAL_LINKS = [
  {
    icon: faTelegram,
    label: "Telegram",
    path: "https://t.me/vaultchain",
    external: true,
  },
  {
    icon: faXing,
    label: "Xing",
    path: "https://www.xing.com/vaultchain",
    external: true,
  },
  {
    icon: faYoutube,
    label: "YouTube",
    path: "https://www.youtube.com/@vaultchain",
    external: true,
  },
  {
    icon: faLinkedin,
    label: "LinkedIn",
    path: "https://www.linkedin.com/company/vaultchain",
    external: true,
  },
  {
    icon: faGithub,
    label: "GitHub",
    path: "https://github.com/vaultchain",
    external: true,
  },
];

const PRODUCT_LINKS = [
  {
    name: "Launchpad",
    path: "/products/launchpad",
    description: "Launch your blockchain projects",
  },
  {
    name: "Locking & Vesting",
    path: "/products/locking-vesting",
    description: "Token lock and distribution management",
  },
  {
    name: "Staking & Farming",
    path: "/products/staking-farming",
    description: "Earn rewards through staking",
  },
  {
    name: "Token Minter",
    path: "/products/token-minter",
    description: "Create and manage your tokens",
  },
];

const COMPANY_LINKS = [
  {
    name: "Meet the Team",
    path: "/company/team",
    description: "Our leadership and core members",
  },
  {
    name: "Documentation",
    path: "/company/documentation",
    description: "Technical guides and resources",
  },
  {
    name: "Our Tokens",
    path: "/company/our-tokens",
    description: "Explore VaultChain ecosystem tokens",
  },
  {
    name: "Network",
    path: "/company/network",
    description: "Our blockchain network infrastructure",
  },
];

const TERMS_LINKS = [
  {
    name: "Sitemap",
    path: "/terms/sitemap",
    description: "Site navigation overview",
  },
  {
    name: "Privacy Policy",
    path: "/terms/privacy-policy",
    description: "Data protection and privacy",
  },
  {
    name: "Audits",
    path: "/terms/audits",
    description: "Security and smart contract audits",
  },
  {
    name: "Brand Assets",
    path: "/terms/brand-assets",
    description: "Official branding materials",
  },
];

// Custom Active Link Component
const ActiveLink = ({ to, children, className = "" }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        ${className}
        ${
          isActive
            ? "bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent font-bold"
            : "text-gray-300 hover:text-green-400 transition-colors"
        }
      `}
    >
      {children}
    </Link>
  );
};

// Link Section Component
const LinkSection = ({ title, links }) => (
  <div className="col-span-1">
    <h3 className="text-green-400 font-bold mb-4 text-center sm:text-left">
      {title}
    </h3>
    <ul className="text-gray-300 space-y-2 text-center sm:text-left">
      {links.map(({ name, path }, index) => (
        <li key={index}>
          <ActiveLink to={path}>{name}</ActiveLink>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${FooterImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0,0,0,0.9)",
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
                  src={FooterImage}
                  width="70"
                />
                <span className="text-2xl sm:text-3xl font-bold text-green-400">
                  VaultChain
                </span>
              </div>
              <p className="text-base sm:text-lg text-gray-300 text-center sm:text-left mb-4">
                Killer Whales Contest
              </p>

              {/* Social Links */}
              <nav className="flex space-x-6 justify-center sm:justify-start">
                {SOCIAL_LINKS.map(({ icon, label, path, external }, index) =>
                  external ? (
                    <a
                      key={index}
                      href={path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-600 transition-colors duration-300"
                      aria-label={`Follow us on ${label}`}
                    >
                      <FontAwesomeIcon icon={icon} size="2x" />
                    </a>
                  ) : (
                    <ActiveLink
                      key={index}
                      to={path}
                      className="text-green-400 hover:text-green-600 transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={icon} size="2x" />
                    </ActiveLink>
                  )
                )}
              </nav>
            </div>
          </div>

          {/* Dynamic Link Sections */}
          <LinkSection title="Products" links={PRODUCT_LINKS} />
          <LinkSection title="Company" links={COMPANY_LINKS} />
          <LinkSection title="Terms & Conditions" links={TERMS_LINKS} />
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-green-400 pt-4">
          VaultChain © {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
