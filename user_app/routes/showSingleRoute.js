const fileHandler = require('../moduleX')
const express = require('express')
const router = express.Router({ mergeParams: true })


const fileName = "models/users.json"
router.get('/', (req, res, err) => {

    const userId = req.params.id

    // searching for a user
    const user = fileHandler.getUserById(fileName, userId)

    res.render('showSingle', {
        user: user
    })
})

module.exports = router