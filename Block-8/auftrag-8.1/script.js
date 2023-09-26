let counter = 0;

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = counter;
}

function increase() {
  counter++;
  updateDisplay();
  history.pushState({ count: counter }, "", `?count=${counter}`);
}

function onPopState(event) {
  if (event.state && event.state.count !== undefined) {
    counter = event.state.count;
    updateDisplay();
  }
}

function decrease() {
  counter--;
  updateDisplay();
  history.pushState({ count: counter }, "", `?count=${counter}`);
}


document.addEventListener("DOMContentLoaded", () => {
  updateDisplay();

  document.getElementById("increment").addEventListener("click", increase);
  document.getElementById("decrement").addEventListener("click", decrease);
  window.onpopstate = onPopState;
});