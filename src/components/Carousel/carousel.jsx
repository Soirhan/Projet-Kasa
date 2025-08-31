import React, { useState } from "react";
import './carousel.scss';

export default function Carousel({ img }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = img.length;

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? total - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === total - 1 ? 0 : currentIndex + 1);
  };

  if (total === 0) return null;

  return (
    <div className="carousel_container">
      <img src={img[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel_img" />

      {total > 1 && (
        <>
          <button className="carousel_arrow left" onClick={prevSlide}>‹</button>
          <button className="carousel_arrow right" onClick={nextSlide}>›</button>
        </>
      )}

      {total > 1 && (
        <div className="carousel_counter">
          {currentIndex + 1} / {total}
        </div>
      )}
    </div>
  );
}
