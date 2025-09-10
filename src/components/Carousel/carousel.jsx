import React, { useState } from "react";
import './carousel.scss';
import arrowLeft from '../../assets/chevronGauche.png';
import arrowRight from '../../assets/chevronDroit.png';

// Composant pour afficher un carrousel d'images
export default function Carousel({ img }) {
  const [currentIndex, setCurrentIndex] = useState(0); // index de l'image affichée
  const total = img.length;

  if (total === 0) return null; // si aucune image, ne rien afficher

  // Aller à l'image précédente (boucle circulaire)
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? total - 1 : currentIndex - 1);
  };

  // Aller à l'image suivante (boucle circulaire)
  const nextSlide = () => {
    setCurrentIndex(currentIndex === total - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel_container">
      {/* Image actuelle */}
      <img
        src={img[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="carousel_img"
      />

      {/* Flèches seulement si plus d'une image */}
      {total > 1 && (
        <>
          <img
            src={arrowLeft}
            alt="Précédent"
            className="carousel_arrow left"
            onClick={prevSlide}
          />
          <img
            src={arrowRight}
            alt="Suivant"
            className="carousel_arrow right"
            onClick={nextSlide}
          />
        </>
      )}

      {/* Compteur de slide */}
      {total > 1 && (
        <div className="carousel_counter">
          {currentIndex + 1} / {total}
        </div>
      )}
    </div>
  );
}
