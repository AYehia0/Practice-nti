const express = require('express')
const app = express()
const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')

// to get a process running at a port
// npx kill-port PORT 

// middlewares for accepting json response
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// using the routes
app.use('/user', userRouter)
app.use('/post', postRouter)

module.exports = app
