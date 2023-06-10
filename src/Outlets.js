import React from "react";
import "./Outlets.css"; // Import the CSS file for styling

const Collection = () => {
  return (
    <div className="collection-container">
      <div className="collection-header">
        <h1>Payment Outlet</h1>
        <div className="header-buttons">
          <button>Redeem Voucher</button>
          <button>Validatae Voucher</button>
          <button>Make Payment</button>
        </div>
      </div>
      <table className="collection-table">
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

export default Collection;
