import React, { useState, useEffect } from "react";
import Card from "./Card";
import fruit from "./../data/list.json";

const Table = () => {
  const dataFromJSON = fruit;
  const [fCard, setFCard] = useState("");
  const [sCard, setSCard] = useState("");
  const [TargetedCardFirst, setTargetedCardFirst] = useState();
  const [TargetedCardSecond, setTargetedCardSecond] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [points, setPoints] = useState(0);
  const [title, setTitle] = useState("Fruit memory game");
  const [shuffle, setShuffle] = useState(false);
  const [isLocked, setLocked] = useState(false);
  let TargetedCardFirstMemory = TargetedCardFirst;
  let TargetedCardSecundMemory = TargetedCardSecond;

  document.title = `${title}`;
  const handleClick = (event) => {
    const target = event.target.parentNode.dataset.fruitname;
    if (isLocked) return;
    if (!isClicked) {
      setIsClicked(true);
      flippingAnimation();
      setFCard(target);
      setTargetedCardFirst(event.target.parentNode);
    } else {
      flippingAnimation();
      setSCard(target);
      setTargetedCardSecond(event.target.parentNode);
    }
  };

  useEffect(() => {
    if (fCard === sCard) {
      setPoints(points + 1);
      console.log("Pasują", "Pierwszy", fCard, "Drug", sCard);
      setTitle(points);
      setIsClicked(false);
    } else {
      setLocked(true);
      setIsClicked(false);
      console.warn("Nie pasuja", "Pierwszy", fCard, "Drug", sCard);
      setFCard();
      setSCard();
      setTimeout(() => {
        TargetedCardFirstMemory.className = "memory-card";
        TargetedCardSecundMemory.className = "memory-card";
        setLocked(false);
      }, 800);
    }
  }, [sCard]);

  const shuffleCards = () => {
    let randomCardsPos = Math.floor(Math.random() * 19);
    return randomCardsPos;
  };

  const flippingAnimation = () => {
    event.target.parentNode.className += " flippingCard";
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
