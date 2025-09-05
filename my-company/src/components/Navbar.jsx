// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // to highlight active link

  const linkStyle = (path) => ({
    marginRight: "20px",
    textDecoration: "none",
    color: location.pathname === path ? "#ffffff" : "#333",
    backgroundColor: location.pathname === path ? "#007BFF" : "transparent",
    padding: "8px 12px",
    borderRadius: "5px",
    transition: "0.3s",
  });

  return (
    <nav style={{
      padding: "15px 30px",
      backgroundColor: "#f0f0f0",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <Link to="/" style={linkStyle("/")}>Home</Link>
      <Link to="/about" style={linkStyle("/about")}>About</Link>
      <Link to="/services" style={linkStyle("/services")}>Services</Link>
      <Link to="/contact" style={linkStyle("/contact")}>Contact</Link>
    </nav>
  );
};

export default Navbar;

