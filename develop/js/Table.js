import React, { useState, useEffect } from "react";
import Card from "./Card";
import fruit from "./../data/list.json";
import ShuffleButton from "./ShuffleButton";

const Table = () => {
  const dataFromJSON = fruit;
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState();
  const [TargetedCardFirst, setTargetedCardFirst] = useState();
  const [TargetedCardSecond, setTargetedCardSecond] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [points, setPoints] = useState(1);
  const [title, setTitle] = useState("Fruit memory game");
  const [shuffle, setShuffle] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [delay, setDelay] = useState(1300);
  let TargetedCardFirstMemory = TargetedCardFirst;
  let TargetedCardSecondMemory = TargetedCardSecond;
  document.title = `${title}`;

  //handleClick
  //When first card was selected and set on stage, the second click set the nex card stage and lock immediately possibility choosing next card to time when the matching card and unflipping card animation was done.

  const handleClick = (event) => {
    const target = event.target.dataset.fruitname;

    if (isLocked) return;
    if (!isClicked) {
      setIsClicked(true);
      setTargetedCardFirst(event.target.parentElement);
      setFirstCard(target);
      flippingAnimation();
    } else {
      setTargetedCardSecond(event.target.parentElement);
      setIsLocked(true);
      setSecondCard(target);
      flippingAnimation();
    }
  };

  //handleClickLevel
  //Set delay to cover cards (choosing lvl)
  const handleClickLevel = (e) => {
    setDelay(e.target.value);
    restartGame();
  };

  useEffect(() => {
    if (!shuffle) {
      setShuffle((prevState) => !prevState);
      shuffleCards();
    }
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
      TargetedCardFirst.setAttribute("disabled", "disabled");
      TargetedCardSecond.setAttribute("disabled", "disabled");
      unlockCards();
      clearTarget();
    } else {
      coverCards();
      setSecondCard(null);
    }

    if (points == 9) {
      setTimeout(() => {
        restartGame();
      }, 2000);
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
    let cards = document.querySelectorAll(".memory-card");
    cards.forEach((card) => {
      let numbers = Math.floor(Math.random() * 18);
      card.style.order = numbers;
      card.className = "memory-card";
    });
    unlockCards();
  }

  //flippingAnimation
  //Function flip cards only when first and second was chosen
  //if not, return

  function flippingAnimation() {
    event.target.parentElement.className += " flippingCard";
  }

  //coverCards
  //Function cover cards when then not match whit delay.

  function coverCards() {
    setTimeout(() => {
      TargetedCardFirstMemory.className = "memory-card";
      TargetedCardSecondMemory.className = "memory-card";
      clearTarget();
      unlockCards();
    }, delay);
  }

  //clearTarget()
  //Function clear targeted cards after flipping

  function clearTarget() {
    setTargetedCardFirst();
    setTargetedCardSecond();
  }

  //restartGame
  //Function simply restart game to default value

  function restartGame() {
    shuffleCards();
    setTitle("Fruit memory game");
    setPoints(1);
  }

  return (
    <>
      <section>
        <div onClick={handleClickLevel}>
          <button value={1300}>Easy</button>
          <button value={800}>Medium</button>
          <button value={200}>Hard</button>
        </div>
      </section>
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
      <section>
        <ShuffleButton
          onClick={() => {
            shuffleCards();
          }}
        />
      </section>
    </>
  );
};
export default Table;
