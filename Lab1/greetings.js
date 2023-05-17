// Sample input: node greetings.js -n ahmed -a 30 -c Egypt
// Sample output: Hello, ahmed 30 from Egypt!

const options = process.argv.slice(2);
const name = options[0].split("=")[1];
const age = options[1].split("=")[1];
const country = options[2].split("=")[1];

console.log(`Hello, ${name} ${age} from ${country}!`);
