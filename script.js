function changeColor() {
  const colors = ["red", "green", "blue", "yellow", "orange", "pink"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
