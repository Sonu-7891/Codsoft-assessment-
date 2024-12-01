import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <span>📞 +123-456-7890 | ✉️ demo@landingpage.com</span>
        <button className="consult-btn">Request a Consult</button>
      </div>
      <nav className="nav-bar">
        <h1 className="logo">Landing Page</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>Blog</li>
          <li>Page</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
