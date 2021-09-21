require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/user')


// check if user is authorized to do stuff
const auth = async (req, res, next) => {
    try{

        // checking the token
        // the token is being sent in the headers
        const sentToken = req.header('Auth').replace('Bearer ', '')

        // comparing the token with the 
        // if not it will throw an error
        const verifiy = jwt.verify(sentToken, process.env.JWTPASS)

        // user id
        const userId = verifiy._id

        // getting the user if valid
        const user = await User.findOne({_id: userId, 'tokens.token':sentToken})

        req.user = user
        req.token = sentToken

        next()

    }catch(e){
        res.send(e.message)
    }

}

module.exports = auth