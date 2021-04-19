const express = require('express')
const app = express()

const PORT = 5000

app.get('/', (req, res) => {
    res.json({ "message": "welcome to my api"})
})

app.listen(PORT, () => {
    console.log('listening to ' + PORT)
})



