// userForm route

const express = require('express')
const router = express.Router()

router.get('/', (req, res, err) => {
    res.render('showAll')
})

module.exports = router