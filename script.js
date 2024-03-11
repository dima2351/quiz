/* DOM */

let startSection = document.querySelector(".start-wrapper");
let quizSection = document.querySelector(".quiz-wrapper");
let startButton = document.querySelector(".start-button");
let quizHeading = document.querySelector(".question-heading");
let button = document.querySelectorAll(".answer-row > button");
let signs = ["-", "+"];
let answerCounter = 0
function startGame() {
  startSection.classList.add("hide");
  quizSection.classList.remove("hide");
  setTimeout(endGame, 10000);
  generateQuestion();
  answerCounter = 0;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}




function generateQuestion() {
  let number1 = getRandomInt(20);
  let number2 = getRandomInt(20);
  let sign = signs[getRandomInt(signs.length)]
  quizHeading.innerHTML = `${number1} ${sign}  ${number2}`;
  createAnswer(number1, number2, sign)
}

function createAnswer(number1, number2, sign) {
  let correctNumber = getRandomInt(button.length);

  for (let i = 0; i < button.length; i += 1) {
    if (i === correctNumber) {
      button[i].className = "button-right"
      if (sign === "-") {
        button[i].innerHTML = number1 - number2;
      } else {
        button[i].innerHTML = number1 + number2;
      }
    } else {
      button[i].innerHTML = getRandomInt(100);
      button[i].className = "button-wrong";
    }
  }
}
startButton.addEventListener("click", startGame);

generateQuestion();

for (let i = 0; 1 < button.length; i += 1) {
  button[i].addEventListener("click", generateQuestion);
  button[i].addEventListener("click", checkAnswer);
}


function endGame() {
  startSection.classList.remove("hide");
  quizSection.classList.add("hide");
  resultHeading.classList.remove("hide")
}

function checkAnswer() {
  answerCounter += 1;
}