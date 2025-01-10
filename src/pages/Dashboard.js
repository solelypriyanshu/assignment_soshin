import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <div className="container mt-4">
          {/* Top Cards */}
          <div className="row mb-4">
            <div className="col-md-3">
              <Card title="Available Position" value="24" description="4 Urgently needed" />
            </div>
            <div className="col-md-3">
              <Card title="Job Open" value="10" description="4 Active hiring" />
            </div>
            <div className="col-md-3">
              <Card title="New Employees" value="24" description="4 Department" />
            </div>
            <div className="col-md-3">
              <Card title="Talent Request" value="16" description="+5% Past month" />
            </div>
          </div>
          {/* Recent Activity and Schedule */}
          <div className="row">
            <div className="col-md-8">
              <h5>Recently Activity</h5>
              <div className="card p-3 shadow-sm">
                <p>You Posted a New Job</p>
                <small>Kindly check the requirements...</small>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Upcoming Schedule</h5>
              <div className="card p-3 shadow-sm">
                <p>Review candidate applications</p>
                <small>Today, 11:30 AM</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
