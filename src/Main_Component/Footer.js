import React from "react";
import "../Styles/Footer.css";
import Googlepy from "../Image/Gpay-1-1.webp"
import PhonePe from "../Image/Phone-1.webp"
import UPI from "../Image/UPI-1-1.webp"
import Paytm from "../Image/Paytm-1.webp"

import wtsp from "../Image/whatsapp.png";
import teligram from "../Image/telegram.png";
import fb from "../Image/facebook.png";
import instagram from "../Image/instagram.png";
import share from "../Image/bc0-150x150.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Social Media Links */}
      <div className="social-icons">
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <img src={wtsp} alt="WhatsApp" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
          <img src={teligram} alt="Telegram" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={fb} alt="Facebook" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={share} alt="Facebook" />
        </a>
      </div>

      {/* Payment Methods */}
      <div className="payment-methods">
        <h3>Payment Methods</h3>
        <div className="payment-icons">
          <img src={Paytm} alt="Paytm" />
          <img src={Googlepy} alt="Google Pay" />
          <img src={UPI} alt="UPI" />
          <img src={PhonePe} alt="PhonePe" />
        </div>
      </div>

      {/* Useful Links */}
      <div className="useful-links">
        <h3>Useful Links</h3>
        <div className="links">
          <a href="/reddy-anna">Reddy Anna</a>
          <a href="/news">Reddy Anna News</a>
          <a href="/live-score">Cricket Live Score</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/apps-most-visited">Apps más vistas</a>
          <a href="/apps-highly-rated">Apps más calificadas</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
        Copyright © 2025 <a>Reddy Anna </a>| Powered by [Reddy Anna Official]
        </p>
      </div>
    </footer>
    
  );
};

export default Footer;
