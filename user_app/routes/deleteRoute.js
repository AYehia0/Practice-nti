const express = require('express')
const router = express.Router({ mergeParams: true })
const fileHandler = require('../moduleX')

const fileName = "models/users.json"

router.get('/', (req, res, err) => {

    // getting the user
    const userId = req.params.id

    fileHandler.deleteUser(fileName, userId)

    res.redirect('/show-all')
})


module.exports = router
