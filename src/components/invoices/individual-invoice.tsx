import React from "react";
import { useParams } from "react-router-dom";

export const IndividualInvoice = () => {
  const { invoiceId } = useParams();
  return (
    <section className="individual-invoice">
      <h1>Individual {invoiceId}</h1>
    </section>
  );
};
