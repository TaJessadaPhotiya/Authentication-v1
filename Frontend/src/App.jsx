import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar"; 

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState(localStorage.getItem("email"));

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
      <div className="App">
        {token ? (
          <Dashboard logout={handleLogout} email={email} />
        ) : (
          <>
            <Navbar /> 
            <Routes>
              <Route path="/login" element={<Login setToken={handleLogin} />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
