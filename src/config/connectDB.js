const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '194.233.69.9',
    user: 'kbmplay',
    password: 'kbmplay',
    database: 'kbmplay',
});

export default connection;