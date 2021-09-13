// userForm route

const express = require('express')
const router = express.Router()

// testing the controller 
const con = require('../controller/userController')

router.get('/', (req, res, err) => {
    res.send('Main Page')
})

module.exports = router