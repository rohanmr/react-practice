const mysql = require('mysql2/promise');

require('dotenv').config()

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,

})
async function testConnection() {
    try {
        const conn = await pool.getConnection();

        console.log("✅ Database connected successfully");
        conn.release();
    } catch (err) {
        console.error("❌ Database connection failed:", err.message);
    }
}

testConnection();

module.exports = pool



