let display = document.getElementById('display');

function appendValue(value) {
  if (value === '%') {
    try {
      display.value = eval(display.value) / 100;
    } catch {
      display.value = 'Error';
    }
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
// Enable keyboard input
document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    event.preventDefault();
    calculateResult();
  } else if (key === 'Backspace') {
    backspace();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === '%') {
    appendValue('%');
  }
});
