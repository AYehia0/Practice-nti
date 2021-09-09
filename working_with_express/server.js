const config = require('./config')
const express = require('express')
const path = require('path')


const PORT = config.configs.PORT
const app = express()


// middlewares 
app.use('/static', express.static(path.join(__dirname, "public")))

app.get('/', (req, res, err) => {
    res.send("<h1>Hello Darkness My Old Friend</h1>")
})

//listening to the port
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

