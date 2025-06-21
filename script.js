const button = document.getElementById("clickButton");
const response = document.getElementById("responseText");

const quotes = [
    "The only limit is your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Don’t stop when you’re tired. Stop when you’re done."
]

button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    response.textContent = quotes[randomIndex];
});

const checkButton = document.getElementById("checkButton");
const ageInput = document.getElementById("ageInput");
const result = document.getElementById("ageResult");

checkButton.addEventListener("click", function () {
  const age = parseInt(ageInput.value);

  if (isNaN(age)) {
    result.textContent = "Please enter a valid number.";
  } else if (age >= 1 && age < 13) {
    result.textContent = "You're a kid!";
  } else if (age >= 14 && age <= 17) {
    result.textContent = "You're a teenager!";
  } else if (age >= 22 && age < 60) {
    result.textContent = "You're an adult!";
  } else if (age < 0) {
    result.textContent = "Is this you're future life?";
  } else if (age <= 18 && age >= 21) {
    result.textContent = "Welcome to Young-Adulthood!";
  }
  else {
    result.textContent = "You're a senior!";
  }
});

let secretNumber = Math.floor(Math.random() * 10) + 1;
let guessCount = 0;

const guessButton = document.getElementById("guessButton");
const guessInput = document.getElementById("guessInput");
const guessResult = document.getElementById("guessResult");
const guessCounter = document.getElementById("guessCounter");
const resetButton = document.getElementById("resetButton");

guessButton?.addEventListener("click", function () {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    guessResult.textContent = "Please enter a number between 1 and 10.";
    return;
  }

  guessCount++;
  guessCounter.textContent = `Guesses: ${guessCount}`;

  if (guess === secretNumber) {
    guessResult.textContent = "🎉 Correct! You got it in " + guessCount + " tries!";
  } else if (guess < secretNumber) {
    guessResult.textContent = "Too low. Try again!";
  } else {
    guessResult.textContent = "Too high. Try again!";
  }
});

resetButton?.addEventListener("click", function () {
  // Reset the game
  secretNumber = Math.floor(Math.random() * 10) + 1;
  guessCount = 0;
  guessCounter.textContent = "Guesses: 0";
  guessResult.textContent = "Game reset! Try a new number.";
  guessInput.value = "";
});

const bird = document.getElementById("bird");
let birdTop = 200;
let gravity = 2;
let isGameOver = false;

function fall() {
  if (isGameOver) return;

  birdTop += gravity;
  bird.style.top = birdTop + "px";

  // End game if bird hits the ground
  if (birdTop >= 460) {
    isGameOver = true;
    alert("Game Over!");
  }

  requestAnimationFrame(fall);
}

// Start falling
fall();

// Spacebar to flap
document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && !isGameOver) {
    birdTop -= 40; // Bird flaps upward
  }
});
