import React, { useEffect } from "react";

const Table = () => {
  useEffect(() => {
    const memoryCard = document.querySelectorAll(".memory-card");
    let fCard,
      sCard,
      isClicked = false;

    function flipAnimation() {
      this.classList.add("flipingCard");
      //Sprawdzenie czy pierwsza karta została wybrana
      //Check the first card was selected
      if (!isClicked) {
        isClicked = true;
        fCard = this;
      } else {
        isClicked = false;
        sCard = this;
        //Łączenie kart
        //Matching cards
        if (fCard.dataset.fruitname === sCard.dataset.fruitname) {
          fCard.removeEventListener("click", flipAnimation);
          sCard.removeEventListener("click", flipAnimation);
        } else {
          //Usunięcie klasy jeśli nie pasują
          //If they don't match, removing flip class
          setTimeout(() => {
            fCard.classList.remove("flipingCard");
            sCard.classList.remove("flipingCard");
          }, 800);
        }
      }
    }
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
