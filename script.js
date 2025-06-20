const button = document.getElementById("clickButton");
const response = document.getElementById("responseText");

button.addEventListener("click", function () {
  response.textContent = "You clicked the button!";
});