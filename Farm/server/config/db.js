const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root@2025',
  database: 'farm_management',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

module.exports = db;