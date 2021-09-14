require('dotenv').config()
const express = require('express')
const router = express.Router()
const fileHandler = require('../moduleX')

const fileName = process.env.fileName

router.get('/', (req, res, err) => {
    res.render('add')
})

router.post('/', (req, res, err) => {
    const userData = req.body

    // adding id to the user
    const modUser = {
        account_num: Date.now(),
        status: false,
        ...userData
    }
    // doing processes on the data, whatever
    fileHandler.addToFile(fileName, modUser)
    res.redirect('/')
})

module.exports = router