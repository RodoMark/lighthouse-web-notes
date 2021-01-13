// Require net
const net = require("net");
const stdin = process.stdin;

const name = "Alon";

const client = net.createConnection({
  host: "135.23.222.131",
  port: 3001,
});

client.setEncoding("utf8");
stdin.setEncoding("utf8");
client.write(`It's me, ${name}`);

// When the user types anything
stdin.on("data", (input) => {
  client.write(input);
});

// Tells the client which interpreter to use for buffer packets
client.setEncoding("utf8");
// on('data') --- do something, when 'data' gets received
client.on("data", (data) => {
  console.log(data);
});
