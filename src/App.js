import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";
import Outlets from "./Outlets";
import CotcoOffice from "./CotcoOffice";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/outlets" element={<Outlets />} />
        <Route path="/office" element={<CotcoOffice />} />
      </Routes>
    </Router>
  );
};

export default App;
