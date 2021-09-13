const express = require('express')
const router = express.Router()

router.get('/', (req, res, err) => {
    res.render('add')
})

module.exports = router