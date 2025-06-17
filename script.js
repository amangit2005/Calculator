const display = document.getElementById("display");

function appendCharacter(char) {
  display.value += char;

  // Trigger animation
  display.classList.remove('input-animate');
  void display.offsetWidth; // Force reflow to restart animation
  display.classList.add('input-animate');
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    // Only evaluate if display is not empty
    if (display.value.trim() !== "") {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "Error";
  }
}