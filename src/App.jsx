import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const MeetTheTeam = lazy(() => import("./pages/MeetTheTeam"));
const Network = lazy(() => import("./pages/Network"));
const Blog = lazy(() => import("./pages/Blog"));

// product-specific pages
const Launchpad = lazy(() => import("./pages/products/Launchpad"));
const LockingVesting = lazy(() => import("./pages/products/LockingVesting"));
const StakingFarming = lazy(() => import("./pages/products/StakingFarming"));
const TokenMinter = lazy(() => import("./pages/products/TokenMinter"));

// Company-specific pages
const CompanyTeam = lazy(() => import("./pages/company/CompanyTeam"));
const Documentation = lazy(() => import("./pages/company/Documentation"));
const OurTokens = lazy(() => import("./pages/company/OurTokens"));
const NetworkPage = lazy(() => import("./pages/company/NetworkPage"));

// Terms-specific pages
const Sitemap = lazy(() => import("./pages/terms/Sitemap"));
const PrivacyPolicy = lazy(() => import("./pages/terms/PrivacyPage"));
const Audits = lazy(() => import("./pages/terms/Audits"));
const BrandAssets = lazy(() => import("./pages/terms/BrandAssets"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <MainLayout>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/team" element={<MeetTheTeam />} />
            <Route path="/network" element={<Network />} />
            <Route path="/blog" element={<Blog />} />

            {/* Product Routes */}
            <Route path="/products">
              <Route path="launchpad" element={<Launchpad />} />
              <Route path="locking-vesting" element={<LockingVesting />} />
              <Route path="staking-farming" element={<StakingFarming />} />
              <Route path="token-minter" element={<TokenMinter />} />
            </Route>
            {/* Company Routes */}
            <Route path="/company">
              <Route path="team" element={<CompanyTeam />} />
              <Route path="documentation" element={<Documentation />} />
              <Route path="our-tokens" element={<OurTokens />} />
              <Route path="network" element={<NetworkPage />} />
            </Route>
            {/* Terms Routes */}
            <Route path="/terms">
              <Route path="sitemap" element={<Sitemap />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="audits" element={<Audits />} />
              <Route path="brand-assets" element={<BrandAssets />} />
            </Route>
          </Routes>
        </MainLayout>
      </Suspense>
    </Router>
  );
}

export default App;
