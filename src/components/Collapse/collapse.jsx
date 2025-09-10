import React, { useState } from "react";
import './collapse.scss';
import arrowIcon from '../../assets/ChevronOpen.png'; // flèche pour indiquer l'ouverture

// Composant pour afficher un contenu rétractable (accordion)
export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false); // état pour savoir si le collapse est ouvert
  const toggleCollapse = () => setIsOpen(!isOpen); // fonction pour ouvrir/fermer

  return (
    <div className="collapse_item">
      {/* Entête du collapse avec le titre et l'icône */}
      <div className="collapse_header">
        <span>{title}</span>
        <img
          src={arrowIcon}
          alt="Déplier"
          className={`collapse_icon ${isOpen ? "open" : ""}`} // rotation flèche selon l'état
          onClick={toggleCollapse}
        />
      </div>

      {/* Contenu affiché si le collapse est ouvert */}
      <div className={`collapse_content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}
