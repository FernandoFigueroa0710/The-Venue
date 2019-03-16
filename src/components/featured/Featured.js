import React from "react";
import Carrusel from "./Carrusel";

const Featured = () => {
  return (
    <div style={{ postion: "relative" }}>
      <Carrusel />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
    </div>
  );
};

export default Featured;
