'use strict';

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

btn_roll.addEventListener('click', () => {
  randomNum = Math.floor(Math.random() * 6) + 1;
  randomDice = `dices/dice-${randomNum}.png`;
  dice.setAttribute('src', randomDice);

  if (randomNum > 1) {
    currentCount += randomNum;
    current_1.textContent = currentCount;
  } else {
    current_1.textContent = 0;
    currentCount = 0;
  }
  // console.log(currentCount);
});

btn_hold.addEventListener('click', () => {
  count1 += currentCount;
  if (count1 <= 100) {
    score_1.textContent = count1;
    current_1.textContent = 0;
    currentCount = 0;
  } else {
    alert('player1 is winner')
  }
});

