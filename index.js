// import http from "http";
import express from "express";
const app = express();
const port = process.env.PORT || 8080;

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World\n");
//   })
//   .listen(8080, "127.0.0.1");

app.get("/", (req, res, next) => {
    throw new Error("test")
  res.status(200).send(JSON.stringify({ test: "test" }));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ status: "error", error: err.toString() });
});

const server = app.listen(port, function() {
  console.log("app running on port.", server.address().port);
});

console.log("Server running at http://127.0.0.1:8080/");
