
const express = require('express')
const router = express.Router()

router.get('/', (req, res, err) => {
    res.send('Show single')
})

module.exports = router