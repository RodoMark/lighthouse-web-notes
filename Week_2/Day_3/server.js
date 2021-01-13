// Require net
const net = require("net");
const server = net.createServer();
const users = [];

server.on("connection", (client) => {
  // this callback has parameter
  // and that parameter is A CLIENT
  // that just recently connected up
  client.setEncoding("utf8");
  // Logs the number of people who've joined chat
  number++;
  console.log(`${client} has connected!!`);
  console.log("connected", number);
  // WRITE --- sends out a message to this exact client
  client.write("Welcome to my server.");
  // Add the user that just connect to the list
  users.push(client);

  client.on("data"),
    (data) => {
      console.log(data);
      for (let user of users) {
        user.write(`${user}: data`);
      }
    };
});

client.on("end", () => {
  users.splice(users.IndexOf(client), 1);
  console.log(`${client} has left!!`);
  number--;
  console.log("connected", number);
});

//
client.on("data", (data) => {
  console.log(`${client.name}: ${data}`);
});

// Server gets initialized and LISTENS to connections
server.listen(port, callback);
