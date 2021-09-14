const express = require('express')
const router = express.Router({mergeParams: true})
const fileHandler = require('../moduleX')

require('dotenv').config()
const fileName = process.env.fileName

router.get('/', (req, res, err) => {
 
    const id = req.params.account_num

    // getting the user to be edited 
    const user = fileHandler.getUserById(fileName, id, "account_num")

    res.render('edit', {
        user: user
    })
})

router.post('/', (req, res, err) => {

    // getting the data 
    const userData = req.body
    const id = req.params.account_num

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