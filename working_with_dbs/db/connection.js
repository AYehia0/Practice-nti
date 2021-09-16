const mongoose = require('mongoose')

// connecting to the db
const dbNAME = "Test"
const dbURL = `mongodb://localhost:27017/${dbNAME}`

mongoose.connect(dbURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).catch(e => {
    console.log(e.message)
})

