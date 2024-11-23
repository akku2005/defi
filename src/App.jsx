// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductPage from "./pages/ProductPage";
import MeetTheTeam from "./pages/MeetTheTeam";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/team" element={<MeetTheTeam />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

// // src/App.jsx
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Loader from "./components/Loader";

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a loading delay (e.g., fetching data)
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000); // Change this duration as needed

//     return () => clearTimeout(timer); // Cleanup the timer on unmount
//   }, []);

//   return (
//     <Router>
//       {loading ? (
//         <Loader />
//       ) : (
//         <MainLayout>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </MainLayout>
//       )}
//     </Router>
//   );
// }

// export default App;
