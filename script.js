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