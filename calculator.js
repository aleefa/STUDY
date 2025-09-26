function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    default:
      return "Invalid operator";
  }
}

// Example usage:
console.log(calculate(5, 2, "+")); // 7
console.log(calculate(5, 2, "-")); // 3
console.log(calculate(5, 2, "*")); // 10
console.log(calculate(5, 2, "/")); // 2.5
