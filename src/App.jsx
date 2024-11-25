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
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Loader from "./components/Loader";
import ProductPage from "./pages/ProductPage";
import MeetTheTeam from "./pages/MeetTheTeam";
import Network from "./pages/Network";
import Blog from "./pages/Blog";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change this duration as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/team" element={<MeetTheTeam />} />
            <Route path="/network" element={<Network />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </MainLayout>
      )}
    </Router>
  );
}

export default App;
