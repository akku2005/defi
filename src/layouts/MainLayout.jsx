// src/layouts/MainLayout.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default MainLayout;
