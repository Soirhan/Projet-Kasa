import React from "react";
import "./banner.scss";

// Composant pour afficher une bannière avec image et texte optionnel
function Banner({ image, text }) {
  return (
    <div className="banner">
      {/* Image de la bannière */}
      <img src={image} alt="bannière" className="banner__img" />
      {/* Texte affiché sur la bannière si fourni */}
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}

export default Banner;
