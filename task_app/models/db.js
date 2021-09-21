// serving the database by creating the connection
const mongoose = require('mongoose')

// creating the connection 
mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    autoIndex: true
}).catch(e => {
    console.log(e.message)
})
