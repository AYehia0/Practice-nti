require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/user')


// check if user is authorized to create a task
const creator = async (req, res, next) => {
    try{

        // user is already logged in 
        const sentToken = req.header('Auth').replace('Bearer ', '')

        // comparing the token with the 
        // if not it will throw an error
        // we can use decode 
        const verifiy = jwt.verify(sentToken, process.env.JWTPASS)

        // user id
        // it would be better to check in the db
        const userId = verifiy._id
        const user = await User.findOne({_id: userId, 'tokens.token':sentToken})

        const role = user.position

        // getting the user if valid
        if (role == "man"){
            next()
        }else{
            throw new Error("Not a manager")
        }

    }catch(e){
        res.send(e.message)
    }
}

module.exports = creator 