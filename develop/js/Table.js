import React, { useState, useEffect } from "react";
import Card from "./Card";
import fruit from "./../data/list.json";

const Table = () => {
  const dataFromJSON = fruit;
  const [firstCard, setFirstCard] = useState();
  const [secondCard, setSecondCard] = useState();
  const [TargetedCardFirst, setTargetedCardFirst] = useState();
  const [TargetedCardSecond, setTargetedCardSecond] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [points, setPoints] = useState(1);
  const [title, setTitle] = useState("Fruit memory game");
  const [shuffle, setShuffle] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [matchCards, setMatchCards] = useState([]);
  let TargetedCardFirstMemory = TargetedCardFirst;
  let TargetedCardSecondMemory = TargetedCardSecond;
  document.title = `${title}`;

  //handleClick
  //When first card was selected and set on stage, the second click set the nex card stage and lock immediately possibility choosing next card to time when the matching card and unflipping card animation was done.

  const handleClick = (event) => {
    const target = event.target.parentElement.dataset.fruitname;
    if (isLocked) return;
    if (!isClicked) {
      setIsClicked(true);
      setFirstCard(target);
      flippingAnimation();
      setTargetedCardFirst(event.target.parentNode);
      console.log(TargetedCardFirst);
    } else {
      setSecondCard(target);
      setIsLocked(true);
      setTargetedCardSecond(event.target.parentElement);
      flippingAnimation();
      console.log(TargetedCardSecond);
    }
  };

  useEffect(() => {
    if (isClicked) {
      matchingCards();
    }
  }, [secondCard]);

  //MatchingCards
  //Function matching cards by dataset from button, then when secondCard state changing/updating

  function matchingCards() {
    if (firstCard === secondCard) {
      setPoints(points + 1);
      setTitle(points);
      unlockCards();
      console.info(firstCard, secondCard);
    } else {
      coverCards();
      unlockCards();
      console.warn(firstCard, secondCard);
    }
  }

  //unlockCards
  //Function unlocking picking cards and restart state to previous state

  function unlockCards() {
    setIsLocked(false);
    setIsClicked(false);
  }

  //shuffleCards
  //Function shuffling cards immediately using  flex order

  function shuffleCards() {
    let cards = document.querySelectorAll("button");
    cards.forEach((card) => {
      let numbers = Math.floor(Math.random() * 19);
      card.style.order = numbers;
    });
  }

  //flippingAnimation
  //Function flip cards only when first and second was chosen
  //if not, return

  function flippingAnimation() {
    event.target.parentElement.className += " flippingCard";
  }

  //coverCards
  //Function cover cards when then not match whit delay.
  //Delay can be set by user in future.

  function coverCards() {
    setTimeout(() => {
      TargetedCardFirstMemory.className = "memory-card";
      TargetedCardSecondMemory.className = "memory-card";
      clearTarget();
    }, 800);
  }

  //clearTarget()
  //Function clear targeted cards after flipping

  function clearTarget() {
    setTargetedCardFirst();
    setTargetedCardSecond();
  }

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
