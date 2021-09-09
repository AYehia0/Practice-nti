const config = require('./config')
const express = require('express')
const path = require('path')
const hbs = require('hbs')


const PORT = config.configs.PORT
const app = express()


// middlewares 
// '/static', 
app.use('/static', express.static(path.join(__dirname, "public")))
app.set('view engine', 'hbs')
app.set('views', './views');
hbs.registerPartials(path.join(__dirname, "/views/layouts"))

// routes
app.get('/', (req, res, err) => {
    // rendering the home page from views
    res.render('home', {
        title: "HomePage"
    })
})

app.get('/single-post', (req, res) => {

    res.render("single", {
        title: "SinglePost"
    })
})

app.get('/posts', (req, res) => {

    res.render('posts', {
        title: "AllPosts"
    })

})

// another method is to use "*"
//not a vaild url/route
app.use((req, res, next)=>{
    const err = new Error("not found")
    err.status = 404
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
//listening to the port
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

