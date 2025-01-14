//make connection to database
const mysql = require("mysql2/promise"); //async behavior

const pool = mysql.createPool({
    host:"localhost",
    user:"yourUserName",
    password:"yourPassword",
    database:"igdb",
    port:3306
});

module.exports = pool;