let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

// Check if both inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
  let sum = parseFloat(num1) + parseFloat(num2);
  alert(`The sum of ${num1} and ${num2} is ${sum}.`);
} 
// Check if only one input is a valid number
else if (!isNaN(num1) || !isNaN(num2)) {
  alert("Invalid input. Please enter two valid numbers.");
} 
// Both inputs are not valid numbers
else {
  alert("Invalid input. Please enter two valid numbers.");
}
