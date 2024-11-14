import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/register", {
        email,
        password,
      });
      alert("Registered successfully!");
    } catch (error) {
      alert("Registration failed!");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6"
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="mb-4 p-3 w-full max-w-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="mb-4 p-3 w-full max-w-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Register
      </button>
    </form>
  );
}

export default Register;
