import React, { useState, useEffect } from "react";
import Card from "./Card";
import fruit from "./../data/list.json";

const Table = () => {
  const dataFromJSON = fruit;
  const [fCard, setFCard] = useState("321");
  const [sCard, setSCard] = useState("123");
  const [isClicked, setIsClicked] = useState(false);
  const [points, setPoints] = useState(0);
  const [title, setTitle] = useState("Fruit memory game");
  document.title = `${title}`;
  const handleClick = (event) => {
    const target = event.target.parentNode.dataset.fruitname;
    if (!isClicked) {
      setIsClicked(true);
      flippingAnimation();
      setFCard(target);
    } else {
      flippingAnimation();
      setSCard(target);
    }
  };

  useEffect(() => {
    if (fCard === sCard) {
      setPoints(points + 1);
      console.log("Pasują", "Pierwszy", fCard, "Drug", sCard);
      setTitle(points);
      clearMemory();
    } else {
      clearMemory();
      console.log(points);
      console.log(this);
    }
  }, [sCard]);

  const flippingAnimation = () => {
    event.target.parentNode.className += " flippingCard";
  };

  const clearMemory = () => {
    setIsClicked(false);
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
