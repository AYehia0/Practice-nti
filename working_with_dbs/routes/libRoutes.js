const router = require('express').Router()
const libCont = require('../controller/libController')

// GET requests
router.get('/get/:id', libCont.getBook)
router.get('/get', libCont.getBooks)

// Edit requests
router.delete('/edit/:id', libCont.deleteBook)
router.patch('/edit/:id', libCont.editBook)
router.post('/add', libCont.addBook)

module.exports = router
