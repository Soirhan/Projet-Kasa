import React, { useState } from "react";
import './collapse.scss';

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse_item">
      <div className="collapse_header">
        <span>{title}</span>
        {/* onClick uniquement sur l'icône */}
        <span 
          className={`collapse_icon ${isOpen ? "open" : ""}`} 
          onClick={toggleCollapse}
        >
          ▼
        </span>
      </div>
      <div className={`collapse_content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}
