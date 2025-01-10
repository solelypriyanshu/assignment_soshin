import React from 'react';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-light p-3 vh-100 shadow-sm">
      <h4 className="mb-4">Vasitum</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <a href="/" className="nav-link active">Dashboard</a>
        </li>
        <li className="nav-item mb-2">
          <a href="/recruitment" className="nav-link">Recruitment</a>
        </li>
        <li className="nav-item mb-2">
          <a href="/schedule" className="nav-link">Schedule</a>
        </li>
        <li className="nav-item mb-2">
          <a href="/employee" className="nav-link">Employee</a>
        </li>
        <li className="nav-item mb-2">
          <a href="/department" className="nav-link">Department</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
