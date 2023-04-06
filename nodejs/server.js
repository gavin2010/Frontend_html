const http = require("http");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer(function (req, res) {
    console.log("welcome!");
  res.end("Hello, World!\n");
});

server.listen(port, hostname, function () {
  console.log("Server is running at %s:%s", hostname, port);
});
