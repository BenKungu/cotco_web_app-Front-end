import React from "react";
import "../Css_files/SelfService.css";

const SelfService = () => {
  return (
    <div className="self-container">
      <div className="dashboard-content">
        <div className="self-header">
          <h1 className="header-title">Cotco Mobile Payment</h1>
          <div className="header-buttons">
            <button>Confirm Voucher</button>
            <button>Redeem to mobile</button>
            <button>Check Voucher Balance</button>
          </div>
        </div>
        <div className="table-wrapper">
          <table className="self-table">
            <thead>
              <tr>
                <th>Transaction Id</th>
                <th>Outlet name</th>
                <th>Amount</th>
                <th>Voucher</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#238400</td>
                <td>Nairobi</td>
                <td>30000</td>
                <td>NBCID24C</td>
                <td>11:23PM</td>
              </tr>
              <tr>
                <td>#238400</td>
                <td>Kilifi</td>
                <td>30000</td>
                <td>NBCID24C</td>
                <td>11:23PM</td>
              </tr>
              <tr>
                <td>#238400</td>
                <td>Eldoret</td>
                <td>30000</td>
                <td>NBCID24C</td>
                <td>11:23PM</td>
              </tr>
              <tr>
                <td>#238400</td>
                <td>Kisii</td>
                <td>30000</td>
                <td>NBCID24C</td>
                <td>11:23PM</td>
              </tr>
              <tr>
                <td>#238400</td>
                <td>Turkana</td>
                <td>30000</td>
                <td>NBCID24C</td>
                <td>11:23PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SelfService;
