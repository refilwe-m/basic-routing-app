import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { SideModal } from "..";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Dashboard</h1>
      <Routes>
        <Route path="/" element={<h3>Dashboard Home</h3>} />
        <Route
          path="test"
          element={
            <SideModal
              isOpen={true}
              onClose={() => {
                navigate("./");
              }}
            />
          }
        />
      </Routes>
      <button>
        <Link to="test">Open Side Modal</Link>
      </button>
    </section>
  );
};
