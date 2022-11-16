const { stdin } = require("process");
const { connect } = require("./client");

// establishes a connection with the game server

console.log("Connecting ...");
connect();


// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  // your code here
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }})
};

 setupInput();