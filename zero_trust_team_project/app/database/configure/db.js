const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'AudiS512!',
    database: zero_trust
});

db.connect(err => {
    if(err){
        console.error("Error connecting to MYSQL database", err);
    }else{
        console.log("Connected to MYSQL database")
    }
});

module.exports = db;