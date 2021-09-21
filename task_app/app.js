const express = require('express')
const app = express()

// importing the routes
const userRouter = require('./routes/userRoute')
const taskRouter = require('./routes/taskRoute')

// to get a process running at a port
// npx kill-port PORT 

// middlewares for accepting json response
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// using the routes
app.use('/user', userRouter)
app.use('/task', taskRouter)

module.exports = app