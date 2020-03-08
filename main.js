const btn = document.querySelector(".btn");

let counter = 1;

btn.addEventListener("click", function() {
  if (counter % 5 == 0) {
    const circle = document.createElement("div");
    circle.innerHTML = `<div class='square circle'>${counter}`;
    document.body.appendChild(circle);
  } else {
    const square = document.createElement("div");
    square.innerHTML = `<div class="square">${counter}</div>`;
    document.body.appendChild(square);
  }
  counter++;
});
