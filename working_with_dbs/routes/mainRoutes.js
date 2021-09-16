const router = require('express').Router()
const cont = require('../controller/mainController')

// main route
router.get('/', cont.mainRoute)

module.exports = router