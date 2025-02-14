import { Outlet, Link, useNavigate } from "react-router-dom";
import { logout } from "./Auth";
import { FiBell, FiMail } from "react-icons/fi";
import logo from "../Image/reddy-anna-logo.png";
import "../AdminPannel/AdminDashboard.css";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-navbar">
        <Link to="/admin">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <div className="top-icons">
          <FiBell />
          <FiMail />
        </div>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </nav>

      <aside className="sidebar">
        <nav>
          <ul>
            <li ><Link to="/admin" className="side-menu-li">Admin Dashboard</Link></li>
            <li><Link to="/admin/cardForm" className="side-menu-li">Add Card Form</Link></li>
            <li><Link to="/admin/sliderForm" className="side-menu-li">Add Slider Form</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
