import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Navbar />
        <div className="dashboard-main">
          <div className="dashboard-cards">
            <Card title="Available Position" value="24" description="4 Urgently needed" />
            <Card title="Job Open" value="10" description="4 Active hiring" />
            <Card title="New Employees" value="24" description="4 Departments" />
            <Card title="Talent Request" value="16" description="+5% Past month" />
          </div>
          <div className="dashboard-lower">
            <div className="activity-card">
              <h5>Recent Activity</h5>
              <p>You Posted a New Job</p>
              <small>Kindly check the requirements and terms...</small>
            </div>
            <div className="schedule-card">
              <h5>Upcoming Schedule</h5>
              <p>Review candidate applications</p>
              <small>Today, 11:30 AM</small>
            </div>
          </div>
          <div className="announcement-section">
            <h5>Announcements</h5>
            <p>Outing schedule for every department</p>
            <p>Meeting HR Department</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
