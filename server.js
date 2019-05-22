const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'newpass',
    database: 'node',
    port: 3307,
});
