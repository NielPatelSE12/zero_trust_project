const mysql = require('mysql')

// Create the connection pool.
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'AudiS512!',
    database: 'zerotrust',
    waitForConnections: true
});

function checkConnection(){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if(err){
                reject(err);
            }else{
                connection.release();// This will release the connection
                resolve();
            }
        })
    })
}

module.exports = pool.promise();