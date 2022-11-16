let connection;
const { stdin } = require("process");
// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // your code here

  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'q') {
    connection.write('Say: Got ya!');
  }
  if (key === 'h') {
    connection.write('Say: Hi!');
  }
  if (key === 'h') {
    connection.write('Say: Boo!');
  }
  if (key === 'z') {
    connection.write('Say: Watch out!');
  }
  if (key === 'l') {
    connection.write('Say: So long!');
  }
};


module.exports = {
  setupInput
};