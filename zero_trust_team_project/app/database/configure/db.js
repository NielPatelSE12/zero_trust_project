const express = require('express');
const mysql = require ('mysql');

const app = express();

//MYSQL connection configuration

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'AudiS512!',
    database: 'zero_trust'
});

connection.connect((err) => {
if(err){
    console.error('Error connecting to MYSQL:'+ err.stack);
    return;

}else{
console.log('Connected to MYSQL as id'+ connection.threadId);
}
});

// Define API endpoints


// Start the server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});

module.exports = connection;