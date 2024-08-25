const express = require('express')
const app = express()
const db = require('./src/db')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.post('/api/login', async (req, res) => {
  const {username, password } = req.body

  try {
    const user = await db.getUserByUsername(username);

    if (user && user.password === password) {
      res.json({ sucess: true })
    } else {
      res.json({ sucess: false, message : "Invalid credentials"})
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ sucess: false, message: 'Server error (add num)'})
  }
})




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})