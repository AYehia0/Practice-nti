const router = require('express').Router()
const cont = require('../controller/mainController')

// main route
router.get('/', cont.mainRoute)


// adding users route
router.post('/add', cont.addUser)
router.get('/get/:id', cont.getUser)

module.exports = router