const router = require('express').Router()
const cont = require('../controller/mainController')

// main route
router.get('/', cont.mainRoute)


// adding users route
router.post('/add', cont.addUser)
router.get('/get/:id', cont.getUser)
router.delete('/get/:id', cont.delUser)
router.get('/all', cont.getUsers)

module.exports = router