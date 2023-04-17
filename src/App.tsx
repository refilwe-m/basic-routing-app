import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Invoices,
  IndividualInvoice,
  Dashboard,
  SentInvoice,
} from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Invoices />}></Route> */}
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<IndividualInvoice />} />
          <Route path="sent" element={<SentInvoice />} />
        </Route>
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
