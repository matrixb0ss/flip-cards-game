import React, { Component } from 'react';
import aurelia from './aurelia.svg';
import angular from './angular.svg';
import ember from './ember.svg';
import js from './js-badge.svg';
import react from './react.svg';
import vue from './vue.svg';
import './App.css';

class App extends Component {



  render() {
    const cards = document.querySelectorAll('.memory-card');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;

      this.classList.add('flip');

      if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;

        return;
      }

      // second click
      secondCard = this;

      checkForMatch();
    }

    function checkForMatch() {
      let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

      isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);

      resetBoard();
    }

    function unflipCards() {
      lockBoard = true;

      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
      }, 1500);
    }

    function resetBoard() {
      [hasFlippedCard, lockBoard] = [false, false];
      [firstCard, secondCard] = [null, null];
    }

    (function shuffle() {
      cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
      });
    })();

    cards.forEach(card => card.addEventListener('click', flipCard));
    
    return (
      <div className="App">
        <section className="memory-game">
          <div className="memory-card" data-framework="react">
            <img className="front-face" src={aurelia} alt="React" />
            <img className="back-face" src={js} alt="Memory Card" />
          </div>

          <div className="memory-card" data-framework="react">
            <img className="front-face" src={react} alt="React" />
            <img className="back-face" src={js} alt="Memory Card" />
          </div>

          <div className="memory-card" data-framework="angular">
            <img className="front-face" src={angular} alt="Angular" />
            <img className="back-face" src={js} alt="Memory Card" />
          </div>

          <div className="memory-card" data-framework="angular">
            <img className="front-face" src={angular} alt="Angular" />
            <img className="back-face" src={js} alt="Memory Card" />
          </div>

          <div className="memory-card" data-framework="ember">
            <img className="front-face" src={ember} alt="Ember" />
            <img className="back-face" src={js} alt="Memory Card" />
          </div>

          <div className="memory-card" data-framework="ember">
            <img className="front-face" src={ember} alt="Ember" />
            <img className="back-face" src={js} alt="Memory Card" />
          </div>

          <div className="memory-card" data-framework="vue">
            <img className="front-face" src={vue} alt="Vue" />
            <img className="back-face" src={js} alt="Memory Card" />
          </div>

          <div className="memory-card" data-framework="vue">
            <img className="front-face" src={vue} alt="Vue" />
            <img className="back-face" src={js} alt="Memory Card" />
          </div>

          <div className="memory-card" data-framework="backbone">
            <img className="front-face" src={js} alt="Backbone" />
            <img className="back-face" src={js} alt="Memory Card" />
          </div>

          <div className="memory-card" data-framework="backbone">
            <img className="front-face" src={js} alt="Backbone" />
            <img className="back-face" src={js} alt="Memory Card" />
          </div>

          <div className="memory-card" data-framework="aurelia">
            <img className="front-face" src={aurelia} alt="Aurelia" />
            <img className="back-face" src={js} alt="Memory Card" />
          </div>

          <div className="memory-card" data-framework="aurelia">
            <img className="front-face" src={aurelia} alt="Aurelia" />
            <img className="back-face" src={js} alt="Memory Card" />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
