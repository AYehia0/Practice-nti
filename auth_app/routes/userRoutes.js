// the controller for the routes
const router = require('express').Router()
const con = require('../controller/userController')
const auth = require('../middlewares/auth')
const upload = require('../middlewares/fileUploader')

// the main route for testing only
router.get('/', con.main)

// register
router.post('/register', con.registerUser)

// adding address
router.post('/address/:id', con.addAddress)

// login
router.post('/login', con.loginUser)

// profile
router.get('/profile', auth, con.userProfile )

// upload img
router.post('/upload', auth, upload.single('img'), con.uploadFile)

module.exports = router