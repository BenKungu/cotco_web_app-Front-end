import React from "react";
import "./DashboardPage.css";
import SideNavigation from "./SideNavigation";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="header-title">System Admin</h1>
          <div className="header-buttons">
            <button>Add Outlet</button>
            <button>Add User</button>
            <button>Create Account</button>
            <button>Manage Accounts</button>
            <button>Manage Outlets</button>
          </div>
        </div>
        <div className="table-wrapper">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Outlet</th>
                <th>Location</th>
                <th>Account</th>
                <th>Mobile </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="side-navigation">
        <SideNavigation />
      </div>
    </div>
  );
};

export default DashboardPage;
