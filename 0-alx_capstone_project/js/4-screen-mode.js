// This script contains functions that makes a webpage change appearance
function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  var spooky = changeMode(16, "normal", "capitalize", "pink", "green");
  var darkMode = changeMode(16, "normal", "capitalize", "black", "white");
  var lightMode = changeMode(16, "normal", "capitalize", "#F6F6F6", "black");

  // Create and append buttons with event listeners
  var spookyButton = document.createElement("button");
  spookyButton.textContent = "Spooky";
  spookyButton.addEventListener("click", spooky);
  document.body.appendChild(spookyButton);

  var darkModeButton = document.createElement("button");
  darkModeButton.textContent = "Dark mode";
  darkModeButton.addEventListener("click", darkMode);
  document.body.appendChild(darkModeButton);

  var lightModeButton = document.createElement("button");
  lightModeButton.textContent = "Light mode";
  lightModeButton.addEventListener("click", lightMode);
  document.body.appendChild(lightModeButton);
}

// Call the main function to set up the page
main();