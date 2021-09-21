const User = require('../models/user')

// user registeration
const registerUser = async (req, res, err) => {

    try{
        // create a new User
        const user = new User(req.body) 

        // saving 
        await user.save()

        res.send({
            status: "success",
            data: user
        })
    }catch(e) {
        res.send(e.message)
    }

}

const loginUser = async (req, res, err) => {
    try {
        let user = await User.loginUser(req.body.email, req.body.password)
        
        //getting the token 
        const token = await user.generateToken()

        res.send({
            status: "Success",
            data: {
                user,
                token
            }
         })

    }catch(e){
        res.send(e.message)
    }
}

// showing the user's info,, make sure to add the auth middleware
const userProfile = async (req, res, err) => {
    try{

        // getting the user's info
        // user info are send with the headers
        const user = req.user

        res.send({data: user})

    }catch(e){
        res.send(e.message)
    }

}

// use auth 
const editProfile = async (req, res, err) => {
    try {

        let user = req.user
        let newUser = req.body

        await User.findByIdAndUpdate(user._id, newUser, { runValidators: true })
        res.send(newUser)
        
    } catch (e) {
       res.send(e.message) 
    }

}


// log out from one device
const logoutUser = async (req, res) => {
    // remove the last token
    try{

        req.user.tokens.filter(t => {
            return t.token != req.token
        })

        await req.user.save()
        res.send({status: "Success"})

    }catch(e) {
        res.status(500).send({ 
            apiStatus:false, 
            data:e.message, 
            message: 'error'
        })
    }
}

// exporting task routes
module.exports = {
    registerUser,
    loginUser,
    userProfile,
    editProfile,
    logoutUser
}