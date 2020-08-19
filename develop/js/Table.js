import React, { useEffect } from "react";
import Card from "./Card";

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
        <Card />
      </div>
    </section>
  );
};
export default Table;
