require("dotenv").config();
const express = require("express");
const { loadClient, listEvents, createEvent } = require("./apiClient");

const app = express();
const port = 3000;

loadClient();

app.get("/", function (req, res) {
  listEvents((events) => res.json(events));
});

app.post("/create", (req, res) => {
  createEvent((event) => {
    res.json(event);
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
