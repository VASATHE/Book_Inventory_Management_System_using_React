import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Book Inventory Management System
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
}
