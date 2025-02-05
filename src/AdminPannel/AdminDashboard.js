import { Link } from "react-router-dom";

import { logout } from "./Auth";
import { useNavigate } from "react-router-dom";
import "../AdminPannel/AdminDashboard.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { FiBell, FiMail } from "react-icons/fi";

import logo from "../Image/reddy-anna-logo.png";

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
    <nav className="navbar">
        {/* Logo */}
        <Link to="home">
        <div className="logo">
            <img src={logo} alt="Logo" />      
        </div>
        </Link>
        <button className="login-btn" onClick={handleLogout}>Logout</button>
        </nav> 
       <div className="dashboard-container">    
        
          <aside className="sidebar">          
            <nav>
              <ul>
                <li>Admin Dashboard</li>
                <li>Add Card Form</li>
                <li>Add Slider Form</li>
              </ul>
            </nav>
          </aside>
          <main className="main-content">
            <header>
              <h2>Dashboard</h2>
              <div className="top-icons">
                <FiBell />
                <FiMail />
              </div>
            </header>
            <section className="stats">
              <div className="stat-card">2500 Welcome</div>
              <div className="stat-card">123.50 Average Time</div>
              <div className="stat-card">1,805 Collections</div>
              <div className="stat-card">54 Comments</div>
            </section>
            <section className="social-stats">
              <div className="social-card"><FaFacebookF /><br/> 35k Friends 128 Feeds</div>
              <div className="social-card"><FaTwitter /><br/> 584k Followers 978 Tweets</div>
              <div className="social-card"><FaLinkedinIn /> <br/>758+ Contacts 365 Feeds</div>
              <div className="social-card"><FaGooglePlusG /><br/> 450 Followers 57 Circles</div>
            </section>
          </main>
        </div>
        </>
  );
};

export default AdminDashboard;
