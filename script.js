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