'use strict';

const scoreEl = document.querySelectorAll('.score');
const btnNew = document.querySelector('.btn--new');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
let currentScore = 0;

for (let i = 0; i < scoreEl.length; i++) {
  scoreEl[i].textContent = 0;
}

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
  }
  console.log(dice);
});
// const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');
// const diceEl = document.querySelector('.dice');

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');
