import React, { useState } from "react";
import Card from "./Card";
import fruit from "./../data/list.json";

const Table = () => {
  const dataFromJSON = fruit;
  const [fCard, setFCard] = useState("");
  const [sCard, setSCard] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (event) => {
    const target = event.target.parentNode.dataset.fruitname;
    if (!isClicked) {
      setIsClicked(true);
      flippingAnimation();
      setFCard(target);
    } else {
      flippingAnimation();
      setSCard(target);
      cardMatching();
    }
  };
  const cardMatching = () => {
    if (fCard === sCard) {
      console.log("tak", "first:", fCard, ", second:", sCard);
    } else {
      console.warn("nie", "first:", fCard, ", second:", sCard);
      clearMemory();
    }
  };

  const flippingAnimation = () => {
    event.target.parentNode.className += " flippingCard";
  };

  const clearMemory = () => {
    setFCard("");
    setSCard("");
    setIsClicked(!isClicked);
  };

  return (
    <section className="memory-game">
      <div className="memory-table">
        {dataFromJSON.map((card) => (
          <Card
            key={card.id}
            data={card}
            onClick={(event) => handleClick(event)}
          />
        ))}
      </div>
    </section>
  );
};
export default Table;
