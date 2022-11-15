const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541,// PORT number here,
  });

  conn.on('connect', () => {
    console.log('Sucessfully connected to the game server');
  });

  conn.on('connect', () => {
    console.log('Name: RK');
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