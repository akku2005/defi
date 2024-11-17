import "../styles/slider.css";
import React from "react";

import AvalancheLogo from "../assets/icons/idc6aNh4sG_1731755560413.jpeg"; // Your custom SVG
import BnbLogo from "../assets/icons/idc6aNh4sG_1731755560413.jpeg"; // Your custom SVG
import PolygonLogo from "../assets/icons/idc6aNh4sG_1731755560413.jpeg"; // Your custom SVG
import ArbitrumLogo from "../assets/icons/idc6aNh4sG_1731755560413.jpeg"; // Your custom SVG

const SliderCompanyname = () => {
  return (
    <section className="w-full mx-4 md:mx-10  mb-10 overflow-hidden lg:mt-48 md:mt-44">
      <div className="marquee">
        <div className="marquee-content">
          <div className="company-item">
            <img src={AvalancheLogo} alt="Avalanche" className="company-logo" />
            <div className="company-name">AVALANCHE</div>
          </div>
          <div className="company-item">
            <img src={BnbLogo} alt="BNB Chain" className="company-logo" />
            <div className="company-name">BNB_CHAIN</div>
          </div>
          <div className="company-item">
            <img src={PolygonLogo} alt="Polygon" className="company-logo" />
            <div className="company-name">POLYGON</div>
          </div>
          <div className="company-item">
            <img src={ArbitrumLogo} alt="Arbitrum" className="company-logo" />
            <div className="company-name">ARBITRUM</div>
          </div>

          {/* Repeat the same items to create infinite loop */}
          <div className="company-item">
            <img src={AvalancheLogo} alt="Avalanche" className="company-logo" />
            <div className="company-name">AVALANCHE</div>
          </div>
          <div className="company-item">
            <img src={BnbLogo} alt="BNB Chain" className="company-logo" />
            <div className="company-name">BNB_CHAIN</div>
          </div>
          <div className="company-item">
            <img src={PolygonLogo} alt="Polygon" className="company-logo" />
            <div className="company-name">POLYGON</div>
          </div>
          <div className="company-item">
            <img src={ArbitrumLogo} alt="Arbitrum" className="company-logo" />
            <div className="company-name">ARBITRUM</div>
          </div>
          <div className="company-item">
            <img src={AvalancheLogo} alt="Avalanche" className="company-logo" />
            <div className="company-name">AVALANCHE</div>
          </div>
          <div className="company-item">
            <img src={BnbLogo} alt="BNB Chain" className="company-logo" />
            <div className="company-name">BNB_CHAIN</div>
          </div>
          <div className="company-item">
            <img src={PolygonLogo} alt="Polygon" className="company-logo" />
            <div className="company-name">POLYGON</div>
          </div>
          <div className="company-item">
            <img src={ArbitrumLogo} alt="Arbitrum" className="company-logo" />
            <div className="company-name">ARBITRUM</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderCompanyname;
