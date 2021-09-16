const user = require('../models/userModel')

const mainRoute = (req, res, err) => {
    res.send("Main Route !!!")
}

const addUser = (req, res, err) => {

    // getting the user from the body

    new user(req.body)
        .save()
        .then((u) => res.send(`User has been added: ${u}`))
        .catch(e => res.send(e.message))
}

const getUser = async (req, res, err) => {
    const id = req.params.id

    try{
        const data = await user.findById(id)

        if (!data)
            res.send("User Not Found")

        res.send(data)
    }catch(e) {
        res.send(e.message)
    }

}

// getting all the users
const getUsers = async (req, res, err) => {

    try{
        const data = await user.find()

        if (!data)
            res.send("Empty DB !!!")

        res.send(data)
    }catch(e) {
        res.send(e.message)
    }

}

// deleting a user
const delUser = async (req, res, err) => {

    try {
        const id = req.params.id
        // trying to delete
        const data = await user.findByIdAndDelete(id)

        if (!data) 
            res.send("Nothing to delete here")
        
        res.send(`User of id=${id} has been deleted!`)

    }catch(e) {
        res.send(e.message)
    }
}

module.exports = {
    mainRoute,
    addUser,
    getUser,
    getUsers,
    delUser
}