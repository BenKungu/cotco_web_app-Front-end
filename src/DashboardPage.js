import React from "react";
import "./DashboardPage.css"; // Import the CSS file for styling

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>System Admin</h1>
        <div className="header-buttons">
          <button>Add User</button>
          <button>Add Outlet</button>
          <button>Create Account</button>
          <button>Manage Accounts</button>
          <button>Manage Outlets</button>
        </div>
        <div className="side-bar">
          Users <br />
          Accounts <br />
          Outlets <br />
          Farmers
          <br />
          Sales <br />
          Vouchers
          <br />
        </div>
      </div>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Outlet</th>
            <th>Location</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
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
            <td></td>
          </tr>
          <tr>
            <td></td>
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
            <td></td>
          </tr>
          <tr>
            <td></td>
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
            <td></td>
          </tr>
          <tr>
            <td></td>
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
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
