import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card">
      <img src={logement.cover} alt={logement.title} className="card__img" />
      <h3 className="card__title">{logement.title}</h3>
    </Link>
  );
}

export default Card;
