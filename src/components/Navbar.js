import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-custom">
      <div className="d-flex justify-content-between align-items-center">
        <input type="text" placeholder="Search..." />
        <div className="profile">
          <img src="https://via.placeholder.com/35" alt="Profile" />
          <span>Adminra John</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
