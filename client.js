const net = require("net");

let timer = 0;

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541,// PORT number here,
  });

  conn.on('connect', () => {
    console.log('Sucessfully connected to the game server');
  });

  conn.on('connect', () => {
    conn.write('Name: RK');
  });

  // conn.on('connect', () => {
  //     timer += 50;
  //     setInterval(() => {
  //       conn.write('Move: up');
  //     }, timer );
  //     //  timer += 50;
  //     // conn.write('Move: up')
  //   // conn.write('Move: down')
  //   // conn.write('Move: right')
  //   // conn.write('Move: left')
  // });

  // function stopMove() {
  //   clearInterval(timer === 200);
  // }

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