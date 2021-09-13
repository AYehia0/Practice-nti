const express = require('express')
const path = require('path')
const hbs = require('hbs')
const bodyParser = require("body-parser");

// imporing the routes
const mainRoute = require('./routes/mainRoute')


const app = express()

// middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, 'layouts'))
//hbs.registerPartials(path.join(__dirname, "/views/layouts"))


// body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// using the routes
app.use(mainRoute)

//not a vaild url/route
app.use((req, res, next)=>{
    const err = new Error("not found");
    err.status = 404;
    next(err)
})

app.use((err, req, res, next) => {
    // 500 for other related errors
    res.status(err.status || 500 )
    res.json({
        error: {
            message: err.message
        }
    })
})


// exporting
module.exports = app