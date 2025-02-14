import "../AdminPannel/AdminDashboard.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <>
      <header>
        <h2>Dashboard</h2>
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
      
    </>
  );
};

export default AdminDashboard;
