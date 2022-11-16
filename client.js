const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT

  });

  conn.on('connect', () => {
    console.log('Sucessfully connected to the game server');
  });

  conn.on('connect', () => {
    conn.write('Name: RK');
  });

  conn.on('data', () => {
    console.log('you ded cuz you idled');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};