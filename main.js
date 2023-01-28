"use strict";

const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");
const guessNumber = document.querySelector(".guess");
const winnerNumber = document.querySelector(".number");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const showMessage = (msg) => (message.textContent = msg);

checkButton.addEventListener("click", function () {
  const number = Number(guessNumber.value);
  console.log(number, typeof number);

  if (!number) {
    showMessage("There's no number!");
  }
  // Winner number
  else if (number === secretNumber) {
    winnerNumber.textContent = secretNumber;
    showMessage("You guessed the number!");
    document.querySelector("body").style.backgroundColor = "#c52d2d";
    winnerNumber.style.width = "25rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  }
  // Number is not the same as SecretNumber
  else if (number != secretNumber) {
    if (score > 1) {
      showMessage(number < secretNumber ? "Too slow" : "Too high");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      showMessage("You just lost the game 😔");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  showMessage("Start guessing");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  guessNumber.value = "";
  document.querySelector("body").style.backgroundColor = "#3f2828";
  winnerNumber.textContent = "?";
  winnerNumber.style.width = "15rem";
});
