const express = require('express')
const router = express.Router()
const fileHandler = require('../moduleX')

const fileName = "models/users.json"

router.get('/', (req, res, err) => {
    res.render('add')
})

router.post('/', (req, res, err) => {
    const userData = req.body

    // adding id to the user
    const modUser = {
        id: Date.now(),
        ...userData
    }
    // doing processes on the data, whatever
    fileHandler.addToFile(fileName, modUser)
    res.redirect('/')
})

module.exports = router