require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 4000;
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());

const connection = mysql.createConnection(process.env.DATABASE_URL);

app.get("/", (req, res) => {
  res.send("This is my API running");
});

app.get("/att", (req, res) => {
  connection.query(
    "SELECT * FROM attractions",
    function (err, resules, fields) {
      res.send(resules);
    }
  );
});

app.listen(process.env.PORT || 4000);

module.exports = app;
//node index.js
