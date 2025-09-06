import React from "react";
import "./banner.scss";

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="bannière" className="banner__img" />
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}

export default Banner;
