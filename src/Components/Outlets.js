import React from "react";
import "../Css_files/Outlets.css"; // Import the CSS file for styling
import OutletSideNav from "./OutletSideNav";

const Outlets = () => {
  return (
    <div className="outlet-container">
      <div className="dashboard-content">
        <div className="outlet-header">
          <h1 className="header-title">Outlet</h1>
          <div className="header-buttons">
            <button>Redeem Voucher</button>
            <button>Validatae Voucher</button>
            <button>Make Payment</button>
          </div>
        </div>
        <div className="table-wrapper">
          <table className="outlet-table">
            <thead>
              <tr>
                <th>Transaction Id</th>
                <th>Farmer Name</th>
                <th>Amount</th>
                <th>Voucher code</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#238400</td>
                <td>Jack</td>
                <td>30000</td>
                <td>NBCID24C</td>
                <td>11:23PM</td>
              </tr>
              <tr>
                <td>#238400</td>
                <td>Jack</td>
                <td>30000</td>
                <td>NBCID24C</td>
                <td>11:23PM</td>
              </tr>
              <tr>
                <td>#238400</td>
                <td>Jack</td>
                <td>30000</td>
                <td>NBCID24C</td>
                <td>11:23PM</td>
              </tr>
              <tr>
                <td>#238400</td>
                <td>Jack</td>
                <td>30000</td>
                <td>NBCID24C</td>
                <td>11:23PM</td>
              </tr>
              <tr>
                <td>#238400</td>
                <td>Jack</td>
                <td>30000</td>
                <td>NBCID24C</td>
                <td>11:23PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="side-navigation">
        <OutletSideNav />
      </div>
    </div>
  );
};

export default Outlets;
