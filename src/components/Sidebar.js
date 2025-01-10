// src/components/Sidebar.js
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="menu">
        <li className="menu-item active">Dashboard</li>
        <li className="menu-item">Recruitment</li>
        <li className="menu-item">Schedule</li>
        <li className="menu-item">Employee</li>
        <li className="menu-item">Department</li>
      </ul>
      <ul className="menu secondary-menu">
        <li className="menu-item">Support</li>
        <li className="menu-item">Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
