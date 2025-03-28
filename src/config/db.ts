import dotenv from 'dotenv'
import mysql from 'mysql2'

dotenv.config()

const db = mysql.createConnection(process.env.DB_URL ?? '')

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message)
    return
  }
  console.log('Connected to MySQL database')
})

export default db
