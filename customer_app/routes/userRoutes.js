const router = require("express").Router()
const userController = require('../controller/userController')

// adding the routes

// using the routes

// get
router.get('/', userController.mainRouteGet)
router.get('/add', userController.addRouteGet)
router.get('/search', userController.searchRouteGet)
router.get('/show-all', userController.showAllRouteGet )
router.get('/show-single/:id', userController.showSingleRouteGet)
router.get('/edit/:id', userController.editRouteGet)

// post 
router.post('/search', userController.searchRoutePost)
router.post('/activate', userController.activateRoutePost)
router.post('/add', userController.addRoutePost)
router.post('/modify-balance', userController.balanceAddRoutePost)
router.post('/withdraw', userController.withdrawRoutePost)
router.post('/edit/:id', userController.editRoutePost)

module.exports = router

