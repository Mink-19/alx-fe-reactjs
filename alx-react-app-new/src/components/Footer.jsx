// src/components/Footer.jsx
const Footer = () => {
  return (
     <footer
      style={{
        borderTop: "2px solid gray",
        padding: "15px",
        margin: "10px",
        backgroundColor: "midnightblue",
        color: "white",
        textAlign: "center",
        borderRadius: "8px"
      }}
      
    >
      
      <p style={{ fontSize: "14px" }}>
        &copy; 2025 My React App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

