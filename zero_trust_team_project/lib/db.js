const mysql = require("../../node_modules/mysql");

const db = createConnection({
  host: "localhost",
  user: "root",
  password: "zerotrust",
  database: "zerotrustdatabase",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MYSQL database");
  } else {
    console.log("Connected to MYSQL database");
  }
});
