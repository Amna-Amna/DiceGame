'use strict';

const score = document.querySelectorAll('.score');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
for (let i = 0; i < score.length; i++) {
  score[i].textContent = 0;
}

console.log(score);

// const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');
// const diceEl = document.querySelector('.dice');

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');
