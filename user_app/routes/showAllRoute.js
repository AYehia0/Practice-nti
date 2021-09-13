// userForm route
const express = require('express')
const router = express.Router()
const fileHandler = require('../moduleX')

const fileName = "models/users.json"

router.get('/', (req, res, err) => {

    // gettingg all the users from the json file
    const users = fileHandler.getData(fileName)

    res.render('showAll', {
        users: users
    })
})

module.exports = router