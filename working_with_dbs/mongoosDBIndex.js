const mongoose = require('mongoose')

// connecting to the db
const dbNAME = "Test"
const dbURL = `mongodb://localhost:27017/${dbNAME}`

mongoose.connect(dbURL)

const collection = new mongoose.model('test', {

    // the model template

    name: {
        type: String
    },
    age: {
        type: Number
    }
})


// adding to db

const data = [
    {name: "Mustafa", age: "20"},
    {name: "Mohamed", age: 40}

]

data.forEach(el => {

    new collection(el)
        .save()
        .catch(err => {
            console.log(err.message)
        })

})

