import React, { useState } from "react";
import RecipieDetails from "./RecipieDetails";

const Recipie = ({ recipie }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipie.recipe;
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Ingredients
      </button>
      {show && <RecipieDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipie;
