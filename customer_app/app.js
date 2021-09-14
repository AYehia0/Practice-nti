const express = require('express')
const path = require('path')
const hbs = require('hbs')

// imporing the routes
// from the routeAll 
const userRoutes = require('./routes/userRoutes')

const app = express()

// middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, 'layouts'))


// body parser isn't used anymore :D
app.use(express.urlencoded({extended: true})); 
app.use(express.json())

// using the routes
// all 
app.use(userRoutes)

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