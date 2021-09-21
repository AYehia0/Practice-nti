const router = require('express').Router()
const userCon = require('../controller/userController')
const auth = require('../middlewares/auth')

// login and register
router.post('/register', userCon.registerUser)
router.post('/login', userCon.loginUser)
router.post('/edit', auth, userCon.editProfile)

// showing user profile
router.get('/profile', auth, userCon.userProfile)
router.get('/logout', auth, userCon.logoutUser)

// exporting
module.exports = router