const express = require('express')
//const routes = require('./routes/mainRoutes')
const libRoutes = require('./routes/libRoutes')

const app = express()
require('./db/connection')

// middlewares 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//app.use(routes)
app.use(libRoutes)

module.exports = app