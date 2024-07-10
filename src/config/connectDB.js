const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '148.251.91.91',
    user: 'champ11_brt4r',
    password: 'champ11_brt4r',
    database: 'champ11_brt4r',
});

export default connection;
