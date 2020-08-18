import React, { useEffect } from "react";

const Table = () => {
  useEffect(() => {
    const memoryCard = document.querySelectorAll(".memory-card");

    let fCard,
      sCard,
      isClicked = false,
      cardLocker = false;

    function flipAnimation() {
      if (cardLocker) return;
      //Locking double click
      if (this === fCard) return;
      this.classList.add("flippingCard");
      //Sprawdzenie czy pierwsza karta została wybrana
      //Check the first card was selected
      if (!isClicked) {
        isClicked = true;
        fCard = this;
      } else {
        sCard = this;
        cardMatching();
      }
    }

    function cardMatching() {
      //Łączenie kart
      //Matching cards
      if (fCard.dataset.fruitname === sCard.dataset.fruitname) {
        listenerRemover();
      } else {
        backRotating();
      }
    }

    function listenerRemover() {
      fCard.removeEventListener("click", flipAnimation);
      sCard.removeEventListener("click", flipAnimation);
      clearMemory();
    }

    function backRotating() {
      //Blokada kart
      //Cards blocking
      cardLocker = true;
      //Usunięcie klasy jeśli nie pasują
      //If they don't match, removing flip class
      //delay 800ms
      setTimeout(() => {
        fCard.classList.remove("flippingCard");
        sCard.classList.remove("flippingCard");
        //unlocking cards
        clearMemory();
      }, 800);
    }

    function clearMemory() {
      fCard = null;
      sCard = null;
      cardLocker = false;
      isClicked = false;
    }

    (function shuffleCards() {
      memoryCard.forEach((card) => {
        let randomCardsPos = Math.floor(Math.random() * 19);
        card.style.order = randomCardsPos;
      });
    })();
    memoryCard.forEach((card) => card.addEventListener("click", flipAnimation));
  }, []);
  return (
    <section className="memory-game">
      <div className="memory-table">
        <div className="memory-card" data-fruitname="strawberry">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/strawberry.svg"></img>
        </div>{" "}
        <div className="memory-card" data-fruitname="strawberry">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/strawberry.svg"></img>
        </div>{" "}
        <button className="memory-card" data-fruitname="raspberry">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/raspberry.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="raspberry">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/raspberry.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="plum">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/plum.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="plum">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/plum.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="pear">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/pear.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="pear">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/pear.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="peach">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/peach.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="peach">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/peach.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="orange">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/orange.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="orange">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/orange.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="grape">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/grape.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="grape">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/grape.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="cherry">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/cherry.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="cherry">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/cherry.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="banana">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/banana.svg"></img>
        </button>{" "}
        <button className="memory-card" data-fruitname="banana">
          <img className="front" src="images/icons/cover.jpg"></img>
          <img className="back" src="images/cards/banana.svg"></img>
        </button>{" "}
      </div>
    </section>
  );
};
export default Table;
