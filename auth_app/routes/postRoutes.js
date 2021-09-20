const router = require('express').Router()
const postController = require('../controller/postController')
const auth = require('../middlewares/auth')

router.post('/add',auth, postController.addPost)

router.get('/posts', auth, postController.posts)

router.post('/addComment/:id',auth, postController.addComment)

router.get('/addLike/:id',auth, postController.toggleLike)

module.exports = router