// src/components/Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Vasitum</div>
      <input type="text" className="navbar-search" placeholder="Search" />
      <div className="navbar-icons">
        <i className="fas fa-bell"></i>
        <i className="fas fa-envelope"></i>
        <div className="navbar-user">
          <img
            src="https://via.placeholder.com/30"
            alt="user"
            className="user-avatar"
          />
          <span>Admirra John</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
