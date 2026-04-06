import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { logout } from "../api/authService";

export default function Navbar() {

  const navigate = useNavigate(); 
  const role = localStorage.getItem("role");
  
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = async () => {
    await logout();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Book Inventory Management System
      </div>

      <div className="navbar-links">

        {isLoggedIn && (
          <>
            <Link to="/">Home</Link>

            {/* ✅ Only ADMIN */}
            {role === "ADMIN" && <Link to="/add">Add Book</Link>}

            <Link to="/dashboard">Dashboard</Link>

            <button onClick={handleLogout}>Logout</button>
          </>
        )}
         
        {!isLoggedIn && <Link to="/login">Login</Link>}

      </div>
    </nav>
  );
}
