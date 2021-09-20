require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/user')


// handling the auth part
const auth = async (req, res, next) => {

    try {
        // checking the token
        // the token is send with the headers
        // the Bearer part is sent by the browser
        const sentToken = req.header('Auth').replace('Bearer ', '')

        const data = jwt.verify(sentToken, process.env.JWTPASS)

        // finding the user
        // tokens.token searching in the db --> tokens --> token
        const user = await User.findOne({_id: data._id, 'tokens.token':sentToken})

        if(!user)
            throw new Error('User not found')

        req.user = user
        req.token= sentToken 

        next()

    }catch(e) {
        res.status(401).send({
            apiStatus: false,
            data: e.message,
            message:"unAuthorized"
        })
    }
}

module.exports = auth