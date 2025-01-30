import React, { useState } from "react";
import "../Styles/Navbar.css";
import logo from "../Image/reddy-anna-logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#">Reddy Anna</a></li>
        <li><a href="#">Reddy Anna News</a></li>
        <li><a href="#">Cricket Live Score</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Apps más vistas</a></li>
        <li><a href="#">Apps más calificadas</a></li>
      </ul>

      {/* Login Button */}
      <button className="login-btn">Login</button>

      {/* Mobile Menu Toggle */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
