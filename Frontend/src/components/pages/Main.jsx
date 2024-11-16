import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Product from "./product/Producet";
import Profil from "../layouts/Profil";

function Main({ logout, email }) {
  return (
    <div className="relative flex flex-col justify-between w-full h-screen">
      <Navbar />
      <div className="w-full h-full px-[4rem] mt-[64px] ">
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />

    </div>
  );
}

export default Main;
