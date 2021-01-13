# EVENT HANDLERS

### Use net library in node to establish a server and client

<br>

## SERVER

```javascript
// Require net
const net = require("net");
const server = net.createServer();

server.on();

// Server gets initialized and LISTENS to connections
server.listen(port, callback);
```

## CLIENT

####

```javascript
// Require net
const net = require("net");

// localhost
// ip

const client = net.createConnection({
  host: "localhost",
  port: 3001,
});
```
