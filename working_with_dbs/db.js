const mongodb = require('mongodb')
const clientDB = mongodb.MongoClient

const dbPORT = "27017"
const dbNAME = "SchoolDB"
const dbURL = `mongodb://localhost:${dbPORT}`


const studentsData = [
    {
        name: "Someone",
        age: 19
    }, 
    {
        name: "Something",
        age: 30
    }
]

const findStudents = (searchTerm) => {

    console.log()
}

// setting up the connection and creating the db if not found
clientDB.connect(dbURL, {}, (err, client) => {

    // checing for errors
    if (err) return console.error("Can't connect to DB")

    const db = client.db(dbNAME)


    // all database queries are written here

    // creating collections
//    db.collection('student').insert(studentsData, (err, data) => {
//
//        if (!err)
//            return console.dir(data, {depth: null})
//        console.log(`Error: ${err}`)
//    })
//
//    // finding all the objects with name : something 
//
//    db.collection('student').find({name:"Something"}).toArray((err, result) => {
//        if (!err) console.log(result)
//    })
//

    // updating 
    db.collection('student').updateOne({name: "Something"}, {})

    //// deleting 
    //db.collection('student')
    //    .deleteMany({name: "Someone"})
    //    .then(res => console.log(res))
    //    .catch(err => console.log(err))
    //

})
