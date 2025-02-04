import React from "react";
import "../Styles/SocialShare.css";
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";

const SocialShare = () => {
  return (
    <div className="social-share">
      <a href="#" className="whatsapp"><FaWhatsapp /></a>
      <a href="#" className="facebook"><FaFacebookF /></a>
      <a href="#" className="instragram"><FaInstagram /></a>
      <a href="#" className="telegram"><FaTelegramPlane /></a>
      <a href="#" className="twitter"><FaTwitter /></a>
      
    </div>
  );
};

export default SocialShare;
