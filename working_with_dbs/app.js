const express = require('express')
const routes = require('./routes/mainRoutes')

const app = express()
require('./db/connection')


// middlewares 
app.use(express.json())
app.use(routes)


module.exports = app