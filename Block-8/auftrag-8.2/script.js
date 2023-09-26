let counter = 0;

function updateDisplay() {
  document.getElementById("display").innerText = counter;
}

function increment() {
  counter++;
  updateDisplay();
  updateURL();
}

function decrement() {
  counter--;
  updateDisplay();
  updateURL();
}

function updateURL() {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('counter', counter);
  const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
  history.pushState({ count: counter }, "", newUrl);
}

function onPopState(event) {
  const urlParams = new URLSearchParams(window.location.search);
  counter = parseInt(urlParams.get('counter')) || 0;
  updateDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
  onPopState();

  document.getElementById("increment").addEventListener("click", increment);
  document.getElementById("decrement").addEventListener("click", decrement);
  window.onpopstate = onPopState;
});