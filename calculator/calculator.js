const displayBar = document.getElementById("display");
// Clear the display bar
document.getElementById("clear").addEventListener("click", () => {
  displayBar.value = "";
});

// Display operation
function displayOperation(op) {
  displayBar.value += op;
}

// operation buttons
document
  .querySelectorAll(".button")
  .forEach((button) =>
    button.addEventListener("click", (e) => displayOperation(e.target.value))
  );

// number buttons
document
  .querySelectorAll(".number")
  .forEach((button) =>
    button.addEventListener("click", (e) => displayOperation(e.target.value))
  );

// display results
document.getElementById("operate").addEventListener("click", () => {
  const arr = displayBar.value.split("(");

  if (displayBar.value.includes("(")) {
    const degree = (+arr[1] * Math.PI) / 180;

    return arr[0] === "sin"
      ? (displayBar.value = Math.sin(degree))
      : arr[0] === "cos"
      ? (displayBar.value = Math.cos(degree))
      : (displayBar.value = Math.tan(degree));
  }

  const result = eval(displayBar.value);
  return (displayBar.value = result);
});

// trigonometric operations
document
  .querySelectorAll(".trig")
  .forEach((button) =>
    button.addEventListener(
      "click",
      (e) => (displayBar.value = e.target.value + "(")
    )
  );
