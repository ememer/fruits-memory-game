import React from "react";
import fruits from "./../date/list.json";
const Card = () => {
  const fruitsListFromData = fruits;

  const card = fruitsListFromData.map((card, index) => (
    <button key={index} className="memory-card" data-fruitname={card.fruit}>
      <img className="front" src="images/icons/cover.jpg" />
      <img className="back" src={card.url} />
    </button>
  ));

  return <>{card}</>;
};

export default Card;
