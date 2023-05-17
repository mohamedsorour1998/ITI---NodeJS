const options = process.argv.slice(2);
const operator = options[0].split("=")[1];
const operand1 = options[1].split("=")[1];
const operand2 = options[2].split("=")[1];

let results = 0;

if (operator == "+") {
  results = operand1 + operand2;
} else if (operator == "-") {
  results = operand1 - operand2;
} else if (operator == "*") {
  results = operand1 * operand2;
} else if (operator == "/") {
  results = operand1 / operand2;
} else if (operator == "**") {
  results = operand1 ** operand2;
}

console.log(`${operand1} ${operator} ${operand2} = ${results}`);
