const readline = require("node:readline/promises");

const reader = readline.createInterface(process.stdin, process.stdout);

// generate random number between 0 - 10
const target = Math.round(Math.random() * 10);

async function run() {
  let guess = await reader.question("What is your guess?\n");

  while (guess != target) {
    if (isNaN(guess)) {
      console.log("Invalid input. Please enter a number.");
    } else if (guess > target) {
      console.log("Your guess is too high");
    } else if (guess < target) {
      console.log("Your guess is too low");
    }
    guess = await reader.question("What is your guess?\n");
  }

  console.log("Your guess is correct");
  reader.close();
}

run();