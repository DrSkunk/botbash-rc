import express from "express";
import SerialPort from "serialport";

const app = express();
const port = process.env.PORT || 8080;
const comPort = process.env.COMPORT || "/dev/ttyACM0";

const serialPort = new SerialPort(comPort, {
  baudRate: 9600
});

app.get("/:action", (req, res, next) => {
  const validActions = ["left", "right", "front", "back"];
  const { action } = req.params;
  if (!validActions.includes(action)) {
    throw new Error(
      "Invalid action. Valid actions are left, right, front, back"
    );
  }
  serialPort.write(action[0]);

  res.status(200).send(JSON.stringify({ status: "success" }));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ status: "error", error: err.toString() });
});

const server = app.listen(port, function() {
  console.log("app running on port.", server.address().port);
});

console.log("Server running at http://127.0.0.1:8080/");
