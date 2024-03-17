const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'zerotrust',
    database: "zerotrustdatabase"
})

db.connect(err => {
    if(err) {
        console.error("Error connecting to MYSQL database");
    }else{
        console.log("Connected to MYSQL database");
    }
});