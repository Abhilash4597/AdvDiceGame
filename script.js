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
let count1 = 0;
let count2 = 0;
let activePlayer = 0;

btn_roll.addEventListener('click', () => {
  // # random dice.
  randomNum = Math.floor(Math.random() * 6) + 1;
  randomDice = `dices/dice-${randomNum}.png`;
  dice.setAttribute('src', randomDice);

  if (randomNum !== 1) {
    // # increasing current count.
    currentCount += randomNum;
    // current_1.textContent = currentCount;
    document.getElementById(`current--${activePlayer}`).textContent = currentCount;
  } else {
    // # switching the player after getting 1 in dice.
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentCount = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
    // current_1.textContent = 0;
  }
  // console.log(currentCount);
});

// btn_hold.addEventListener('click', () => {
//   // count2 += currentCount;
//   count1 += currentCount;
//   if (count1 !== 100) {
//     // score_1.textContent = count1;
//     if (randomNum !== 1) {
//       document.getElementById(`score--${activePlayer}`).textContent = count1//`count${randomNum}`;
//       document.getElementById(`current--${activePlayer}`).textContent = 0;
//       !randomNum;
//       count1 = 0;
//       currentCount = 0;
//     }
//   } else {
//     alert('player1 is winner');
//   }
// });
