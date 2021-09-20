const express = require('express')
const app = express()
const userRouter = require('./routes/userRoutes')

// to get a process running at a port
// npx kill-port PORT 

// middlewares for accepting json response
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// using the routes
app.use(userRouter)

module.exports = app
