import React from "react";
import "./CotcoOffice.css";
import CotcoSideNav from "./CotcoSideNav";

const CotcoOffice = () => {
  return (
    <div className="cotco-container">
      <div className="dashboard-content">
        <div className="cotco-header">
          <h1 className="header-title">Cotco Office</h1>
          <div className="header-buttons">
            <button>Create Farmer</button>
            <button>Create Sales</button>
            <button>Create Voucher</button>
            <button>Upload file</button>
          </div>
        </div>
        <div className="table-wrapper"></div>
        <table className="cotco-table">
          <thead>
            <tr>
              <th>Farmer</th>
              <th>Phone</th>
              <th>Sale</th>
              <th>Voucher</th>
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
          </tbody>
        </table>
      </div>

      <div className="side-navigation">
        <CotcoSideNav />
      </div>
    </div>
  );
};

export default CotcoOffice;
