import express from "express";
import bodyParser from "body-parser";
import Blockchain from "./blockchain.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const bitcoin = new Blockchain();

app.get("/blockchain", function (req, res) {
  res.send(bitcoin);
});

app.post("/transaction", function (req, res) {});

app.get("/mine", function (req, res) {});

app.listen(3000, function () {
  console.log("Listening on port 3000...");
});
