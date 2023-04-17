import React from "react";
import "./side-modal.css";

type SideModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SideModal = ({ isOpen, onClose }: SideModalProps) => {
  return (
    <div className={`side-modal ${isOpen ? "open" : ""}`}>
      <div className="side-modal-content">
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
