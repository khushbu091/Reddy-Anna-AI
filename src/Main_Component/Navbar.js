import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Styles/Navbar.css";
import logo from "../Image/reddy-anna-logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="home"><div className="logo">
        <img src={logo} alt="Logo" />
        
      </div></Link>

      

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="home">Reddy Anna</Link></li>
        <li><Link to="reddyNews">Reddy Anna News</Link></li>
        <li><Link to="upcomingEvent">Upcoming Event</Link></li>
        <li><Link to="privacyPolicy">Privacy Policy</Link></li>
        
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
