import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { logout } from "../api/authService";

export default function Navbar() {

  const navigate = useNavigate();   // ✅ MUST be inside component
  const role = localStorage.getItem("role");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Book Inventory Management System
      </div>

      <div className="navbar-links">

        {/* ✅ Show only if logged in */}
        {isLoggedIn && (
          <>
            <Link to="/">Home</Link>

            {/* ✅ Only ADMIN */}
            {role === "ADMIN" && <Link to="/add">Add Book</Link>}

            <Link to="/dashboard">Dashboard</Link>

            <button onClick={handleLogout}>Logout</button>
          </>
        )}

        {/* ✅ Show Login if not logged in */}
        {!isLoggedIn && <Link to="/login">Login</Link>}

      </div>
    </nav>
  );
}