'use strict';

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score_1 = document.querySelector('#score--0');
const score_2 = document.querySelector('#score--1');
const current_1 = document.querySelector('#current--0');
const current_2 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btn_new = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
let randomNum;
let randomDice;
let currentCount = 0;
let score = [0, 0];
let activePlayer = 0;

// # Function of switching the players.
function switchPlayers() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentCount = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
}

btn_roll.addEventListener('click', () => {
  // # random dice.
  randomNum = Math.floor(Math.random() * 6) + 1;
  randomDice = `dices/dice-${randomNum}.png`;
  dice.setAttribute('src', randomDice);

  if (randomNum !== 1) {
    // # increasing current count.
    currentCount += randomNum;
    document.getElementById(`current--${activePlayer}`).textContent = currentCount;
  } else {
    // # switching the player after getting 1 in dice.
    // document.getElementById(`current--${activePlayer}`).textContent = 0;
    // currentCount = 0;
    // activePlayer = activePlayer === 0 ? 1 : 0;
    // player1.classList.toggle('player--active');
    // player2.classList.toggle('player--active');
    switchPlayers();
  }
});

btn_hold.addEventListener('click', () => {
  // # Add current score to active player's score.

  score[activePlayer] += currentCount;
  document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

  currentCount = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentCount;

  // # check if players score is >=100 if yes than finish the game.

  

  // # switch to next player.
  switchPlayers();
});

// # Resetting the whole game.
btn_new.addEventListener('click', () => {
  currentCount = 0;
  score = [0, 0];
  activePlayer = 0;
  current_1.textContent = currentCount;
  current_2.textContent = currentCount;
  score_1.textContent = score[0];
  score_2.textContent = score[1];
  dice.removeAttribute('src', randomDice);
});
