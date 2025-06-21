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

const guessButton = document.getElementById("guessButton");
const guessInput = document.getElementById("guessInput");
const guessResult = document.getElementById("guessResult");

// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

guessButton?.addEventListener("click", function () {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    guessResult.textContent = "Do you even read instructions, bro? 🤔";
  } else if (guess === secretNumber) {
    guessResult.textContent = "🎉 Correct! You guessed it!";
  }
    else if (guess > secretNumber) {
    guessResult.textContent = "Lower Banker ☺";
  }
    else if (guess < secretNumber) {
    guessResult.textContent = "Higher!";
  }
    else {
    guessResult.textContent = "❌ Nope! Try again.";
  }
});