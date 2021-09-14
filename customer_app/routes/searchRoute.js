const express = require('express')
const router = express.Router({mergeParams: true})
const fileHandler = require('../moduleX')

require('dotenv').config()
const fileName = process.env.fileName

router.get('/', (req, res, err) => {
    
    res.render('search')

})

router.post('/', (req, res, err) => {

    // getting the data 
    const id = req.body.account_num

    // adding id to the user
    const user = fileHandler.getUserById(fileName, id, "account_num")

    // if user exists
    if (user) {
        // i tried to redirect t00 
        res.render('search', user)
    }else {
        // 
    }

    // saving 
    // redirecting
    //res.redirect('/show-all')
})


module.exports = router
