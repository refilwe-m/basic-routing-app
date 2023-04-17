import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Invoices,
  IndividualInvoice,
  SentInvoice,
} from "./components/invoices";
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
      </Routes>
    </Router>
  );
}

export default App;
