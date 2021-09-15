const mongodb = require('mongodb')
const clientDB = mongodb.MongoClient

const dbPORT = "27017"
const dbNAME = "SchoolDB"
const dbURL = `mongodb://localhost:${dbPORT}`

// setting up the connection and creating the db if not found
clientDB.connect(dbURL, {}, (err, client) => {

    // checing for errors
    if (err) return console.error("Can't connect to DB")

    const db = client.db(dbNAME)

    // creating collections
    db.collection('student').insertOne({
        name: "Someone",
        age: 19
    })
})
