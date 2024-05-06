const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Hello World: Test"
    })
})


app.listen(8081, (req, res) => {
    console.log("Server running on port 8081")
})