// Function to append value to the input
function appendValue(value) {
  const result = document.getElementById("result");
  result.value += value;
}

// Function to clear the input
function clearResult() {
  const result = document.getElementById("result");
  result.value = "";
}

// Function to delete the last character
function deleteLast() {
  const result = document.getElementById("result");
  result.value = result.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
  const result = document.getElementById("result");
  try {
    result.value = eval(result.value); // Evaluates the expression
  } catch (error) {
    result.value = "Error"; // Displays error for invalid input
  }
}
