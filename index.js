'use strict';

const check = document.querySelector('.check');
const tryagain = document.querySelector('.again');

let score = 25;
let highScore = 0;
let randomNumber = Math.trunc(Math.random() * 25) + 1;

const displayMessage = message =>
  (document.querySelector('.guess-message').textContent = message);

check.addEventListener('click', function () {
  const input = Number(document.querySelector('.input').value);
  console.log(randomNumber);
  if (!input) {
    displayMessage('No input number');
  } else if (input === randomNumber) {
    document.querySelector('.card').style.backgroundColor = '#7155c6';
    document.querySelector('.logo-image').src = 'images/logogif.gif';
    document.querySelector('.numscore').textContent = randomNumber;
    document.querySelector('.numscore').style.width = '8rem';
    displayMessage('Correct Number!');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (input !== randomNumber) {
    if (score > 1) {
      score--;
      displayMessage(input > randomNumber ? 'To High' : 'To Low');
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

tryagain.addEventListener('click', function () {
  score = 25;
  randomNumber = Math.trunc(Math.random() * 25) + 1;
  document.querySelector('.card').style.backgroundColor = '#2c298c';
  document.querySelector('.logo-image').src = 'images/logo2.png';
  document.querySelector('.numscore').style.width = '4rem';
  document.querySelector('.numscore').textContent = '?';
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.input').value = '';
});
