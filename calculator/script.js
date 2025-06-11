const display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
  liveResult();
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Real-time preview of result if expression is valid
function liveResult() {
  try {
    const result = eval(display.value);
    if (!isNaN(result)) {
      display.setAttribute('title', `= ${result}`);
    }
  } catch {
    display.removeAttribute('title');
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    e.preventDefault();
    calculateResult();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
    liveResult();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
