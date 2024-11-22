// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false); // Set loading to false when loading is complete
  };

  return (
    <Router>
      {loading ? (
        <Loader onLoadingComplete={handleLoadingComplete} /> // Pass the callback to the loader
      ) : (
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainLayout>
      )}
    </Router>
  );
}

export default App;
