import React from "react";
import "./DashboardPage.css"; // Import the CSS file for styling

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome to Cotco Admin</h2>
        <div className="header-buttons">
          <button>Farmers</button>
          <button>Sales</button>
          <button>Users</button>
          <button>Outlets</button>
          <button>Vouchers</button>
        </div>
      </div>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Farmer</th>
            <th>Phone</th>
            <th>Sales</th>
            <th>Vouchers</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>074774488</td>
            <td>30000</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Kelvin</td>
            <td>07248899</td>
            <td>40000</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Martin</td>
            <td>07348888</td>
            <td>50000</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Martin</td>
            <td>07348888</td>
            <td>50000</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Martin</td>
            <td>07348888</td>
            <td>50000</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Kelvin</td>
            <td>07248899</td>
            <td>40000</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Kelvin</td>
            <td>07248899</td>
            <td>40000</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Kelvin</td>
            <td>07248899</td>
            <td>40000</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
