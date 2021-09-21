const router = require('express').Router()
const taskCon = require('../controller/taskController')
const auth = require('../middlewares/auth')
const create = require('../middlewares/creator')
const upload = require('../middlewares/fileUploader')


router.post('/add', auth, create, upload.single('file'), taskCon.addTask)
router.post('/assign/:id', auth, create, taskCon.assignToTask)

// could have made a middle ware for those who are assigned but meh
router.post('/response/:id', auth, upload.single('file'), taskCon.addResponse)

// exporting
module.exports = router

