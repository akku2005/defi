import React from "react";
import Card from "../components/Card";
import {
  faRocket,
  faLeaf,
  faCoins,
  faLock,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="relative">
      {/* Background Gradient Effect */}
      <div className="flex justify-center items-center">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] 
          bg-gradient-to-br from-green-600 via-green-500 to-green-400 
          rounded-full blur-[80px] opacity-50 animate-pulse"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] 
          bg-gradient-to-br from-green-500/20 via-green-500/10 to-green-500/5 
          rounded-full blur-[120px] opacity-30"
        ></div>
      </div>

      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg mb-12">
          UNCX Network (formerly UniCrypt) provides innovative, automated token
          solutions for secure participation in decentralized finance.
        </p>

        {/* Pinterest-like Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-32">
          <div className="flex flex-col">
            <Card
              icon={faRocket}
              title="ILO Launchpad"
              description="Secure platform for decentralized token fundraising."
              bgColor="bg-black"
              textColor="text-white"
              linkText="Go to App"
              linkUrl="#"
            />
          </div>
          <div className="flex flex-col">
            <Card
              icon={faLeaf}
              title="Staking & Farming"
              description="Earn rewards through secure token staking."
              bgColor="bg-black"
              textColor="text-white"
              linkText="Go to App"
              linkUrl="#"
            />
          </div>
          <div className="flex flex-col">
            <Card
              icon={faCoins}
              title="Token Minter"
              description="Easily create and launch custom tokens."
              bgColor="bg-black"
              textColor="text-white"
              linkText="Go to App"
              linkUrl="#"
            />
          </div>
          <div className="flex flex-col">
            <Card
              icon={faLock}
              title="LP & Token Vesting"
              description="Automated liquidity and token release management."
              bgColor="bg-black"
              textColor="text-white"
              linkText="Go to App"
              linkUrl="#"
            />
          </div>
          <div className="flex flex-col">
            <Card
              icon={faNetworkWired}
              title="Token Ecosystem"
              description="A comprehensive network for token utilization and growth."
              bgColor="bg-black"
              textColor="text-white"
              linkText="Go to App"
              linkUrl="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
