
const express = require('express')
const router = express.Router({mergeParams: true})
const fileHandler = require('../moduleX')
const fileName = "models/users.json"

router.get('/', (req, res, err) => {
 
    const id = req.params.id

    // getting the user to be edited 
    const user = fileHandler.getUserById(fileName, id)

    res.render('edit', {
        user: user
    })
})

router.post('/', (req, res, err) => {

    // getting the data 
    const userData = req.body
    const id = req.params.id

    // adding id to the user
    const modUser = {
        id: id,
        ...userData
    }

    fileHandler.editUserById(fileName, id, modUser)
    // saving 
    // redirecting
    res.redirect('/show-all')
})


module.exports = router