import React from "react";
import "./CotcoOffice.css"; // Import the CSS file for styling

const CotcoOffice = () => {
  return (
    <div className="cotco-container">
      <div className="cotco-header">
        <h1>Cotco Office</h1>
        <div className="header-buttons">
          <button>Create Farmer</button>
          <button>Create Sales</button>
          <button>Create Voucher</button>
        </div>
      </div>
      <table className="cotco-table">
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

export default CotcoOffice;
