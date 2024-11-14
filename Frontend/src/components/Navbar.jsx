
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-center space-x-4 p-4 bg-gray-100">
      <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
      <Link to="/register" className="text-blue-500 hover:text-blue-700">Register</Link>
    </nav>
  );
}

export default Navbar;
