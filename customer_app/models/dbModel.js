const mongodb = require('mongodb')
const clientDB = mongodb.MongoClient

const dbPORT = "27017"
const dbNAME = "Users"
const dbURL = `mongodb://localhost:${dbPORT}`


// creating the connection
const dbConnection = (cb) => {

    clientDB.connect(dbURL, {}, (err, client) => {

        if (err) return cb(err, false)

        const db = client.db(dbNAME)

        // returning the db controller as callback
        cb(false, db)

    })
}


module.exports = dbConnection
