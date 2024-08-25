const { Pool } = require('pg')

const pool = new Pool({
  user: "",
  host: "",
  database: "",
  password: "",
  port: "",
})


const getUserByUsername = async (username) => {
  try {
    const result = await pool.querry(`SELECT password FROM admins WHERE username = $1`, [username])
    // const result = await pool.querry(`SELECT password FROM admins WHERE username = ?`, [username])
    return result.rows[0]
  } catch (error) {
    throw error
  }
}


// return await connPool.awaitQuery(`INSERT INTO contact (name_, email, delivery_date, phone_model, case_)
          // VALUES (?, ?, ?, ?, ?)`, [name, email, date, phone, case_]);


module.exports = {
  getUserByUsername, 
};