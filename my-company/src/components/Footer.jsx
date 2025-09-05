// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer style={{
      marginTop: "50px",
      padding: "20px",
      backgroundColor: "#333",
      color: "#fff",
      textAlign: "center"
    }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      <p>
        Follow us on 
        <a href="#" style={{ color: "#1DA1F2", margin: "0 5px", textDecoration: "none" }}> Twitter</a> | 
        <a href="#" style={{ color: "#0077B5", margin: "0 5px", textDecoration: "none" }}> LinkedIn</a>
      </p>
    </footer>
  );
};

export default Footer;
