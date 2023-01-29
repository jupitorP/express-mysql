const express = require("express");
const app = express();
const PORT = 4000;
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.listen(PORT, () => {
  console.log("API Running");
});
const connection = mysql.createConnection(
  'mysql://cuns31s19ygzffvwqcbm:pscale_pw_h1eWHC35DP1N2cLGrvvIEnRpPgdpdGRHpG95VD4riCS@ap-southeast.connect.psdb.cloud/linlindb?ssl={"rejectUnauthorized":true}'
);

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

module.exports = app;
//node index.js
