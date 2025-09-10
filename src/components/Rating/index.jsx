import React from 'react';
import "./stars.scss"
import redstar from "../../assets/redstar.png"
import greystar from "../../assets/greystar.png"

// Composant pour afficher la note sous forme d'étoiles
const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5]; // tableau pour 5 étoiles

  return (
    <div className="rating">
      {stars.map((star) =>
        // Si la note est supérieure ou égale à l'étoile → étoile rouge, sinon grise
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating_icon"
            src={redstar}
            alt="red star"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating_icon"
            src={greystar}
            alt="grey star"
          />
        )
      )}
    </div>
  )
}

export default Rating;
