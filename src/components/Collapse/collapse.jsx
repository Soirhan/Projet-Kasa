// src/components/Collapse/collapse.jsx
import React, { useState } from "react";
import './collapse.scss';

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse_item">
      <button className="collapse_header" onClick={toggleCollapse}>
        {title}
        <span className={`collapse_icon ${isOpen ? "open" : ""}`}>▼</span>
      </button>
      <div className={`collapse_content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}
