// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import ProductPage from "./pages/ProductPage";
// import MeetTheTeam from "./pages/MeetTheTeam";
// import Network from "./pages/Network";

// function App() {
//   return (
//     <Router>
//       <MainLayout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/product" element={<ProductPage />} />
//           <Route path="/team" element={<MeetTheTeam />} />
//           <Route path="/network" element={<Network />} />
//         </Routes>
//       </MainLayout>
//     </Router>
//   );
// }

// export default App;
// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Loader from "./components/Loader";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const MeetTheTeam = lazy(() => import("./pages/MeetTheTeam"));
const Network = lazy(() => import("./pages/Network"));
const Blog = lazy(() => import("./pages/Blog"));

// Lazy load product-specific pages (if needed)
const Launchpad = lazy(() => import("./pages/products/Launchpad"));
const LockingVesting = lazy(() => import("./pages/products/LockingVesting"));
const StakingFarming = lazy(() => import("./pages/products/StakingFarming"));
const TokenMinter = lazy(() => import("./pages/products/TokenMinter"));

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
          </Routes>
        </MainLayout>
      </Suspense>
    </Router>
  );
}

export default App;
