import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Product from "./components/pages/product/Producet";
import Main from "./components/pages/Main";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState(localStorage.getItem("email"));

  console.log("token", token);

  const handleLogin = (userToken, userEmail) => {
    localStorage.setItem("token", userToken);
    localStorage.setItem("email", userEmail);
    setToken(userToken);
    setEmail(userEmail);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken(null);
    setEmail(null);
  };

  return (
    <Router>
      <div className=" relative flex flex-col justify-between w-full h-screen">
        {token ? (
          <Main logout={handleLogout} email={email} />
        ) : (
          <>
            <Navbar logout={handleLogout} email={email} />
            <div className="w-full h-full px-[4rem] py-4 mt-[64px] ">
              <Routes>
                <Route path="*" element={<Navigate to="/login" replace />} />
                <Route
                  path="/login"
                  element={<Login setToken={handleLogin} />}
                />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
