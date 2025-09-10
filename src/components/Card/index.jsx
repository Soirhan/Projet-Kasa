import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

// Composant pour afficher un logement sous forme de carte cliquable
function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card">
      {/* Image du logement */}
      <img src={logement.cover} alt={logement.title} className="card__img" />
      {/* Titre du logement */}
      <h3 className="card__title">{logement.title}</h3>
    </Link>
  );
}

export default Card;
