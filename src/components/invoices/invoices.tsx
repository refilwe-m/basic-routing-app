import React from "react";
import { Outlet } from "react-router-dom";

export const Invoices = () => {
  return (
    <section className="invoices">
      <h1>Invoices</h1>
      <Outlet />
    </section>
  );
};
