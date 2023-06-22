import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import DashboardPage from "./Components/DashboardPage";
import Outlets from "./Components/Outlets";
import CotcoOffice from "./Components/CotcoOffice";
import SelfService from "./Components/SelfService";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/outlets" element={<Outlets />} />
        <Route path="/office" element={<CotcoOffice />} />
        <Route path="/self" element={<SelfService />} />
      </Routes>
    </Router>
  );
};

export default App;
