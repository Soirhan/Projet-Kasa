import React, { useState } from "react";
import './collapse.scss';
import arrowIcon from '../../assets/ChevronOpen.png'; // flèche personnalisée

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse_item">
      <div className="collapse_header">
        <span>{title}</span>
        <img
          src={arrowIcon}
          alt="Déplier"
          className={`collapse_icon ${isOpen ? "open" : ""}`}
          onClick={toggleCollapse}
        />
      </div>
      <div className={`collapse_content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}
