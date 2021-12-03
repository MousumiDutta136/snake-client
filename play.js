const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({    host: "localhost",//"172.23.206.47",//localhost,// IP address here,
    port: "50541"// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // conn.on("connect", (param1) => {
  //   console.log(param1);

  // })
  // conn.on("error", (text) => {
  //   if(!text){
  //     console.log(text);
  //   } 
  // })
  return conn;
};


console.log("Connecting ...");
connect();