"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // import http from "http";

var port = process.env.PORT || 8080;

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World\n");
//   })
//   .listen(8080, "127.0.0.1");

app.get("/", function (req, res, next) {
  throw new Error("test");
  res.status(200).send(JSON.stringify({ test: "test" }));
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({ status: "error", error: err.toString() });
});

var server = app.listen(port, function () {
  console.log("app running on port.", server.address().port);
});

console.log("Server running at http://127.0.0.1:8080/");