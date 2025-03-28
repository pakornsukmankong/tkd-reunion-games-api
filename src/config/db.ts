import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const db = mysql.createPool({
  uri: process.env.DB_URL,  // Use `uri` for MySQL connection string
  waitForConnections: true,
  connectionLimit: 10, // Adjust as needed
  queueLimit: 0
});

export default db;